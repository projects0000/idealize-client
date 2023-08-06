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
            <ul className="list-group">
                {projects.map(project => (
                    <li key={project._id} className="list-group-item">
                        <Link to={`/project/assigned/${project._id}/${project.projectName}`}>
                            {project.projectName}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default AssignedProjects;
