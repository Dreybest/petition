import { useFormik } from "formik";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { userLogin } from "../../models/userModels/loginModel";
import * as Yup from 'yup';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormError from "../../utils/FormError";
import { redirectTo } from "../../utils/Common";

const SignInPage = () => {
  const [isSuccess, setSuccess] = useState(null),
    [isError, setError] = useState(null),
    [isSubmitting, setIsSubmitting] = useState(false),
    dispatch = useDispatch(),

    validationSchema = Yup.object({

      email: Yup.string().email('invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),

    }),

    successCallback = (response) => {
      setIsSubmitting(false);
      console.log('response >>>>>', response);
      redirectTo( "/" );

    },
    errorCallback = (error) => {
      setIsSubmitting(false);
      console.log('error >>>>>', error);
      setError(error);
    },

    callback = {
      success: successCallback,
      error: errorCallback,
    },
    submitDataToServer = (values) => {
      setError(null);
      setSuccess(null);
      setIsSubmitting(true);
      dispatch(userLogin(values, callback));

    };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: submitDataToServer,
  });
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
                    <h2 className="title">Sign In</h2>
                    <p className="mt-0 mb-35"> Sign in to create and sign Petitions </p>
                    {isError ? <FormError> {isError ? isError : ''}</FormError> : null}

                    <form id="sign-up-form" className="sign-up-form m-0 p-0" method='POST' onSubmit={formik.handleSubmit}>

                      <input type="email" id="email" className="form-control" placeholder="Email Address" name="email" onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur} />

                      <span className="sub-text">{formik.touched.email && formik.errors.email ? formik.errors.email : ''} </span> <br />

                      <input type="password" id="password" className="form-control" placeholder="Password" name="password" onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur} />
                      <span className="sub-text">{formik.touched.password && formik.errors.password ? formik.errors.password : ''} </span> <br />


                      <button type="submit" className="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20" disabled={isSubmitting ? "disabled" : false}>{isSubmitting
                        ? (
                          <>
                            <i className="lni spin lni-spinner"></i> Please Wait... </>
                        ) : <>Sign In </>
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

export default SignInPage;