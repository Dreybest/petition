/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

// LoggedLandingPage

import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
import RecentPetition from "../../components/recentPetition/RecentPetition";
import Slider from "../../components/slider/Slider";
import Slider2 from "../../components/slider2/Slider2";
import How from "../../components/how/How";
import { LoggedInHeader } from "../../components/LoggedInHeader/LoggedInHeader";
import { useSelector } from "react-redux";


const LandingPage = () => {


  const user = useSelector(state => state.petition);
  return (
    <>
      <div id="wrapper" className="clearfix">
        {
          user.user.status === true  ?
            <LoggedInHeader />
            : <Header />
        }



      </div>
      <div className="main-content-area">

        <Slider />
        <Slider2 />


        <RecentPetition />

        <How />
      </div>

      <Footer />
      <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>

    </>
  )
}

export default LandingPage;