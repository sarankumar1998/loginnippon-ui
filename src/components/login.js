import React, { Component } from "react";
// import { FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useFormik } from 'formik'
import * as yup from 'yup'
import './login.css';


const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        // this val schema is a new meth of validation form 
        validationSchema: yup.object({
            email: yup.string().email().required('Email is Required!'),
            password: yup.string().required('Password is Required!')
        }),
        onSubmit: UserInput => {
            console.log(UserInput);

        }
    })
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xs">
                <span ><a href="https://www.nipponpaint.co.in/"><img src={require('../images/Nippon Taglines_NIPSEA Group-01.png').default} width="10%" alt="" /></a> </span>
            </div>

            <div className="col-md-9 col-lg-6 col-xl-6">
                <img src={require('../images/leftvectorimg.png').default} width="100%" alt="" />
            </div>
            <div className='col-md-8 col-lg-6 col-xl-4'>
                <div className="card mt-4">
                    <form onSubmit={formik.handleSubmit}>

                        {/* <div className="d-flex"> */}
                        {/* <div className=''> */}

                        <img src={require('../images/logo4.png').default} className="rounded mx-auto d-block mt-3" alt="" height={80} width={130} />
                        <div className="card-body">
                            <div className="form-group ">
                                < input
                                    type="text"
                                    name="email"
                                    placeholder="Email Id"
                                    className="form-control mt-3"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.errors.email ?
                                    <div className="text-danger" style={{ fontSize: '13px' }}>  {formik.errors.email} </div>
                                    : null}
                                <br />
                                <div className="">
                                    <input
                                        type="text"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                    {formik.errors.password ?
                                        <div className="text-danger" style={{ fontSize: '13px' }}> {formik.errors.password} </div>
                                        : null}
                                    <br />
                                </div>
                            </div>
                            <div class="forgot-link md-5 d-flex justify-content-between align-items-center">
                                <div>
                                    <Link to="/recaptcha" style={{ color: 'grey', fontSize: "12px", textDecoration: "none" }}>Reset Password</Link>
                                </div>
                                <div>
                                    <Link to="/forgot" style={{ color: 'grey', fontSize: "12px", textDecoration: "none" }}>Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center ">
                            <button type="submit" className="btn btn-primary btn-md mb-3" >Login</button>
                        </div>
                        <div className="text-center ">
                            <div style={{ fontSize: "11px" }}>Don't have an account <span ><a href="Signup" style={{ textDecoration: "none" }}>Signup</a></span></div>
                        </div>
                        {/* </div> */}

                        {/* </div> */}
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login;