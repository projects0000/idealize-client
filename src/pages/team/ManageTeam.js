import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageTeam = () => {
    const [teamName, setTeamName] = useState("");
    const [refreshList, setRefreshList] = useState(1);
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(
            process.env.REACT_APP_API_BASE + "/teams",
            { teamName: teamName }
        ).then((res) => {
            if (res.data.status) {
                Swal.fire({
                    title: 'Team Successfully Added',
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,
                })
                setRefreshList(refreshList + 1);
            } else {
                Swal.fire({
                    title: res.data.message,
                    icon: "warning",
                    timer: 2000,
                    timerProgressBar: true,
                })
            }
            setTeamName("");
        }).catch((err) => {
            console.log(err);
            Swal.fire({
                title: "Network Error",
                icon: "warning",
                timer: 2000,
                timerProgressBar: true,
            })
        })
        setLoading(false);
    }
    const [availableTeamNames, setAvailableTeamNames] = useState([]);
    useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_BASE + "/teams"
        ).then((res) => {
            setAvailableTeamNames(res.data);
        })
    }, [refreshList]);

    return (
        <div className="container mt-3">
            <h6 className="heading p-3 rounded">
                Add Teams under Developer
            </h6>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-10">
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={teamName}
                            placeholder="Team Name"
                            onChange={(e) => { setTeamName(e.target.value) }}
                        >
                        </input>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="form-control btn btn-outline-primary">
                            <i className="bi bi-plus-circle me-2"></i>
                            Create
                        </button>
                    </div>
                </div>
            </form>
            <h6 className="heading p-3 rounded mt-3">
                Available Teams under Developer
            </h6>
            <table className="table table-striped">
                <tbody>
                    {
                        availableTeamNames.map((team, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{team.teamName}</td>
                                    <td>
                                        <button className="btn btn-primary form-control">
                                            <i className="bi bi-pencil-square me-2"></i>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger form-control">
                                            <i className="bi bi-trash me-2"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ManageTeam;