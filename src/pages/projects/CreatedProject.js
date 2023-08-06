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
            <h1 className="my-4">Projects Under Resource Manager</h1>
            <ul className="list-group">
                {projects.map((project) => (
                    <li key={project._id} className="list-group-item">
                        {/* Use the Link component to create a link to each project */}
                        <Link to={`/project/update/${project._id}`} className="text-decoration-none">
                            {project.projectName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreatedProject;
