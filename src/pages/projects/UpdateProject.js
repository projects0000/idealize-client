import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
    const { projectId } = useParams();
    const [softwareArchitects, setSoftwareArchitects] = useState([]);
    const [projectManagers, setProjectManagers] = useState([]);
    const [developers, setDevelopers] = useState([]);
    const [selectedDevelopers, setSelectedDevelopers] = useState([]);
    const [gitHubLinks, setGitHubLinks] = useState([""]); // Initial state with one empty link

    useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_BASE + "/users/software-architects"
        ).then((res) => {
            setSoftwareArchitects(res.data.data);
        });

        axios.get(
            process.env.REACT_APP_API_BASE + "/users/project-managers"
        ).then((res) => {
            setProjectManagers(res.data.data);
        });

        axios.get(
            process.env.REACT_APP_API_BASE + "/users/developers"
        ).then((res) => {
            setDevelopers(res.data.data);
        });
    }, []);

    const schema = yup.object().shape({
        softwareArchitect: yup.string().required('Software Architect is required'),
        projectManager: yup.string().required('Project Manager is required'),
        teamLead: yup.string().required('Team Lead is required'),
        gitHubLinks: yup.array().of(yup.string()) // Allow an array of GitHub links
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });

    const [submitLoading, setSubmitLoading] = useState(false);

    const submitProjectDetails = (data) => {
        setSubmitLoading(true);
        const postData = {
            projectID: projectId,
            softwareArchitect: data.softwareArchitect,
            projectManager: data.projectManager,
            teamLead: data.teamLead,
            developers: selectedDevelopers,
            gitHubLinks: data.gitHubLinks, // An array of GitHub links
            updateStatus: true
        };

        axios.put(
            process.env.REACT_APP_API_BASE + "/projects/update",
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

    const addGitHubLink = () => {
        setGitHubLinks([...gitHubLinks, ""]); // Add an empty link when the button is clicked
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Update Project</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(submitProjectDetails)}>
                                <div className="mb-3">
                                    <label htmlFor="softwareArchitect" className="form-label">Software Architect</label>
                                    <select className={`form-control ${errors.softwareArchitect ? 'is-invalid' : ''}`} id="softwareArchitect" {...register("softwareArchitect")}>
                                        <option value="">Select Software Architect</option>
                                        {softwareArchitects.map(architect => (
                                            <option key={architect._id} value={architect._id}>{architect.firstName} {architect.lastName}</option>
                                        ))}
                                    </select>
                                    {errors.softwareArchitect && <div className="invalid-feedback">{errors.softwareArchitect.message}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="projectManager" className="form-label">Project Manager</label>
                                    <select className={`form-control ${errors.projectManager ? 'is-invalid' : ''}`} id="projectManager" {...register("projectManager")}>
                                        <option value="">Select Project Manager</option>
                                        {projectManagers.map(manager => (
                                            <option key={manager._id} value={manager._id}>{manager.firstName} {manager.lastName}</option>
                                        ))}
                                    </select>
                                    {errors.projectManager && <div className="invalid-feedback">{errors.projectManager.message}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="teamLead" className="form-label">Team Lead</label>
                                    <select className={`form-control ${errors.teamLead ? 'is-invalid' : ''}`} id="teamLead" {...register("teamLead")}>
                                        <option value="">Select Team Lead (Developer)</option>
                                        {developers.map(developer => (
                                            <option key={developer._id} value={developer._id}>{developer.firstName} {developer.lastName}</option>
                                        ))}
                                    </select>
                                    {errors.teamLead && <div className="invalid-feedback">{errors.teamLead.message}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gitHubLinks" className="form-label">GitHub Links</label>
                                    <div>
                                        {gitHubLinks.map((link, index) => (
                                            <div key={index} className="mb-3">
                                                <label>Link {index + 1}</label>
                                                <textarea
                                                    className={`form-control ${errors.gitHubLinks && errors.gitHubLinks[index] ? 'is-invalid' : ''}`}
                                                    {...register(`gitHubLinks[${index}]`)}
                                                    value={link}
                                                    onChange={(e) => {
                                                        const updatedLinks = [...gitHubLinks];
                                                        updatedLinks[index] = e.target.value;
                                                        setGitHubLinks(updatedLinks);
                                                    }}
                                                ></textarea>
                                                {errors.gitHubLinks && errors.gitHubLinks[index] && <div className="invalid-feedback">{errors.gitHubLinks[index]}</div>}
                                            </div>
                                        ))}
                                        <button type="button" className="btn btn-outline-primary" onClick={addGitHubLink}>
                                            Add GitHub Link
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="developers" className="form-label">Developers</label>
                                    <Select
                                        value={selectedDevelopers}
                                        onChange={setSelectedDevelopers}
                                        options={developers.map(dev => ({ value: dev._id, label: `${dev.firstName} ${dev.lastName}` }))}
                                        isMulti
                                    />
                                    {errors.developers && <div className="invalid-feedback">{errors.developers.message}</div>}
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
};

export default UpdateProject;
