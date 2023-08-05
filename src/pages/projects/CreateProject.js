import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');
const swal = require('sweetalert');
// This page for operational manager
function CreateProject() {
    const [formData, setFormData] = useState({
        projectName: '',
        projectDescription: '',
        expectedDelivery: '',
        resourceManager: '',
    });

    const [resourceManagers, setResourceManagers] = useState([]);

    useEffect(() => {
        // Simulating fetching resource managers from backend
        // You can replace this with an actual API call
        const mockResourceManagers = [
            'John Doe',
            'Jane Smith',
            'Michael Johnson',
        ];
        setResourceManagers(mockResourceManagers);
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
    
        axios
            .post(
                process.env.REACT_APP_API_URL + "/projects",
                formData
            )
            .then((res) => {
                alert(res.data.message);
                swal("Project Created", {
                    icon: "success",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4">
            <h1>Project Form Design</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">
                        Project Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="projectName"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label">
                        Project Description
                    </label>
                    <textarea
                        className="form-control"
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="expectedDelivery" className="form-label">
                        Expected Delivery
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="expectedDelivery"
                        name="expectedDelivery"
                        value={formData.expectedDelivery}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="resourceManager" className="form-label">
                        Resource Manager
                    </label>
                    <select
                        className="form-control"
                        id="resourceManager"
                        name="resourceManager"
                        value={formData.resourceManager}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Select a Resource Manager
                        </option>
                        {resourceManagers.map((manager, index) => (
                            <option key={index} value={manager}>
                                {manager}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreateProject;
