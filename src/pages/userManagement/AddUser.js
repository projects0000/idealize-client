import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../css/general.css";
import Overlay from "../../components/Overlay";
const AddUser = () => {
    const [userRole, setUserRole] = useState("");
    const schema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        workingDays: yup.string().required('Man Days is required'),
        employeeID: yup.string().required('Employee ID is required'),
        gender: yup
            .string()
            .oneOf(['Male', 'Female', 'No'], 'Invalid gender')
            .required('Gender is required'),
        role: yup
            .string()
            .oneOf([
                "Developer", "Operation Management",
                "Project Manager", "Resource Management", "Software Architect"
            ], 'Invalid User Role')
            .required('User role is required'),
        dateOfBirth: yup.date("Invalid Date").required('Date of Birth is required').typeError('Date of Birth must be a valid date'),
        phoneNumber: yup.string().matches(/^\d{10}$/, 'Phone Number must be a 10-digit number without spaces or dashes').required('Phone Number is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        team: userRole === "Developer"? yup.string().required('Team is required') : yup.string()
    });

    const [submitLoading, setSubmitLoading] = useState(false);
    const currentYear = new Date().getFullYear();
    const maxDate = `${currentYear - 15}-12-31`; // Set maximum date to last day of current year
    const minDate = `${currentYear - 80}-01-01`; // Set minimum date to first day of previous year
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });
    const [availableTeamNames, setAvailableTeamNames] = useState([]);
    useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_BASE + "/teams"
        ).then((res) => {
            setAvailableTeamNames(res.data);
        })
    }, []);

    const submitFurtherDetails = (data) => {
        setSubmitLoading(true);
        const postData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            dob: data.dateOfBirth,
            phoneNumber: data.phoneNumber,
            emailAddress: data.email,
            empId: data.employeeID,
            workingDays: data.workingDays,
            userRole : data.role,
            team: userRole === "Developer"? data.team : null
        }
        axios.post(
            process.env.REACT_APP_API_BASE + "/users",
            postData
        ).then((res)=>{
            if(res.data.status === true){
                Swal.fire("",res.data.message,"success")
            }else{
                Swal.fire("",res.data.message,"info")
            }
        }).catch((err)=>{
            console.log(err);
        })
        reset();
        setSubmitLoading(false);
    }

    return (
        <div className="container mt-3">
        <Overlay loading={submitLoading}></Overlay>
            <h6 className="heading p-3 rounded">Add new user</h6>
            <form onSubmit={handleSubmit(submitFurtherDetails)}>
                <div className="card-body mt-3">
                    <div className="row m-2">
                        {/* First Name */}
                        <div className="col-md-12">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("firstName")}
                                >
                                </input>
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.firstName?.message}</p>
                        </div>
                        {/* Last Name */}
                        <div className="col-md-12">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("lastName")}
                                >
                                </input>
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.lastName?.message}</p>
                        </div>
                    </div>
                    <div className="row m-2">
                        {/* Gender */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("employeeID")}
                                        >
                                        </input>
                                        <label htmlFor="fname">Employee ID</label>
                                    </div>
                                    <p className="errorMessageAddFurtherDetails">{errors.employeeID?.message}</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="gender" className="form-control" {...register("gender")}>
                                            <option selected value="" disabled>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="No">Prefer not to say</option>
                                        </select>
                                        <label htmlFor="gender">Select your gender</label>
                                    </div>
                                    <p className="errorMessageAddFurtherDetails">{errors.gender?.message}</p>
                                </div>
                            </div>

                        </div>
                        {/* Date of Birth */}
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    max={maxDate}
                                    min={minDate}
                                    {...register("dateOfBirth")}
                                >
                                </input>
                                <label htmlFor="dob">Select your Date of Birth</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.dateOfBirth?.message}</p>

                        </div>
                        <div className="col-md-3">
                            <div className="form-floating mb-3">
                                <select id="md" className="form-control" {...register("workingDays")}>
                                    <option selected value="" disabled>Select Man Days</option>
                                    <option value="1">One Man Day</option>
                                    <option value="2">Two Man Days</option>
                                    <option value="3">Three Man Days</option>
                                    <option value="4">Four Man Days</option>
                                    <option value="5">Five Man Days</option>
                                    <option value="6">Six Man Days</option>
                                    <option value="7">Seven Man Days</option>
                                </select>
                                <label htmlFor="jt">Select Man Days</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.workingDays?.message}</p>
                        </div>
                    </div>
                    <div className="row m-2">
                        {/* Phone Number */}
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("phoneNumber")}
                                >
                                </input>
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.phoneNumber?.message}</p>
                        </div>
                        {/* Email Address */}
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("email")}
                                >
                                </input>
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.email?.message}</p>

                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <select
                                    id="role"
                                    className="form-control"
                                    {...register("role")}
                                    onChange={(e) => setUserRole(e.target.value)}
                                >
                                    <option selected value="" disabled>Select User role</option>
                                    <option value="Operation Management">Operation Management</option>
                                    <option value="Resource Management">Resource Management</option>
                                    <option value="Software Architect">Software Architect</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Developer">Developer</option>
                                </select>
                                <label htmlFor="role">Select User role</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.role?.message}</p>
                        </div>
                        {
                            (userRole === "Developer")
                            &&
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select
                                        id="role"
                                        className="form-control"
                                        {...register("team")}
                                    >
                                        <option selected value="" disabled>Select Team Name</option>
                                        {
                                            availableTeamNames.map((e) => {
                                                return (
                                                    <option value={e._id}>{e.teamName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <label htmlFor="role">Select Developer Team</label>
                                </div>
                                <p className="errorMessageAddFurtherDetails">{errors.team?.message}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <button
                                className="m-2 btn btn-outline-success form-control"
                                type="submit"
                                disabled={submitLoading}
                            >
                                {
                                    (submitLoading)
                                        ?
                                        <>
                                            <span className='spinner-grow spinner-grow-sm me-3' role="status"></span>
                                            Please Wait...
                                        </>
                                        :
                                        "Submit Details"
                                }
                            </button>
                        </div>
                        <div className="col-md-6">
                            <input className="m-2 btn btn-outline-warning form-control" type="reset" value="Reset"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AddUser;