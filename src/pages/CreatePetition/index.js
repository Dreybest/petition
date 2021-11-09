import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const CreatePetition = () => {

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
                <h2 className="title">Create Petition</h2>
                <p className="mt-0 mb-35">Start by filling out this form, and in a few minutes you'll be ready to collect thousands of signatures</p>
                
                <form id="petition-form" className="petition-form m-0 p-0">
                  <input type="text" id="petition-title" className="form-control" placeholder="Petition Title"  name="petition-title" required /> <br/>
                  <input type="file" accept="image/*" id="petitition-image" className="form-control" placeholder="Petition Image"  name="petitition-image" /> <br/>
                  <textarea id="petition-text" className="form-control" placeholder="Write your Petition here"  name="petition-text" required rows="9"></textarea> <br/>
                  
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