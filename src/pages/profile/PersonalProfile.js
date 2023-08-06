import axios from "axios";
import { useEffect, useState } from "react";
import Overlay from "../../components/Overlay";
import { CircleSpinnerOverlay } from "react-spinner-overlay";
import { Link } from "react-router-dom";

const PersonalProject = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const headers = {
            token: JSON.parse(localStorage.getItem("user")).token
        }
        axios.get(process.env.REACT_APP_API_BASE + `/users/current-user`, { headers })
            .then(response => {
                setLoading(false);
                setData(response.data.response[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="container mt-3">
            <Overlay loading={loading} />
            <div className="row justify-content-center ">
                <div className="col-md-8">
                    <div className="card mt-5 crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                        <div className="col d-flex justify-content-center mt-3">
                            <img
                                src={data.userImage}
                                className="rounded-circle border-dark border border-3 p-3"
                                alt=""
                                style={{ height: "150px", width: "150px" }}
                            />
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="row justify-content-center">
                                    <div className="col-md-2"></div>
                                    <div className="form-group col-md-3">
                                        <label for="inputFirst name">Name</label>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input
                                            type="text"
                                            className="form-control a2"
                                            value={data.firstName + " " + data.lastName}
                                            disabled={true}
                                        />
                                    </div>
                                </div>

                                <div className="row mt-2 justify-content-center">
                                    <div className="col-md-2"></div>
                                    <div className="form-group col-md-3">
                                        <label for="inputLastName">Employee ID</label>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input
                                            type="lastname"
                                            className="form-control a2"
                                            id="inputLastname"
                                            value={data.empId}
                                            disabled={true}
                                        />
                                    </div>
                                </div>

                                <div className="row mt-2 justify-content-center">
                                    <div className="col-md-2"></div>
                                    <div className="form-group col-md-3">
                                        <label for="inputEmail4">User Role</label>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input
                                            type="email"
                                            className="form-control a2"
                                            id="inputEmail4"
                                            value={data.userRole}
                                            disabled={true}
                                        />
                                    </div>
                                </div>

                                {
                                    data.team &&
                                    <div className="row mt-2 justify-content-center">
                                        <div className="col-md-2"></div>
                                        <div className="form-group col-md-3">
                                            <label for="inputEmail4">Team</label>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <input
                                                type="text"
                                                className="form-control a2"
                                                id="inputEmail4"
                                                value={data.team}
                                                disabled={true}
                                            />
                                        </div>
                                    </div>
                                }

                                <div className="row mt-2 justify-content-center">
                                    <div className="col-md-2"></div>
                                    <div className="form-group col-md-3">
                                        <label for="inputEmail4">Working Days</label>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input
                                            type="email"
                                            className="form-control a2"
                                            id="inputEmail4"
                                            value={data.workingDays + " Man Days"}
                                            disabled={true}
                                        />
                                    </div>
                                </div>

                                <div className="row mt-2 justify-content-center">
                                    <div className="col-md-2"></div>
                                    <div className="form-group col-md-3">
                                        <label for="inputEmail4">Email </label>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input
                                            type="email"
                                            className="form-control a2"
                                            id="inputEmail4"
                                            value={data.emailAddress}
                                            disabled={true}
                                        />
                                    </div>
                                </div>

                                <div className="row mt-2 justify-content-center">
                                    <div className="col-md-2"></div>
                                    <div className="form-group col-md-3">
                                        <label for="inputEmail4">Phone No</label>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <input
                                            type="email"
                                            className="form-control a2"
                                            id="inputEmail4"
                                            value={data.phoneNumber}
                                            disabled={true}
                                        />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default PersonalProject;