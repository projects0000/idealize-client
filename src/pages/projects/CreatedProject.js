import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import jwt_decode from "jwt-decode";
const CreatedProject = () => {
    const localData = JSON.parse(localStorage.getItem("user"))
    let userData;
    if (localData) {
        userData = jwt_decode(localData?.token)?.userData;
    }
    const [projects, setProjects] = useState([]);
    const resourceManagerId = userData._id; 

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE + "/projects/resource-manager/" + resourceManagerId)
            .then((res) => {
                if (res.data.status === true) {
                    setProjects(res.data.data); // Update state with the 'data' field
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container">
        <h5 className="rounded p-3 heading my-4 ">Projects Under Resource Manager</h5>
        <div className="row">
            {projects.map(project => (
                <div key={project._id} className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title text-center">{project.projectName}</h5>
                            <hr />
                            <div style={{ maxHeight: '70px', overflow: 'auto', minHeight: '70px' }}>
                                {project.projectDescription}
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link
                                to={`/project/update/${project._id}`}
                                className="btn btn-primary w-100 text-white"
                            >
                                Update Project
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {projects.length === 0 && <p className="alert alert-danger fw-bold">No projects available.</p>}
    </div>
    );
};

export default CreatedProject;
