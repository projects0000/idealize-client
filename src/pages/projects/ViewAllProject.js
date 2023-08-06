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
            <h1>All Projects</h1>
            {projects.length > 0 ? (
                <ul className="list-group">
                    {projects.map(project => (
                        <li key={project._id} className="list-group-item">
                            <Link to={`/project/assigned/${project._id}/${project.projectName}`}>
                                {project.projectName}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No projects available.</p>
            )}
        </div>
    );
};

export default ViewAllProject;
