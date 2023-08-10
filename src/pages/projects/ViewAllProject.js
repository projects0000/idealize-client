import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ViewAllProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE + "/projects")
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
            <h5 className="mb-4 heading p-3 rounded">All Projects</h5>
            <div className="row">
                {projects.map(e => (
                    <div key={e._id} className="col-md-4 mt-3">
                        <div className="card h-100 d-flex flex-column">
                            <div className="card-header">
                                <h5 className="card-title text-center">{e.projectName}</h5>
                                <hr />
                                <div style={{ maxHeight: "70px", overflow: "auto", minHeight: "70px" }}>
                                    {e.projectDescription}
                                </div>
                            </div>
                            <div className="card-footer mt-auto">
                                <Link
                                    to={`/project/assigned/${e._id}/${e.projectName}`}
                                    className="btn btn-light border border-dark form-control"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {projects.length === 0 && <p>No projects available.</p>}
        </div>
    );
};

export default ViewAllProject;
