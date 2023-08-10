import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [projectManagerName, setProjectManagerName] = useState('');
    const [projectManagerImage, setProjectManagerImage] = useState('');
    const [softwareArchitectName, setSoftwareArchitectName] = useState('');
    const [softwareArchitectImage, setSoftwareArchitectImage] = useState('');
    const [teamLeadName, setTeamLeadName] = useState('');
    const [teamLeadImage, setTeamLeadImage] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE}/projects/${projectId}`)
            .then(response => {
                const data = response.data;
                if (data.status && data.data) {
                    setProject(data.data);
                }
            })
            .catch(error => console.error('Error fetching project:', error));
    }, [projectId]);

    useEffect(() => {
        if (project) {
            if (project.projectManager) {
                fetchUserData(project.projectManager, setProjectManagerName, setProjectManagerImage);
            }
            if (project.softwareArchitect) {
                fetchUserData(project.softwareArchitect, setSoftwareArchitectName, setSoftwareArchitectImage);
            }
            if (project.teamLead) {
                fetchUserData(project.teamLead, setTeamLeadName, setTeamLeadImage);
            }
        }
    }, [project]);

    const fetchUserData = (userId, setNameFunction, setImageFunction) => {
        axios.get(`${process.env.REACT_APP_API_BASE}/users/project/${userId}`)
            .then(response => {
                const userData = response.data.data;
                if (userData) {
                    const fullName = `${userData.firstName} ${userData.lastName}`;
                    setNameFunction(fullName);
                    if (userData.userImage) {
                        setImageFunction(userData.userImage);
                    }
                }
            })
            .catch(error => console.error('Error fetching user:', error));
    };

    return (
        <div className="container mt-4">
            <h1 className="display-4 mb-4">Project Details</h1>
            {project ? (
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-9">
                                <h3 className="card-title">Project Name: {project.projectName}</h3>
                            </div>
                            <div className="col-md-3">
                                <p className="card-text">Expected Date: {project.expectedDate}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text">Project Description: {project.projectDescription}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="card-text">Client Name: {project.clientName}</p>
                                <p className="card-text">Client Address: {project.clientAddress}</p>
                                <p className="card-text">Client Email: {project.clientContactEmail}</p>
                                <p className="card-text">Client Number: {project.clientPhoneNumber}</p>
                            </div>
                        </div>
                        <h6 className="mt-4">Project Manager: {projectManagerName}</h6>
                        {projectManagerImage && (
                            <div className="d-flex align-items-center">
                                <img src={projectManagerImage} alt={projectManagerName} className="user-image img-fluid rounded-circle me-3"  style={{ width: '50px', height: '50px' }} />
                                <p className="mb-0">{projectManagerName}</p>
                            </div>
                        )}
                        <h6 className="mt-3">Software Architect: {softwareArchitectName}</h6>
                        {softwareArchitectImage && (
                            <div className="d-flex align-items-center">
                                <img src={softwareArchitectImage} alt={softwareArchitectName} className="user-image img-fluid rounded-circle me-3"  style={{ width: '50px', height: '50px' }} />
                                <p className="mb-0">{softwareArchitectName}</p>
                            </div>
                        )}
                        <h6 className="mt-3">Team Lead: {teamLeadName}</h6>
                        {teamLeadImage && (
                            <div className="d-flex align-items-center">
                                <img src={teamLeadImage} alt={teamLeadName} className="user-image img-fluid rounded-circle me-3"  style={{ width: '50px', height: '50px' }} />
                                <p className="mb-0">{teamLeadName}</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading project details...</p>
            )}
        </div>
    );
};

export default Project;
