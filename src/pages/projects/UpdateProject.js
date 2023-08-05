import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateProject() {
    const [formData, setFormData] = useState({
        softwareArchitect: '',
        projectManager: '',
        teamLead: '',
    });

    const [softwareArchitects, setSoftwareArchitects] = useState([]);
    const [projectManagers, setProjectManagers] = useState([]);
    const [teamLeads, setTeamLeads] = useState([]);

    useEffect(() => {
        // Simulating fetching data from backend
        // Replace with actual API calls
        const mockSoftwareArchitects = ['Alice', 'Bob', 'Charlie'];
        const mockProjectManagers = ['Eve', 'Frank', 'Grace'];
        const mockTeamLeads = ['Hank', 'Ivy', 'Jack'];

        setSoftwareArchitects(mockSoftwareArchitects);
        setProjectManagers(mockProjectManagers);
        setTeamLeads(mockTeamLeads);
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        // You can perform form submission logic here
    };

    return (
        <div className="container mt-4">
            <h1>Update Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="softwareArchitect" className="form-label">
                        Software Architect
                    </label>
                    <select
                        className="form-control"
                        id="softwareArchitect"
                        name="softwareArchitect"
                        value={formData.softwareArchitect}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Select a Software Architect
                        </option>
                        {softwareArchitects.map((architect, index) => (
                            <option key={index} value={architect}>
                                {architect}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="projectManager" className="form-label">
                        Project Manager
                    </label>
                    <select
                        className="form-control"
                        id="projectManager"
                        name="projectManager"
                        value={formData.projectManager}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Select a Project Manager
                        </option>
                        {projectManagers.map((manager, index) => (
                            <option key={index} value={manager}>
                                {manager}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="teamLead" className="form-label">
                        Team Lead
                    </label>
                    <select
                        className="form-control"
                        id="teamLead"
                        name="teamLead"
                        value={formData.teamLead}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Select a Team Lead
                        </option>
                        {teamLeads.map((lead, index) => (
                            <option key={index} value={lead}>
                                {lead}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Update Project
                </button>
            </form>
        </div>
    );
}

export default UpdateProject;
