/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createUserSignature } from '../../models/petitionModels/createSignature';
import { getPetition } from '../../models/petitionModels/singlePetition';
import { timeSince } from '../../utils/DateFormatter';
import {FacebookShareButton, FacebookIcon} from "react-share";

const PetitionDetails = () => {
  const [isSubmitting, setIsSubmitting] = useState(false),
    dispatch = useDispatch(),
    petition = useSelector(state => state.petition),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchSinglePetition = async () => {
      // timeSince()
      // console.log(id);
      await dispatch(getPetition(petition.id));

    },
    successCallback = (response) => {
      setIsSubmitting(false);
      const { message } = response;
      console.log('response >>>>>', response);
  
      alert(message);
    },
    errorCallback = (error) => {
      setIsSubmitting(false);
      console.log('error >>>>>', error);
     
      alert(error);
    },
    callback = {
      success: successCallback,
      error: errorCallback
    },
    submitDataToServer = () => {
      setIsSubmitting(true);
      console.log("petition_id", petition.singlePetition.id);
      console.log("user_id:", petition.singlePetition.user_id );
      dispatch(createUserSignature({ petition_id: petition.singlePetition.id, user_id: petition.singlePetition.user_id }, callback));

    };
  useEffect(() => {
    // console.log("singlePetition.singlePetition.title", petition.singlePetition.title);
    fetchSinglePetition();
  }, [fetchSinglePetition]);
  return (
    <>
      <article className="post clearfix mb-0">
        <div className="entry-header mb-30">
          <div className="post-thumb thumb"> <img src="images/bg/rtl.jpg" alt="images" className="img-responsive img-fullwidth" /> </div>
          <h3 className="mt-30">{petition.singlePetition.title}</h3>
          <div className="entry-meta mt-0">
            <span className="mb-10 text-gray mr-10"><i className="far fa-calendar-alt mr-10 text-theme-colored1"></i> {timeSince(petition.singlePetition.created_at)} </span>
            <span className="mb-10 text-gray mr-10"><i className="far fa-comments mr-10 text-theme-colored1"></i> {petition.singlePetition.total_signatures} Sign</span>
          </div>

        </div>
        <div className="entry-content">
          <p>{petition.singlePetition.description}</p>

          {/* <p>Today, I teach children and teenagers occasionally and it breaks my heart to find out that a lot of our youths are not reading, as they should. Books are powerful; they open our minds to limitless possibilities, improve our arguments, sharpen our reasoning skills, help us comprehend a situation/event and analyse objectively. At the centre of poverty and all forms of inequality in Nigeria is a combination of lack of access to information and a scarcity of creative education.</p>

                            <p>I met 12-year-old Atinuke on an excursion to a beach in Badagry in October 2019, where I engaged some of the children on their knowledge of the environment. I was fascinated by Atinuke’s brilliance when she talked about seashells and all the things she could create with them: collage, decorations, and all; she became my little friend. As we continued our conversation, this young artist revealed that she couldn’t read more on improving her art because she didn’t own any books and her school (across the beach) didn’t have a library, she added that she had no idea what a library looked like. This is just one of so many other sad stories of brilliant children who like Atinuke do not have access to books.</p>

                            <p>The National Policy on Education (NPE) is a statement of intentions, expectation, goals and standard for quality education delivery in Nigeria. The goals of the NPE (6th edition, reprinted in 2014), include taking necessary measures to ensure that all tiers of government shall promote the establishment and support of Reading Clubs in schools, Community Libraries and other such resources that will enhance effective learning; and for the Government to provide school libraries at the basic education level. This is a welcome development but unfortunately not much has been achieved in its implementation.</p>

                            <p> I am therefore appealing to the Honourable Minister of Education and all stakeholders in the Education sector, to make the education of the youths a priority by ensuring that all public schools in Nigeria, have Libraries that meet the following standards:</p>

                            <ul>
                              <li>Qualified library personnel</li>
                              <li>Sufficient books in ratio to the number of students</li>
                              <li>Power supply</li>
                              <li>Provision of quality books, journals, magazines and reference materials</li>
                              <li>Information and Communication Technology (ICT): provision of computers, Internet, e-books, etc.</li>
                              <li>Conducive seating/reading area: provision of tables, chairs, shelves, etc. in a well-ventilated environment.</li>
                            </ul>

                            <p>At the core of the 2030 Sustainable Development Goals (SDGs) adopted in 2015 by member states of the United Nations is the eradication of poverty, improving education and reducing all areas of inequality. I believe that providing libraries for public schools in Nigeria is a necessary step in meeting these goals. The mind of the child is naturally brilliant, capable of so many things and in the absence of creativity; we leave it open to other influences. Access to learning is a right for every child!</p>

                            <p>Please sign this petition to support the provision of libraries that are up to standard in all public schools in Nigeria.</p> */}

          <div className="col-12">

            <div className="mb-3">
              <button type="button" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..." disabled={isSubmitting ? "disabled" : false} onClick={submitDataToServer}>{isSubmitting
                                                ? (
                                                    <>
                                                        <i className="lni spin lni-spinner"></i> Please Wait... </>
                                                ) : <>Sign Petition  </>
                                            }</button>

              <a className="social-link" href="#" >
                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..."> <i className="fab fa-facebook"></i>Share Petition</button>
              </a>

              <a className="social-link" href="#" >
                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..."> <i className="fab fa-twitter"></i>Share Petition</button>
              </a>

              <a className="social-link" href="#" >
                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..."> <i className="fab fa-whatsapp"></i>Share Petition</button>
              </a>
              <FacebookShareButton 
                url={"http://www.camperstribe.com"}
                quote={petition.singlePetition.title}
                hashtag="#camperstribe"
                className="btn btn-theme-colored1 btn-round m-0">
                 <FacebookIcon size={36} />
              </FacebookShareButton>

            </div>

          </div>


        </div>
      </article>
    </>
  )
}

export default PetitionDetails
