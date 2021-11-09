import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const SignInPage = () => {

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
                                    
                                  <form id="sign-up-form" className="sign-up-form m-0 p-0">
                                      
                                    <input type="email" id="email" className="form-control" placeholder="Email Address"  name="email" required/> <br/>

                                    <input type="password" id="password" className="form-control" placeholder="Password"  name="password" required/> <br/>
                                      
                                    <button type="submit" className="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20">Sign In</button>
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