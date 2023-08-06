import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import Overlay from "../../components/Overlay";

const TodoList = () => {
    const headers = {
        token: JSON.parse(localStorage.getItem("user")).token
    }

    const taskValidationSchema = yup.object().shape({
        task: yup
            .string()
            .test(
                "not-only-numbers",
                "Task should not consist only of numbers",
                (value) => {
                    return !/^\d+$/.test(value);
                }
            )
            .required("Task is required"),
    });

    const dueDateValidationSchema = yup.object().shape({
        dueDate: yup
            .date()
            .min(new Date(), "Due date cannot be in the past")
            .required("Due date is required"),
    });

    const [task, setTask] = useState();
    const [todoList, setTodoList] = useState();
    const [todoID, setToDoID] = useState();
    const [due, setDue] = useState();
    const [resetList, setResetList] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessageDate, setErrorMessageDate] = useState("");

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(process.env.REACT_APP_API_BASE + `/todo`, { headers })
            .then(function (response) {
                setLoading(false);
                console.log(response.data)
                if (response.data.length === 0) {
                    // alert("Empty Todo");
                } else {
                    setToDoID(response.data[0]._id);
                    setTodoList(response.data[0].tasks);
                }

            });
    }, [resetList]);

    const addTask = (e) => {
        e.preventDefault();

        taskValidationSchema
            .validate({ task })
            .then(() => {
                dueDateValidationSchema
                    .validate({ dueDate: due })
                    .then(() => {

                        setTask("");
                        setDue("");
                        setErrorMessage("");
                        setErrorMessageDate("");

                        const postData = {
                            taskName: task,
                            dueDate: due,
                        };

                        axios
                            .post(process.env.REACT_APP_API_BASE + "/todo", postData, { headers })
                            .then((res) => {
                                if (res.data.status === true) {
                                    swal("Good job!", res.data.message, "success");
                                    setResetList(resetList + 1);
                                } else {
                                    swal("Error!", res.data.message, "danger");
                                }
                            })
                            .catch((error) => {
                                swal("Sorry!", "Backend Error! Try again later!", "info");
                            });
                    })
                    .catch((error) => {
                        setErrorMessageDate(error.message);
                    });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const markAsDone = (taskID) => {
        const postData = {
            todoid: todoID,
            taskid: taskID,
        };
        axios
            .post(process.env.REACT_APP_API_BASE + "/todo/done", postData, { headers })
            .then((res) => {
                if (res.data.status === true) {
                    swal("Good job!", res.data.message, "success");
                    setResetList(resetList + 1);
                } else {
                    swal("Error !", res.data.message, "danger");
                }
            })
            .catch((error) => {
                swal("Sorry !", "BackEnd Error ! Try again Later !!", "info");
            });
    };

    const deleteTask = (taskID) => (event) => {
        event.preventDefault();

        const postData = {
            todoid: todoID,
            taskid: taskID,
        };
        axios
            .post(process.env.REACT_APP_API_BASE + "/todo/delete", postData, { headers })
            .then((res) => {
                if (res.data.status === true) {
                    swal("Task Deleted!", res.data.message, "success");
                    setResetList(resetList + 1);
                } else {
                    console.log(res.data.message);
                    swal("Error !", res.data.message, "danger");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Overlay loading={loading} />
            <div className="container">

            </div>
            <div>
                <br />
                <br />

                <div className="todos">
                    <div class="container">
                        <h6 className="heading p-3 rounded">To-Do List</h6>

                        <div className="addtask">
                            <form onSubmit={addTask}>
                                <div className="row mt-2 justify-content-md-center ">
                                    <div className="col-md-7">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Add a new task"
                                            value={task}
                                            //when user changes the value of task it update the value of the task
                                            onChange={(e) => {
                                                setTask(e.target.value);
                                                setErrorMessage("");
                                            }}
                                        />
                                        {errorMessage && (
                                            <p className="text-danger">{errorMessage}</p>
                                        )}
                                    </div>

                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select Due Date"
                                            onFocus={(e) => (e.target.type = "date")}
                                            value={due}
                                            id="dob"
                                            onChange={(e) => {
                                                setDue(e.target.value);
                                                setErrorMessageDate("");
                                            }}
                                        ></input>
                                        {errorMessageDate && (
                                            <p className="text-danger">{errorMessageDate}</p>
                                        )}
                                    </div>
                                    <div className="col-md-2">
                                        <button
                                            class="btn btn-outline-secondary form-control"
                                            type="submit"
                                            id="button-addon2"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <h6 className="heading p-3 rounded mt-4 ">
                            To be Done
                        </h6>
                        <div>
                            {/* to iterate over the array  */}
                            {todoList?.map((item) => {
                                if (item?.taskStatus === false) {
                                    return (
                                        <div className="row mt-2 justify-content-md-center">
                                            <div className="col-md-6">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    disabled
                                                    value={item.taskName}
                                                />
                                            </div>
                                            <div className="col-md-2">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    disabled
                                                    value={item.dueDate}
                                                />
                                            </div>
                                            <div className="col-md-2">
                                                <button
                                                    className="btn btn-outline-success form-control"
                                                    onClick={() => markAsDone(item.taskid)}
                                                >
                                                    Done
                                                </button>
                                            </div>
                                            <div className="col-md-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger form-control"
                                                    onClick={deleteTask(item.taskid)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        <h6 className="mt-4 heading p-3 rounded">Completed</h6>
                        <div>
                            {todoList?.map((item) => {
                                if (item?.taskStatus === true) {
                                    return (
                                        <div className="row mt-2 justify-content-md-center">
                                            <div className="col-md-7">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    disabled
                                                    value={item.taskName}
                                                />
                                            </div>
                                            <div className="col-md-5">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    disabled
                                                    value={item.dueDate}
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TodoList;
