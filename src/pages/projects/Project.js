import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                    console.log(data.data);
                    console.log(data.data.developers);
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
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-8">
                                <h3 className="card-title" style={projectNameStyle}>{project.projectName}</h3>
                            </div>
                            <div className="col-md-4">
                                <p className="card-text text-end" style={expectedDateStyle}>Expected Date: {project.expectedDate}</p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="box" style={boxStyle}>
                                    <h5>Project Description</h5>
                                    <p style={projectDescriptionStyle}>{project.projectDescription}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box" style={boxStyle}>
                                    <h5>Client Details</h5>
                                    <p style={clientInfoStyle}>Name: {project.clientName}</p>
                                    <p style={clientInfoStyle}>Address: {project.clientAddress}</p>
                                    <p style={clientInfoStyle}>Email: {project.clientContactEmail}</p>
                                    <p style={clientInfoStyle}>Number: {project.clientPhoneNumber}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <button className="btn btn-dark" style={buttonStyle}>Download Project Report</button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-dark" style={buttonStyle}>Update Project</button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-dark" style={buttonStyle}>Contributor Feedback</button>
                            </div>
                        </div>
                        {/* Project Manager and Software Architect Cards */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="card mb-3" style={personCardStyle}>
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 style={personHeaderStyle}>Project Manager</h6>
                                            {projectManagerImage && (
                                                <Link to={`/profile/${project.projectManager}`}>
                                                    <div className="d-flex align-items-center">
                                                        <img src={projectManagerImage} alt={projectManagerName} style={personImageStyle} />
                                                        <p className="mb-0" style={personNameStyle}>{projectManagerName}</p>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                        <button className="btn btn-sm btn-outline-dark">More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-3" style={personCardStyle}>
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 style={personHeaderStyle}>Software Architect</h6>
                                            {softwareArchitectImage && (
                                                <Link to={`/profile/${project.softwareArchitect}`}>
                                                    <div className="d-flex align-items-center">
                                                        <img src={softwareArchitectImage} alt={softwareArchitectName} style={personImageStyle} />
                                                        <p className="mb-0" style={personNameStyle}>{softwareArchitectName}</p>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                        <button className="btn btn-sm btn-outline-dark">More</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Team Lead Card */}
                        <div className="card mb-3" style={personCardStyle}>
                            <div className="card-body">
                                <h6 style={personHeaderStyle}>Team Lead</h6>
                                {teamLeadImage && (
                                    <div className="d-flex align-items-center">
                                        <img src={teamLeadImage} alt={teamLeadName} style={personImageStyle} />
                                        <p className="mb-0" style={personNameStyle}>{teamLeadName}</p>
                                    </div>
                                )}
                            </div>
                             <button className="btn btn-sm btn-outline-dark">More</button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h5>GitHub Links</h5>
                            {project.gitHubLinks && project.gitHubLinks.length > 0 ? (
                                <ul>
                                    {project.gitHubLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No GitHub links available for this project.</p>
                            )}
                        </div>
                    </div>
                    <h4>Developers:</h4>
                    <ul>
                        {project.developers.map(developer => (
                            <li key={developer.value}>{developer.label}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading project details...</p>
            )}
        </div>
    );
};

export default Project;

const cardStyle = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px'
};

const projectNameStyle = {
    color: '#343a40'
};

const expectedDateStyle = {
    fontSize: '14px',
    color: '#6c757d'
};

const projectDescriptionStyle = {
    fontSize: '16px'
};

const clientInfoStyle = {
    fontSize: '14px',
    color: '#6c757d'
};

const headerStyle = {
    marginTop: '15px'
};

const boxStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '5px',
    padding: '10px'
};

const userImageStyle = {
    width: '50px',
    height: '50px'
};

const userNameStyle = {
    fontSize: '14px',
    color: '#343a40',
    marginBottom: '0',
    marginLeft: '10px'
};

const buttonStyle = {
    width: '100%',
    marginBottom: '10px'
};
const personCardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e9ecef',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px'
};

const personHeaderStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: '10px'
};

const personImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px'
};

const personNameStyle = {
    fontSize: '14px',
    color: '#343a40',
    marginBottom: '0'
};

