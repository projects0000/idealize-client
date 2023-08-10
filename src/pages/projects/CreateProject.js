import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateProject = () => {
    const [resourceManager, setResourceManager] = useState([]);
    useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_BASE + "/users/resource-management"
        ).then((res) => {
            setResourceManager(res.data.data); // Update the state with resource managers
        });
    }, []);

    const schema = yup.object().shape({
        projectName: yup.string().required('Project Name is required'),
        projectDescription: yup.string().required('Project Description is required'),
        expectedDate: yup.date("Invalid Date").required('Expected Date is required').typeError('Expected Date must be a valid date'),
        resourceManager: yup.string().required('Resource Manager is required'),
        clientName: yup.string().required('Client Name is required'),
        clientAddress: yup.string().required('Client Address is required'),
        clientContactEmail: yup.string().email('Invalid email').required('Client Contact Email is required'),
        clientPhoneNumber: yup.string().required('Client Phone Number is required')
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });

    const [submitLoading, setSubmitLoading] = useState(false);

    const submitProjectDetails = (data) => {
        setSubmitLoading(true);
        const postData = {
            projectName: data.projectName,
            projectDescription: data.projectDescription,
            expectedDate: data.expectedDate,
            resourceManager: data.resourceManager,
            clientName: data.clientName,
            clientAddress: data.clientAddress,
            clientContactEmail: data.clientContactEmail,
            clientPhoneNumber: data.clientPhoneNumber
        };
        console.log(postData);
        axios.post(
            process.env.REACT_APP_API_BASE + "/projects",
            postData
        ).then((res) => {
            if (res.data.status === true) {
                Swal.fire("", res.data.message, "success");
            } else {
                Swal.fire("", res.data.message, "info");
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            reset();
            setSubmitLoading(false);
        });
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Create New Project</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(submitProjectDetails)}>
                                <div className="mb-3">
                                    <label htmlFor="projectName" className="form-label">Project Name</label>
                                    <input type="text" className={`form-control ${errors.projectName ? 'is-invalid' : ''}`} id="projectName" {...register("projectName")} />
                                    {errors.projectName && <div className="invalid-feedback">{errors.projectName.message}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="projectDescription" className="form-label">Project Description</label>
                                    <textarea className={`form-control ${errors.projectDescription ? 'is-invalid' : ''}`} id="projectDescription" {...register("projectDescription")} />
                                    {errors.projectDescription && <div className="invalid-feedback">{errors.projectDescription.message}</div>}
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="expectedDate" className="form-label">Expected Date</label>
                                        <input type="date" className={`form-control ${errors.expectedDate ? 'is-invalid' : ''}`} id="expectedDate" {...register("expectedDate")} />
                                        {errors.expectedDate && <div className="invalid-feedback">{errors.expectedDate.message}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="resourceManager" className="form-label">Resource Manager</label>
                                        <select className={`form-control ${errors.resourceManager ? 'is-invalid' : ''}`} id="resourceManager" {...register("resourceManager")}>
                                            <option value="">Select Resource Manager</option>
                                            {resourceManager.map(manager => (
                                                <option key={manager._id} value={manager._id}>{manager.firstName} {manager.lastName}</option>
                                            ))}
                                        </select>
                                        {errors.resourceManager && <div className="invalid-feedback">{errors.resourceManager.message}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="clientName" className="form-label">Client Name</label>
                                        <input type="text" className={`form-control ${errors.clientName ? 'is-invalid' : ''}`} id="clientName" {...register("clientName")} />
                                        {errors.clientName && <div className="invalid-feedback">{errors.clientName.message}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="clientAddress" className="form-label">Client Address</label>
                                        <input type="text" className={`form-control ${errors.clientAddress ? 'is-invalid' : ''}`} id="clientAddress" {...register("clientAddress")} />
                                        {errors.clientAddress && <div className="invalid-feedback">{errors.clientAddress.message}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="clientContactEmail" className="form-label">Client Contact Email</label>
                                        <input type="email" className={`form-control ${errors.clientContactEmail ? 'is-invalid' : ''}`} id="clientContactEmail" {...register("clientContactEmail")} />
                                        {errors.clientContactEmail && <div className="invalid-feedback">{errors.clientContactEmail.message}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="clientPhoneNumber" className="form-label">Client Phone Number</label>
                                        <input type="text" className={`form-control ${errors.clientPhoneNumber ? 'is-invalid' : ''}`} id="clientPhoneNumber" {...register("clientPhoneNumber")} />
                                        {errors.clientPhoneNumber && <div className="invalid-feedback">{errors.clientPhoneNumber.message}</div>}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="m-2 btn btn-outline-success form-control"
                                        type="submit"
                                        disabled={submitLoading}
                                    >
                                        {submitLoading
                                            ? <>
                                                <span className='spinner-grow spinner-grow-sm me-3' role="status"></span>
                                                Please Wait...
                                            </>
                                            : "Submit Details"
                                        }
                                    </button>
                                    <input className="m-2 btn btn-outline-warning form-control" type="reset" value="Reset"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;
