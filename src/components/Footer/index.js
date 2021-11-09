import React from "react";
import {
    Link
  } from "@reach/router";

  export const Footer = ()=>{
        return (
          <footer id="footer" className="footer bg-img-center-bottom bg-img-cover" data-tm-bg-img="images/bg/bg3.jpg">
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-bottom-style1">
                <div className="footer-paragraph font-size-15">© Copyright 2020 by Dreybyte Solutions</div>
                <div className="widget widget-social-list-custom clearfix mb-0">
                  <ul className="styled-icons icon-theme-colored1">
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-vk"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
          </footer>
        )

  }