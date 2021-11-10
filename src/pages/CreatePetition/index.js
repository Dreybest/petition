import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormError from "../../utils/FormError";
import FormSuccess from '../../utils/FormSuccess';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { createUserPetition } from "../../models/petitionModels/createUserPetition";
import { LoggedInHeader } from "../../components/LoggedInHeader/LoggedInHeader";

const CreatePetition = () => {
  const [isSuccess, setSuccess] = useState(null),
    [isError, setError] = useState(null),
    [isSubmitting, setIsSubmitting] = useState(false),
    dispatch = useDispatch();
    const user = useSelector(state => state.petition),



    successCallback = (response) => {
      setIsSubmitting(false);
      console.log('response >>>>>', response);
      setSuccess(response.message);

    },
    errorCallback = (error) => {
      setIsSubmitting(false);
      console.log('error >>>>>', error);
      setError("Title already existed! Please create another Petition");
    },

    callback = {
      success: successCallback,
      error: errorCallback,
    },
    submitDataToServer = (values) => {
      console.log(user.id);
      setError(null);
      setSuccess(null);
      setIsSubmitting(true);
      dispatch(createUserPetition(values, callback));

    };
  const formik = useFormik({
    initialValues: {
      title: '',
      user_id: `${user.id}`,
      description: '',
    },
    validateOnBlur: true,
    onSubmit: submitDataToServer,
  });
  useEffect(() => {
    if(isSuccess){
        setTimeout(() => {
            setSuccess(false);  
        }, 4000);
    }
    

}, [isSuccess]);
  return (
    <>
      <div id="wrapper" className="clearfix">

      <LoggedInHeader />
     
      </div>
      <div className="main-content-area">

        <section>
          <div className="container pb-100" data-tm-padding-top="10">
            <div className="section-content">
              <div className="row">

                <div className="col-lg-12">
                  <div className="newsletter-form-current-style1 text-center" data-tm-bg-color="#f4f3ef">
                    <h2 className="title">Create Petition</h2>
                    <p className="mt-0 mb-35">Start by filling out this form, and in a few minutes you'll be ready to collect thousands of signatures</p>
                    {isSuccess ? <FormSuccess> {isSuccess ? isSuccess : ''} </FormSuccess> : null}

                    {isError ? <FormError> {isError ? isError : ''}</FormError> : null}
                    <form id="petition-form" className="petition-form m-0 p-0" method="POST" onSubmit={formik.handleSubmit}>
                      <input type="text" id="title" className="form-control" placeholder="Petition Title" name="title" onChange={formik.handleChange}
                        value={formik.values.title}
                        onBlur={formik.handleBlur} required /> <br />
                      <input type="file" accept="image/*" id="petitition-image" className="form-control" placeholder="Petition Image" name="petitition-image" /> <br />
                      <textarea id="description" className="form-control" placeholder="Write your Petition here" name="description" required rows="9" onChange={formik.handleChange}
                        value={formik.values.description}
                        onBlur={formik.handleBlur}></textarea> <br />

                      <button type="submit" className="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20">Submit</button>
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

export default CreatePetition;