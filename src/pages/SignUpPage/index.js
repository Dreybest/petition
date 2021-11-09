import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const SignUpPage = () => {

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
                                        <p className="mt-0 mb-35">Become part of one of the largest communities of online activists. <br/> Meet people who share your concerns, support the causes you care about — and much more.</p>
                                        
                                        <form id="sign-up-form" className="sign-up-form m-0 p-0">
                                            <input type="text" id="fname" className="form-control" placeholder="First Name"  name="fname" required/> <br/>
                                            <input type="text" id="lname" className="form-control" placeholder="Last Name"  name="lname" required/> <br/>
                                            <input type="text" id="uname" className="form-control" placeholder="Username"  name="uname" required/> <br/>
                                            <input type="email" id="email" className="form-control" placeholder="Email Address"  name="email" required/> <br/>
                                            <input type="password" id="password" className="form-control" placeholder="Password"  name="password" required/> <br/>
                                            
                                            <button type="submit" className="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20">Sign Up</button>
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