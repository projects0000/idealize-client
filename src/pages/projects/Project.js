import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE + "/projects/" + projectId)
            .then(response => {
                const data = response.data;
                if (data.status && data.data) {
                    setProject(data.data);
                }
            })
            .catch(error => console.error('Error fetching project:', error));
    }, [projectId]);

    const [projectManagerName, setProjectManagerName] = useState('');
    const [softwareArchitectName, setSoftwareArchitectName] = useState('');
    const [teamLeadName, setTeamLeadName] = useState('');

    const fetchUserName = (userId, setNameFunction) => {
        axios.get(`${process.env.REACT_APP_API_BASE}/users/${userId}`)
            .then(response => {
                const userData = response.data.data;
                if (userData) {
                    const fullName = `${userData.firstName} ${userData.lastName}`;
                    setNameFunction(fullName);
                }
            })
            .catch(error => console.error('Error fetching user:', error));
    };

    useEffect(() => {
        if (project) {
            if (project.projectManager) {
                fetchUserName(project.projectManager, setProjectManagerName);
            }
            if (project.softwareArchitect) {
                fetchUserName(project.softwareArchitect, setSoftwareArchitectName);
            }
            if (project.teamLead) {
                fetchUserName(project.teamLead, setTeamLeadName);
            }
        }
    }, [project]);

    return (
        <div className="container mt-4">
            <h1>Project Details</h1>
            {project ? (
                <div className="card">
                    <div className="card-body">
                        {/* <h3 className="card-title">Project ID: {project._id}</h3> */}
                        <h3 className="card-title">Project Name: {project.projectName}</h3>
                        <p className="card-text">Project Description: {project.projectDescription}</p>
                        <p className="card-text">Expected Date: {project.expectedDate}</p>
                        <h4>Developers:</h4>
                        <ul>
                            {project.developers.map(developer => (
                                <li key={developer.value}>{developer.label}</li>
                            ))}
                        </ul>
                        <h6>Project Manager: {projectManagerName}</h6>
                        <h6>Software Architect: {softwareArchitectName}</h6>
                        <h6>Team Lead: {teamLeadName}</h6>
                    </div>
                </div>
            ) : (
                <p>Loading project details...</p>
            )}
        </div>
    );
};

export default Project;
