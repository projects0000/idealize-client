import axios from "axios";
import { useEffect, useState } from "react";
import Overlay from "../../components/Overlay";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const OthersProfile = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const headers = {
            token: JSON.parse(localStorage.getItem("user")).token
        }
        axios.get(process.env.REACT_APP_API_BASE + `/users/${id}`, { headers })
            .then(response => {
                setLoading(false);
                setData(response.data.response[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const [feedback, setFeedback] = useState("");

    const submitFeedback = (e) => {
        e.preventDefault();
        Swal.fire("", "Feedback Added Successfully !", "success");
        setFeedback("")
    }
    return (
        <div className="container mt-3">
            <Overlay loading={loading} />
            <div className="row">
                <div className="col-md-4 overflow-auto" style={{ maxHeight: "80vh" }}>
                    <div className="card bg-light">
                        <div className="card-body">
                            <h5 className="heading p-3 rounded text-center">Profile</h5>
                            <center>
                                <img
                                    src={data.userImage}
                                    className="rounded-circle"
                                    alt=""
                                    style={{ height: "100px", width: "100px" }}
                                /><p></p>
                            </center>

                            <label for="inputFirst name">Name</label>
                            <input
                                type="text"
                                className="form-control a2"
                                value={data.firstName + " " + data.lastName}
                                disabled={true}
                            />

                            <label for="inputLastName">Employee ID</label>
                            <input
                                type="lastname"
                                className="form-control a2"
                                id="inputLastname"
                                value={data.empId}
                                disabled={true}
                            />

                            <label for="inputEmail4">User Role</label>
                            <input
                                type="email"
                                className="form-control a2"
                                id="inputEmail4"
                                value={data.userRole}
                                disabled={true}
                            />
                            {
                                data.team &&
                                <>
                                    <label for="inputEmail4">Team</label>
                                    <input
                                        type="text"
                                        className="form-control a2"
                                        id="inputEmail4"
                                        value={data.team}
                                        disabled={true}
                                    />
                                </>
                            }

                            <label for="inputEmail4">Working Days</label>
                            <input
                                type="email"
                                className="form-control a2"
                                id="inputEmail4"
                                value={data.workingDays + " Man Days"}
                                disabled={true}
                            />
                            <label for="inputEmail4">Email </label>
                            <input
                                type="email"
                                className="form-control a2"
                                id="inputEmail4"
                                value={data.emailAddress}
                                disabled={true}
                            />
                            <label for="inputEmail4">Phone No</label>
                            <input
                                type="email"
                                className="form-control a2"
                                id="inputEmail4"
                                value={data.phoneNumber}
                                disabled={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card bg-light overflow-auto">
                        <div className="card-body" style={{ maxHeight: "79vh" }}>
                            <h5 className="heading p-3 mt-1 rounded fw-bold">
                                Your Feedbacks
                            </h5>
                            <form onSubmit={submitFeedback}>
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    rows="4"
                                    className="form-control"
                                    placeholder="Type your feedback"
                                ></textarea>
                                <input type="submit" value="Submit Feedback" className="btn btn-light border border-dark mt-2"></input>
                            </form>
                            <hr></hr>
                            <div className="mb-3">
                                <div className="card mt-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img
                                                    src={"https://picsum.photos/200"}
                                                    className="rounded-circle"
                                                    alt=""
                                                    align="right"
                                                    style={{ height: "50px", width: "50px" }}
                                                />
                                            </div>
                                            <div className="col-md-10">
                                                <h6>Raguraj Sivanantham - General</h6>
                                                <h6>20 December 2023 03.06 PM</h6>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </p>
                                                <button className="btn btn-sm btn-danger">Delete Feedback</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mt-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img
                                                    src={"https://picsum.photos/200"}
                                                    className="rounded-circle"
                                                    alt=""
                                                    align="right"
                                                    style={{ height: "50px", width: "50px" }}
                                                />
                                            </div>
                                            <div className="col-md-10">
                                                <h6>Raguraj Sivanantham - Project A</h6>
                                                <h6>20 December 2023 03.06 PM</h6>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                                <button className="btn btn-sm btn-danger">Delete Feedback</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mt-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img
                                                    src={"https://picsum.photos/200"}
                                                    className="rounded-circle"
                                                    alt=""
                                                    align="right"
                                                    style={{ height: "50px", width: "50px" }}
                                                />
                                            </div>
                                            <div className="col-md-10">
                                                <h6>Raguraj Sivanantham - Project B</h6>
                                                <h6>20 December 2023 03.06 PM</h6>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer
                                                </p>
                                                <button className="btn btn-sm btn-danger">Delete Feedback</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default OthersProfile;