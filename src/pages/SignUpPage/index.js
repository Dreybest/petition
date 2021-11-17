import { useFormik } from "formik";
import React, { useState,useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { registerModel } from "../../models/userModels/registerModel";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import FormSuccess from '../../utils/FormSuccess';
import FormError from '../../utils/FormError';
import { Link, redirectTo } from "@reach/router";
const SignUpPage = () => {
    const [isSucess, setSuccess] = useState(null),
        [isError, setError] = useState(null),
        [isSubmitting, setIsSubmitting] = useState(false),
        dispatch = useDispatch(),


        validationSchema = Yup.object({
            fullname: Yup.string().required('fullname is required*'),
            gender: Yup.string().required('Gender is required*'),
            email: Yup.string().email('invalid email format*').required('Email is required*'),
            password: Yup.string().required('Password is required*'),
            confirm_password:  Yup.string()
            .test('passwords-match', 'Passwords must match', function(value){
              return this.parent.password === value
            })
           

        }),

        successCallback = (response) => {
            setIsSubmitting(false);
            const { message } = response;
            console.log('response >>>>>', response);
            setSuccess(message); 
            redirectTo( "/" );
        },
        errorCallback = (error) => {
            setIsSubmitting(false);
            console.log('error >>>>>', error);
            setError(error);
        },
        callback = {
            success: successCallback,
            error: errorCallback
        },
        submitDataToServer = (values) => {
            setError(null);
            setSuccess(null);
            setIsSubmitting(true);
            dispatch(registerModel(values, callback));

        };
    const formik = useFormik({
        initialValues: {
            fullname: '',
            gender: '',
            email: '',
            password: '',
            confirm_password: '',

        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        onSubmit: submitDataToServer,
    });
    useEffect(() => {
        if(isSucess){
            setTimeout(() => {
                setSuccess(false);  
            }, 4000);
        }
        

    }, [isSucess]);
    return (
        <>
            <div id="wrapper" className="clearfix">

                <Header />
            </div>
            <div className="main-content-area">

                <section>
                    <div className="container pb-100" data-tm-padding-top="10">
                        <div className="section-content">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="newsletter-form-current-style1 text-center" data-tm-bg-color="#f4f3ef">
                                        <h2 className="title">Sign Up</h2>
                                        <p className="mt-0 mb-35">Become part of one of the largest communities of online activists. <br /> Meet people who share your concerns, support the causes you care about — and much more.</p>
                                        {isSucess ? <FormSuccess> {isSucess ? isSucess : ''} <Link to="/sign-in-page">Login</Link> To continue </FormSuccess> : null}

                                        {isError ? <FormError> {isError ? isError : ''}</FormError> : null}
                                        <form id="sign-up-form" className="sign-up-form m-0 p-0" method="POST" onSubmit={formik.handleSubmit} >
                                            <input type="text" id="fullname" className="form-control" placeholder="Full Name" name="fullname" onChange={formik.handleChange}
                                                value={formik.values.fullname}
                                                onBlur={formik.handleBlur} />
                                            <span  className="sub-text">{formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname : ''} </span>
                                            <br />


                                            <input type="email" id="email" className="form-control" placeholder="Email Address" name="email" onChange={formik.handleChange}
                                                value={formik.values.email}
                                                onBlur={formik.handleBlur} />
                                            <span  className="sub-text">{formik.touched.email && formik.errors.email ? formik.errors.email : ''} </span>
                                            <br />
                                            <select id="gender" className="form-control" name="gender" onChange={formik.handleChange}
                                                value={formik.values.gender}
                                                onBlur={formik.handleBlur} >
                                                <option selected>Choose...</option>
                                                <option value="Female">Female</option>
                                                <option value="Male" >Male</option>
                                            </select>

                                            <span  className="sub-text">{formik.touched.gender && formik.errors.gender ? formik.errors.gender : ''} </span>
                                            <br />
                                            <input type="password" id="password" className="form-control" placeholder="Password" name="password" onChange={formik.handleChange}
                                                value={formik.values.password}
                                                onBlur={formik.handleBlur} />
                                            <span  className="sub-text">{formik.touched.password && formik.errors.password ? formik.errors.password : ''} </span>
                                            <br />
                                            <input type="password" id="confirm_password" className="form-control" placeholder="confirm_password" name="confirm_password" onChange={formik.handleChange}
                                                value={formik.values.confirm_password}
                                                onBlur={formik.handleBlur} />
                                            <span  className="sub-text">{formik.touched.confirm_password && formik.errors.confirm_password ? formik.errors.confirm_password : ''} </span>
                                            <br />
                                           
                                            <button type="submit" className="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20" disabled={isSubmitting ? "disabled" : false}>{isSubmitting
                                                ? (
                                                    <>
                                                        <i className="lni spin lni-spinner"></i> Please Wait... </>
                                                ) : <>Signup </>
                                            }</button>

                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

            </div>

            <Footer />
            <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>

        </>
    )
}

export default SignUpPage;