import axios from "axios";
import { useEffect, useState } from "react";
import Overlay from "../../components/Overlay";

const ManageUser = () => {
    const headers = {
        token: JSON.parse(localStorage.getItem("user")).token
    }
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(
            process.env.REACT_APP_API_BASE + `/users/aggregate/user-role`,
            { headers }
        ).then(function (response) {
            setLoading(false);
            setUsers(response.data.response);
            console.log(response.data.response);
        });
    }, [])

    return (
        <div className="container mt-3">
            <Overlay loading={loading} />
            <form>
                <input type="text" className="form-control" placeholder="Search by Name or Employee ID"></input>
            </form>
            <hr></hr>
            {
                users.map((e, index) => {
                    return (
                        <div className="mt-2">
                            <p>
                                <button
                                    class="btn btn-light border border-dark form-control fw-bold text-left"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={"#collapseExample" + index}
                                    aria-expanded="false"
                                    aria-controls={"collapseExample" + index}
                                >
                                    {e._id}
                                </button>
                            </p>

                            <div class="collapse" id={"collapseExample" + index}>
                                <div class="card card-body">
                                    <table class="table">
                                        <tbody>
                                            {
                                                (e.users).map((x) => {
                                                    return (
                                                        <tr>
                                                            <td>{x.empId}</td>
                                                            <td>
                                                                <img
                                                                    className="rounded-circle"
                                                                    referrerPolicy="no-referrer"
                                                                    width={30}
                                                                    height={30}
                                                                    src={x.userImage}
                                                                    alt="userProfile"
                                                                ></img>
                                                            </td>
                                                            <td>{x.firstName + " " + x.lastName}</td>
                                                            <td>{x.phoneNumber}</td>
                                                            <td>{x.emailAddress}</td>
                                                            <td>{x.workingDays + " Man Days"}</td>
                                                            <td>
                                                                <button className="btn btn-dark btn-sm">
                                                                    More
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ManageUser