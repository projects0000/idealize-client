import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
const AssignedProjects = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    let userData;
    if (localData) {
        userData = jwt_decode(localData?.token)?.userData;
    }
    const [projects, setProjects] = useState([]);
    const userId = userData._id;
    console.log(projects);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE + "/projects/assigned/" + userId)
            .then(response => {
                const data = response.data;
                if (data.status && data.data) {
                    setProjects(data.data);
                }
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Assigned Projects</h1>
            <div className="row">
                {projects.map(project => (
                    <div key={project._id} className="col-md-4 mt-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h5 className="card-title text-center">{project.projectName}</h5>
                                <hr />
                                <div style={{ maxHeight: "70px", overflow: "auto", minHeight: "70px" }}>
                                    {project.projectDescription}
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link
                                    to={`/project/assigned/${project._id}/${project.projectName}`}
                                    className="btn btn-primary w-100"
                                    style={{ backgroundColor: "#212529", color: "#fff", borderColor: "#212529", width: "100%" }}

                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssignedProjects;
