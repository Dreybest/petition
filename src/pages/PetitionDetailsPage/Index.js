/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
// import {
//   Link
// } from "@reach/router";

import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import PetitionDetails from "../../components/petitionDetail/PetitionDetails";
import Comments from "../../components/comments/Comments";
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
                  <PetitionDetails />
                  <Comments />
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
