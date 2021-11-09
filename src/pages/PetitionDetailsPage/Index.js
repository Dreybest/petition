import React from "react";
import {
    Link
  } from "@reach/router";
  
  import { Footer } from "../../components/Footer";
  
  import { Header } from "../../components/Header";
  const MainPetitionPage = () => {

      return ( 
        <>
          <div id="wrapper" className="clearfix">
            
                <Header />
            
          </div>

          <div className="main-content-area">
   
              <section className="page-title layer-overlay overlay-dark-9 section-typo-light bg-img-center" data-tm-bg-img="images/bg/bg1.jpg">
                <div className="container pt-90 pb-90">
                  <div className="section-content">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h2 className="title">Petition Details</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    
   
              <section>
                <div className="container mt-30 mb-30 pt-30 pb-30">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="blog-posts single-post">
                        <article className="post clearfix mb-0">
                          <div className="entry-header mb-30">
                            <div className="post-thumb thumb"> <img src="images/bg/rtl.jpg" alt="images" className="img-responsive img-fullwidth" /> </div>
                            <h3 className="mt-30">Provide Libraries for all Public Schools in Nigeria</h3>
                            <div className="entry-meta mt-0">
                              <span className="mb-10 text-gray mr-10"><i className="far fa-calendar-alt mr-10 text-theme-colored1"></i> Jul 20, 2021</span>
                              <span className="mb-10 text-gray mr-10"><i className="far fa-comments mr-10 text-theme-colored1"></i> 214 comments</span>
                            </div>

                          </div>
                          <div className="entry-content">
                            <p>It was a rainy Saturday afternoon when I first read of the ‘Seven Wonders of the World’ and my young self was amazed by the depth of knowledge that could be found just by reading a book. I became curious, I wanted to know more and so I read some more. It all started with me disturbing my sister with series of questions and in her frustration; she sent me off to “read a book”. This was the beginning of my reading journey and books have since been an important part of my life.</p>

                            <p>Today, I teach children and teenagers occasionally and it breaks my heart to find out that a lot of our youths are not reading, as they should. Books are powerful; they open our minds to limitless possibilities, improve our arguments, sharpen our reasoning skills, help us comprehend a situation/event and analyse objectively. At the centre of poverty and all forms of inequality in Nigeria is a combination of lack of access to information and a scarcity of creative education.</p>

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

                            <p>Please sign this petition to support the provision of libraries that are up to standard in all public schools in Nigeria.</p>

                            <div className="col-12">
                              
                              <div className="mb-3">
                                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait...">Sign Petition</button>

                                <a className="social-link" href="#" >
                                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..."> <i className="fab fa-facebook"></i>Share Petition</button>
                                </a>

                                <a className="social-link" href="#" >
                                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..."> <i className="fab fa-twitter"></i>Share Petition</button>
                                </a>

                                <a className="social-link" href="#" >
                                <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait..."> <i className="fab fa-whatsapp"></i>Share Petition</button>
                                </a>
                                
                              </div>
                          
                            </div>

                            
                          </div>
                        </article>
                        <div className="comment-box mt-30">
                          <h3>Leave a Comment</h3>
                          <form role="form" id="comment-form">
                            <div className="row">
                              <div className="col-12 pt-0 pb-0">
                                <div className="mb-3">
                                  <input type="text" className="form-control" required name="contact_name" id="contact_name" placeholder="Enter Name" />
                                </div>
                                <div className="mb-3">
                                  <input type="text" required className="form-control" name="contact_email2" id="contact_email2" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                  <input type="text" placeholder="Enter Website" required className="form-control" name="subject" />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-3">
                                  <textarea className="form-control" required name="contact_message2" id="contact_message2"  placeholder="Enter Message" rows="7"></textarea>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-3">
                                  <button type="submit" className="btn btn-theme-colored1 btn-round m-0" data-loading-text="Please wait...">Send Your Comment</button>
                                </div>
                              </div>
                            </div>
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
  
  export default MainPetitionPage;
