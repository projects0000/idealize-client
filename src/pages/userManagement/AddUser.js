import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddUser = () => {
    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit(submitFurtherDetails)}>
                <div className="card-body mt-3">
                    <div className="row m-2">
                        {/* First Name */}
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={props.userData.given_name}
                                    {...register("firstName")}
                                >
                                </input>
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.firstName?.message}</p>
                        </div>
                        {/* Last Name */}
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={props.userData.family_name}
                                    {...register("lastName")}
                                >
                                </input>
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.lastname?.message}</p>
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
                        <div className="col-md-6">
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
                                    defaultValue={props.userData.email}
                                    {...register("email")}
                                    readOnly
                                >
                                </input>
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <p className="errorMessageAddFurtherDetails">{errors.email?.message}</p>

                        </div>
                    </div>
                    {
                        (availableDepartments.length !== 0)
                        &&
                        <div className="row m-2">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select id="dep" className="form-control" {...register("department")} onChange={e => setDepartment(e.target.value)}>
                                        <option selected value="" disabled>Select Department</option>
                                        {
                                            availableDepartments.map((e) => {
                                                return (
                                                    <option value={e._id}>{e.depName}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <label htmlFor="dep">Select your department</label>
                                </div>
                                <p className="errorMessageAddFurtherDetails">{errors.department?.message}</p>
                            </div>
                            {

                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="jt" className="form-control" {...register("jobTitle")}>
                                            <option selected value="" disabled>Select Job Title</option>
                                            {
                                                availableDepartments.find(dep => dep._id === department)?.Jobtitle.map((e) => {
                                                    return (
                                                        <option value={e?._id}>{e.jobTitlename}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <label htmlFor="jt">Select your job title</label>
                                    </div>
                                    <p className="errorMessageAddFurtherDetails">{errors.jobTitle?.message}</p>
                                </div>
                            }
                        </div>
                    }

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