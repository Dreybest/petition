/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"

import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import AllPetitionsComp from "../../components/allPetitionsComp/AllPetitionsComp";


const AllPetitionPage = () => {
  return (
    <>
      <div id="wrapper" className="clearfix">

        <Header />

      </div>

      <div className="main-content-area">

        <section data-tm-bg-color="#fff">
          <div className="section-content mt-lg--0 pt-lg--0" data-tm-margin-top="-183" data-tm-padding-top="184">
            <div className="container">
              {/* <div className="tm-sc-section-title section-title text-center mb-50">
                <div className="row">
                  <div className="col-lg-5 m-auto">
                    <div className="title-wrapper mb-0">

                      <h2 className="title"> Petitions</h2>

                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row">

              <AllPetitionsComp />

              </div>
            </div>
          </div>
          <div className="tm-floating-objects">
            <span className="floating-object-1" data-tm-bg-img="images/shape/blog-01.png" data-tm-width="185" data-tm-height="253" data-tm-top="auto" data-tm-bottom="-6" data-tm-left="75" data-tm-opacity="1"></span>
            <span className="floating-object-2 tm-animation-floating" data-tm-bg-img="images/shape/blog-02.png" data-tm-width="90" data-tm-height="80" data-tm-top="440" data-tm-bottom="auto" data-tm-left="180" data-tm-opacity="1"></span>
            <span className="floating-object-3" data-tm-bg-img="images/shape/blog-03.png" data-tm-width="136" data-tm-height="201" data-tm-top="auto" data-tm-bottom="0" data-tm-right="100" data-tm-left="auto" data-tm-opacity="1"></span>
          </div>
        </section>

        <section data-tm-bg-color="#f4f3ef">
          <div className="container pt-80 pb-80">
            <div className="section-content pt-1">
              <div className="row">
                <div className="col-sm-12">
                  <div className="tm-sc-clients tm-sc-clients-carousel owl-dots-light-skin owl-dots-center clients-animation-grayscale">
                    <div className="owl-carousel owl-theme tm-owl-carousel-5col" data-autoplay="true" data-loop="true" data-duration="6000" data-smartspeed="300" data-margin="120" data-stagepadding="0" data-laptop="4">
                      <div className="item"> <a target="_blank" href="#"> <img src='images/clients/1.png' alt='Image' /> </a></div>
                      <div className="item"> <a target="_blank" href="#"> <img src='images/clients/2.png' alt='Image' /> </a></div>
                      <div className="item"> <a target="_blank" href="#"> <img src='images/clients/3.png' alt='Image' /> </a></div>
                      <div className="item"> <a target="_blank" href="#"> <img src='images/clients/4.png' alt='Image' /> </a></div>
                      <div className="item"> <a target="_blank" href="#"> <img src='images/clients/5.png' alt='Image' /> </a></div>
                      <div className="item"> <a target="_blank" href="#"> <img src='images/clients/6.png' alt='Image' /> </a></div>
                    </div>
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

export default AllPetitionPage;