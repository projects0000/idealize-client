import AddReview from "../../images/DashBoard/AddReview.svg"
import ViewReview from "../../images/DashBoard/ViewReview.svg"
import ManUser from "../../images/DashBoard/ManageUsers.svg"
import { Link } from "react-router-dom";
import ToDO from "../../images/DashBoard/TODO.svg"
import AddUser from "../../images/DashBoard/AddUser.svg"
import ManageTeam from "../../images/DashBoard/ManageTeam.svg"
import CreateProject from "../../images/DashBoard/CreateProject.svg"
import ViewCreatedProjects from "../../images/DashBoard/ViewCreatedProjects.svg"
import LeaderBoard from "../../images/DashBoard/LeaderBoard.svg"
const SuperAdmin = () => {
    return (
        <div className="container mt-3">
            <div className="row">

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/users/add" className="btn btn-outline-dark">
                            <center>
                                <img src={AddUser} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Add Users</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/todo" className="btn btn-outline-dark">
                            <center>
                                <img src={ToDO} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>ToDo List</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/manage/team" className="btn btn-outline-dark">
                            <center>
                                <img src={ManageTeam} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Manage Team</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/manage/users" className="btn btn-outline-dark">
                            <center>
                                <img src={ManUser} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Manage Users</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/review" className="btn btn-outline-dark">
                            <center>
                                <img src={AddReview} className="card-img-top" style={{ "width": "200px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Add Review</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/reviews/view" className="btn btn-outline-dark">
                            <center>
                                <img src={ViewReview} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>View Reviews</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/project/create" className="btn btn-outline-dark">
                            <center>
                                <img src={CreateProject} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Create Project</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/project/allProjects" className="btn btn-outline-dark">
                            <center>
                                <img src={ViewCreatedProjects} className="card-img-top" style={{ "width": "200px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>All Projects</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/leaderboard" className="btn btn-outline-dark">
                            <center>
                                <img src={LeaderBoard} className="card-img-top" style={{ "width": "135px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Developer Leader Board</h6>
                            </div>
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    );
}
export default SuperAdmin;




{/* 


<div className="container mt-3">
    <div className="row">
    </div>
</div> 


*/}