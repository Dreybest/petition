/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

// LoggedLandingPage

import { Footer } from "../../components/Footer";

import { LoggedInHeader } from "../../components/LoggedInHeader/LoggedInHeader";
import RecentPetition from "../../components/recentPetition/RecentPetition";
import Slider from "../../components/slider/Slider";
import Slider2 from "../../components/slider2/Slider2";
import How from "../../components/how/How";
const LoggedLandingPage = () => {


  return (
    <>
      <div id="wrapper" className="clearfix">

        <LoggedInHeader />

      </div>
      <div className="main-content-area">

        <Slider />
        <Slider2/>   

      
        <RecentPetition />
       
      <How />
      </div>

      <Footer />
      <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>

    </>
  )
}

export default LoggedLandingPage;