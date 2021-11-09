import React from "react";
import {
    Link
  } from "@reach/router";

export const Header = ()=>{

    return (
      <header id="header" className="header header-layout-type-header-2rows">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                <ul className="element contact-info">
                  <li className="contact-phone"><i className="fa fa-phone font-icon sm-display-block"></i> Tel: +2348011122334</li>
                  <li className="contact-email"><i className="fa fa-envelope font-icon sm-display-block"></i>  info@adjurepetitions.org</li>
                  <li className="contact-address"><i className="fa fa-map font-icon sm-display-block"></i> Ilaro, Ogun State</li>
                </ul>
              </div>              
            </div>
          </div>
        </div>
        <div className="header-nav tm-enable-navbar-hide-on-scroll">
          <div className="header-nav-wrapper navbar-scrolltofixed">
            <div className="menuzord-container header-nav-container">
              <div className="container position-relative">
                <div className="row header-nav-col-row">
                  <div className="col-sm-auto align-self-center">
                    <a className="menuzord-brand site-brand" href="./">
                      <img className="logo-default logo-1x" src="images/adjure-logo.png" alt="Logo"/>
                      <img className="logo-default logo-2x retina" src="images/adjure-logo.png" alt="Logo"/>
                    </a>
                  </div>
                  <div className="col-sm-auto ms-auto pe-0 align-self-center">
                    <nav id="top-primary-nav" className="menuzord theme-color1" data-effect="fade" data-animation="none" data-align="right">
                      <ul id="main-nav" className="menuzord-menu">
                        <li className="active">
                          <a href="./">Home</a></li>
                        <li><Link to="/create-petition">Create Petition</Link></li>
                        <li><Link to="/sign-up-page">Sign Up</Link></li>
                        <li><Link to="/sign-in-page">Sign In</Link></li>
                        <li><Link to="/petition-page">Petitions</Link></li>                       
                        
                      </ul>
                    </nav>
                  </div>
                  
                </div>
                <div className="row header-nav-clone-col-row d-block d-xl-none">
                   <div className="col-12">
                    <nav id="top-primary-nav-clone" className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                     <ul id="main-nav-clone" className="menuzord-menu menuzord-right menuzord-indented scrollable">
                     </ul>
                    </nav>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}