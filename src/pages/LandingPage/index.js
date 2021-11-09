import React from "react"
import {
  Link
} from "@reach/router";

import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";
const LandingPage = () => {
    return ( 
        <>
          <div id="wrapper" className="clearfix">

            <Header />

          </div>
          <div className="main-content-area">
    
            <section id="home">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col">
                    
                    <p className="rs-p-wp-fix"></p>
                    <rs-module-wrap id="rev_slider_1_1_wrapper" data-alias="firoox-revolution-slider" data-source="gallery" style= {{background:'transparent',padding:'0', margin:'0px auto', marginTop:'0', marginBottom:'0'}}>
                      <rs-module id="rev_slider_1_1"  data-version="6.3.3">
                        <rs-slides>
                          <rs-slide data-key="rs-2" data-title="Slide 1" data-thumb="images/bg/slide1.jpg" data-anim="ei:d;eo:d;s:d;r:default;t:slotslide-horizontal;sl:d;">
                            <img src="images/bg/slide1.jpg" title="firoox-s1" width="1920" height="1280" data-bg="p:center top;" data-parallax="off" className="rev-slidebg" data-no-retina/>
                            <rs-layer
                              id="slider-2-slide-2-layer-2"
                              data-type="text"
                              data-color="rgba(255, 255, 255, 0.11)"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:0,26px,0,0;y:m;yo:-141px,-103px,-124px,-99px;"
                              data-text="w:normal;s:180,150,130,100;l:165,98,90,72;ls:0,0,-1px,0px;fw:700;a:left,left,center,center;"
                              data-dim="w:1200px,890px,537px,455px;h:186px,138px,auto,auto;"
                              data-frame_0="o:1;"
                              data-frame_0_chars="d:5;y:-100%;o:0;rZ:35deg;"
                              data-frame_0_mask="u:t;"
                              data-frame_1="st:1360;sp:1200;sR:1360;"
                              data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                              data-frame_1_mask="u:t;"
                              data-frame_999="o:0;st:w;sR:5640;"
                              style={{zIndex:'13', textTransform:'uppercase'}}
                              className="font-current-theme1"
                            >ADJURE
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-10"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:281px,203px,175px,179px;"
                              data-text="w:normal;s:22,22,24,20;l:30,32,24,22;ls:1px,1px,0px,1px;fw:500;a:left,left,center,center;"
                              data-dim="w:482px,355px,344px,356px;h:auto,auto,auto,26px;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:500;sp:1000;sR:500;"
                              data-frame_999="o:0;st:w;sR:7500;"
                              style={{zIndex:'12'}}
                              className="font-current-theme1"
                            >Welcome to Adjure Petition
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-18"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:55px,55px,8px,0;yo:318px,249px,212px,215px;"
                              data-text="w:normal;s:75,70,60,40;l:95,90,80,50;ls:0px,0px,-1px,0px;fw:700;a:left,left,center,center;"
                              data-dim="w:850px,743px,659px,455px;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:1100;sp:1000;sR:1100;"
                              data-frame_999="o:0;st:w;sR:6900;"
                              style= {{zIndex: '11', textTransform:'uppercase'}}
                              className="font-current-theme1"
                            >START YOUR <span className="text-theme-colored2">PETITION </span> 
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-22"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:60px,60px,-90px,-100px;yo:548px,480px,440px,370px;"
                              data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:1700;sp:1000;sR:1700;"
                              data-frame_999="o:0;st:w;sR:6300;"
                              style= {{zIndex:'10'}}
                              className="font-current-theme1"
                            ><Link to="/create-petition" className="btn btn-theme-colored1 btn-lg btn-flat">Start Now</Link>
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-3"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:270px,270px,100px,110px;yo:548px,480px,440px,370px;"
                              data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:2020;sp:1000;sR:2020;"
                              data-frame_999="o:0;st:w;sR:5980;"
                              style= {{zIndex:'9'}}
                              className="font-current-theme1"
                            >
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-0"
                              data-type="shape"
                              data-rsp_ch="on"
                              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                              data-dim="w:100%;h:100%;"
                              data-basealign="slide"
                              data-frame_999="o:0;st:w;sR:8700;"
                              style= {{zIndex:'8', backgroundColor: 'rgba(0,10,22,0.17)'}}
                            >
                            </rs-layer>
                          </rs-slide>
                          <rs-slide data-key="rs-11" data-title="Slide 1" data-thumb="images/bg/slide2.jpg" data-anim="ei:d;eo:d;s:d;r:default;t:slotslide-horizontal;sl:d;">
                            <img src="images/bg/slide2.jpg" title="Untitled-1" width="1920" height="1280" data-bg="p:center top;" data-parallax="off" className="rev-slidebg" data-no-retina/>
                            <rs-layer
                              id="slider-2-slide-11-layer-2"
                              data-type="text"
                              data-color="rgba(255, 255, 255, 0.11)"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:0,26px,0,0;y:m;yo:-141px,-103px,-124px,-99px;"
                              data-text="w:normal;s:180,150,130,100;l:165,98,90,72;ls:0,0,-1px,0px;fw:700;a:left,left,center,center;"
                              data-dim="w:1200px,890px,537px,455px;h:186px,138px,auto,auto;"
                              data-frame_0="o:1;"
                              data-frame_0_chars="d:5;y:-100%;o:0;rZ:35deg;"
                              data-frame_0_mask="u:t;"
                              data-frame_1="st:1360;sp:1200;sR:1360;"
                              data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                              data-frame_1_mask="u:t;"
                              data-frame_999="o:0;st:w;sR:5640;"
                              style= {{zIndex:'13', textTransform:'uppercase'}}
                              className="font-current-theme1"
                            >ADJURE
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-10"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:281px,203px,175px,179px;"
                              data-text="w:normal;s:22,22,24,20;l:30,32,24,22;ls:1px,1px,0px,1px;fw:500;a:left,left,center,center;"
                              data-dim="w:482px,355px,344px,356px;h:auto,auto,auto,26px;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:500;sp:1000;sR:500;"
                              data-frame_999="o:0;st:w;sR:7500;"
                              style={{zIndex:'12'}}
                              className="font-current-theme1"
                            >Welcome to Adjure Petition
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-18"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:55px,55px,8px,0;yo:318px,249px,212px,215px;"
                              data-text="w:normal;s:75,70,60,40;l:95,90,80,50;ls:0px,0px,-1px,0px;fw:700;a:left,left,center,center;"
                              data-dim="w:850px,743px,659px,455px;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:1100;sp:1000;sR:1100;"
                              data-frame_999="o:0;st:w;sR:6900;"
                              style= {{zIndex: '11', textTransform:'uppercase'}}
                              className="font-current-theme1"
                            >START YOUR <span className="text-theme-colored2">PETITION </span> 
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-22"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:60px,60px,-90px,-100px;yo:548px,480px,440px,370px;"
                              data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:1700;sp:1000;sR:1700;"
                              data-frame_999="o:0;st:w;sR:6300;"
                              style= {{zIndex:'10'}}
                              className="font-current-theme1"
                            ><Link to="/create-petition" className="btn btn-theme-colored1 btn-lg btn-flat">Start Now</Link>
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-3"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:270px,270px,100px,110px;yo:548px,480px,440px,370px;"
                              data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:2020;sp:1000;sR:2020;"
                              data-frame_999="o:0;st:w;sR:5980;"
                              style= {{zIndex:'9'}}
                              className="font-current-theme1"
                            >
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-2-layer-0"
                              data-type="shape"
                              data-rsp_ch="on"
                              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                              data-dim="w:100%;h:100%;"
                              data-basealign="slide"
                              data-frame_999="o:0;st:w;sR:8700;"
                              style= {{zIndex:'8', backgroundColor: 'rgba(0,10,22,0.17)'}}
                            >
                            </rs-layer>
                          </rs-slide>
                          <rs-slide data-key="rs-12" data-title="Slide 1" data-thumb="images/bg/slide3.jpg" data-anim="ei:d;eo:d;s:d;r:default;t:slotslide-horizontal;sl:d;">
                            <img src="images/bg/slide3.jpg" title="firoox-s3" width="1920" height="1280" data-bg="p:center top;" data-parallax="off" className="rev-slidebg" data-no-retina/>
                            <rs-layer
                              id="slider-2-slide-12-layer-2"
                              data-type="text"
                              data-color="rgba(255, 255, 255, 0.11)"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:0,26px,0,0;y:m;yo:-141px,-106px,-124px,-99px;"
                              data-text="w:normal;s:180,150,130,100;l:165,98,90,72;ls:0,0,-1px,0px;fw:700;a:left,left,center,center;"
                              data-dim="w:1200px,890px,537px,455px;h:186px,138px,auto,auto;"
                              data-frame_0="o:1;"
                              data-frame_0_chars="d:5;y:-100%;o:0;rZ:35deg;"
                              data-frame_0_mask="u:t;"
                              data-frame_1="st:1360;sp:1200;sR:1360;"
                              data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                              data-frame_1_mask="u:t;"
                              data-frame_999="o:0;st:w;sR:5640;"
                              style= {{zIndex:'13', textTransform:'uppercase'}}
                              className="font-current-theme1"
                            >ADJURE
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-12-layer-10"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:281px,203px,175px,179px;"
                              data-text="w:normal;s:22,22,24,20;l:30,32,24,22;ls:1px,1px,0px,1px;fw:500;a:left,left,center,center;"
                              data-dim="w:482px,355px,344px,356px;h:auto,auto,auto,26px;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:500;sp:1000;sR:500;"
                              data-frame_999="o:0;st:w;sR:7500;"
                              style= {{zIndex:'12'}}
                              className="font-current-theme1"
                            >Welcome to Adjure Petition
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-12-layer-18"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:55px,55px,8px,0;yo:318px,250px,212px,215px;"
                              data-text="w:normal;s:75,70,60,40;l:95,90,80,50;ls:0px,0px,-1px,0px;fw:700;a:left,left,center,center;"
                              data-dim="w:850px,743px,659px,455px;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:1100;sp:1000;sR:1100;"
                              data-frame_999="o:0;st:w;sR:6900;"
                              style= {{zIndex:'11', textTransform:'uppercase'}}
                              className="font-current-theme1"
                            >START YOUR<span className="text-theme-colored2"> PETITION</span>
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-12-layer-22"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:60px,60px,-90px,-100px;yo:548px,480px,440px,370px;"
                              data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:1700;sp:1000;sR:1700;"
                              data-frame_999="o:0;st:w;sR:6300;"
                              style= {{zIndex:'10'}}
                              className="font-current-theme1"
                            ><Link to="/create-petition" className="btn btn-theme-colored1 btn-lg btn-flat">Start Now</Link>
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-12-layer-3"
                              data-type="text"
                              data-rsp_ch="on"
                              data-xy="x:l,l,c,c;xo:270px,270px,100px,110px;yo:548px,480px,440px,370px;"
                              data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                              data-frame_0="y:-50,-37,-28,-17;"
                              data-frame_1="st:2020;sp:1000;sR:2020;"
                              data-frame_999="o:0;st:w;sR:5980;"
                              style= {{zIndex:'9'}}
                              className="font-current-theme1"
                            >
                            </rs-layer>
                            <rs-layer
                              id="slider-2-slide-12-layer-0"
                              data-type="shape"
                              data-rsp_ch="on"
                              data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                              data-dim="w:100%;h:100%;"
                              data-basealign="slide"
                              data-frame_999="o:0;st:w;sR:8700;"
                              style= {{zIndex:'8', backgroundColor:'rgba(0,10,22,0.17)'}}
                            >
                            </rs-layer>
                          </rs-slide>
                        </rs-slides>
                        <rs-static-layers>
                      
                        </rs-static-layers>
                        <rs-progress className="rs-bottom" style= {{height: '5px', background: 'rgba(199,199,199,0.5)'}}></rs-progress>
                      </rs-module>
                    
                    </rs-module-wrap>
                    
                  </div>
                </div>
              </div>
            </section>           

            <section data-tm-bg-color="#fff">
              <div className="section-content mt-lg--0 pt-lg--0" data-tm-margin-top="-183" data-tm-padding-top="184">
                <div className="container">
                <div className="tm-sc-section-title section-title text-center mb-50">
                  <div className="row">
                    <div className="col-lg-5 m-auto">
                      <div className="title-wrapper mb-0">
                        
                        <h2 className="title">Recent Petitions</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="blog-current-style1 mb-lg-30">
                        <article className="post">
                          <div className="entry-header">
                            <div className="post-thumb">
                              <div className="post-thumb-inner">
                                <div className="thumb">
                                  <img className="w-100" src="images/bg/rtl.jpg" alt="Image" />
                                </div>
                                <div className="blog-meta">
                                  <span className="admin-type mr-10"><i className="far fa-user-circle"></i>Admin</span>
                                  <span className="comments-type"><i className="far fa-comments"></i>2 Comments</span>
                                </div>
                                <div className="meta-date">26 Feb</div>
                              </div>
                            </div>
                          </div>
                          <div className="entry-content">
                            <h6 className="entry-title mt-0"><Link to="/petition-details-page">Provide Libraries for all Public Schools in Nigeria</Link></h6>
                            <div className="post-btn-readmore"><Link to="/petition-details-page" className="btn btn-plain-text-with-arrow">Read More</Link></div>
                          </div>
                        </article>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="blog-current-style1 mb-lg-30">
                        <article className="post">
                          <div className="entry-header">
                            <div className="post-thumb">
                              <div className="post-thumb-inner">
                                <div className="thumb">
                                  <img className="w-100" src="images/bg/rtl.jpg" alt="Image" />
                                </div>
                                <div className="blog-meta">
                                  <span className="admin-type mr-10"><i className="far fa-user-circle"></i>Admin</span>
                                  <span className="comments-type"><i className="far fa-comments"></i>2 Comments</span>
                                </div>
                                <div className="meta-date">26 Feb</div>
                              </div>
                            </div>
                          </div>
                          <div className="entry-content">
                            <h6 className="entry-title mt-0"><Link to="/petition-details-page">Provide Libraries for all Public Schools in Nigeria</Link></h6>
                            <div className="post-btn-readmore"><Link to="/petition-details-page" className="btn btn-plain-text-with-arrow">Read More</Link></div>
                          </div>
                        </article>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <div className="blog-current-style1 mb-lg-30">
                        <article className="post">
                          <div className="entry-header">
                            <div className="post-thumb">
                              <div className="post-thumb-inner">
                                <div className="thumb">
                                  <img className="w-100" src="images/bg/rtl.jpg" alt="Image" />
                                </div>
                                <div className="blog-meta">
                                  <span className="admin-type mr-10"><i className="far fa-user-circle"></i>Admin</span>
                                  <span className="comments-type"><i className="far fa-comments"></i>2 Comments</span>
                                </div>
                                <div className="meta-date">26 Feb</div>
                              </div>
                            </div>
                          </div>
                          <div className="entry-content">
                            <h6 className="entry-title mt-0"><Link to="/petition-details-page">Provide Libraries for all Public Schools in Nigeria</Link></h6>
                            <div className="post-btn-readmore"><Link to="/petition-details-page" className="btn btn-plain-text-with-arrow">Read More</Link></div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tm-floating-objects">
                <span className="floating-object-1" data-tm-bg-img="images/shape/blog-01.png" data-tm-width="185" data-tm-height="253" data-tm-top="auto" data-tm-bottom="-6" data-tm-left="75" data-tm-opacity="1"></span>
                <span className="floating-object-2 tm-animation-floating" data-tm-bg-img="images/shape/blog-02.png" data-tm-width="90" data-tm-height="80" data-tm-top="440" data-tm-bottom="auto" data-tm-left="180" data-tm-opacity="1"></span>
                <span className="floating-object-3" data-tm-bg-img="images/shape/blog-03.png" data-tm-width="136" data-tm-height="201" data-tm-top="auto" data-tm-bottom="0" data-tm-right="100" data-tm-left="auto" data-tm-opacity="1"></span>
              </div>
            </section>
    
            <section>
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tm-sc-gallery gallery-style1-basic gallery-current-style1 owl-carousel owl-theme tm-owl-carousel-4col tm-gallery-carousel" data-margin="6">
                    
                      <div className="tm-carousel-item">
                        <div className="tm-gallery">
                          <div className="tm-gallery-inner">
                            <div className="thumb">
                              <a href="#">
                                <img className="w-100" src="images/gallery/01.jpg" alt="Image"/>
                              </a>
                            </div>
                            <div className="tm-gallery-content-wrapper">
                              <div className="tm-gallery-content">
                                <div className="tm-gallery-content-inner">
                                  <div className="icons-holder-inner">
                                    <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                      <a className="lightgallery-trigger styled-icons-item" data-lightbox="image" href="images/gallery/01.jpg"><i className="fas fa-chevron-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="tm-carousel-item">
                        <div className="tm-gallery">
                          <div className="tm-gallery-inner">
                            <div className="thumb">
                              <a href="#">
                                <img className="w-100" src="images/gallery/02.jpg" alt="Image"/>
                              </a>
                            </div>
                            <div className="tm-gallery-content-wrapper">
                              <div className="tm-gallery-content">
                                <div className="tm-gallery-content-inner">
                                  <div className="icons-holder-inner">
                                    <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                      <a className="lightgallery-trigger styled-icons-item" data-lightbox="image" href="images/gallery/02.jpg"><i className="fas fa-chevron-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    

                      <div className="tm-carousel-item">
                        <div className="tm-gallery">
                          <div className="tm-gallery-inner">
                            <div className="thumb">
                              <a href="#">
                                <img className="w-100" src="images/gallery/03.jpg" alt="Image"/>
                              </a>
                            </div>
                            <div className="tm-gallery-content-wrapper">
                              <div className="tm-gallery-content">
                                <div className="tm-gallery-content-inner">
                                  <div className="icons-holder-inner">
                                    <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                      <a className="lightgallery-trigger styled-icons-item" data-lightbox="image" href="images/gallery/03.jpg"><i className="fas fa-chevron-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="tm-carousel-item">
                        <div className="tm-gallery">
                          <div className="tm-gallery-inner">
                            <div className="thumb">
                              <a href="#">
                                <img className="w-100" src="images/gallery/04.jpg" alt="Image"/>
                              </a>
                            </div>
                            <div className="tm-gallery-content-wrapper">
                              <div className="tm-gallery-content">
                                <div className="tm-gallery-content-inner">
                                  <div className="icons-holder-inner">
                                    <div className="styled-icons icon-dark icon-circled icon-theme-colored1">
                                      <a className="lightgallery-trigger styled-icons-item" data-lightbox="image" href="images/gallery/04.jpg"><i className="fas fa-chevron-right"></i></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <section className="bg-theme-colored1">
              <div className="section-content">
                <div className="container pt-110 pb-110">
                  <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="d-block d-lg-flex align-items-center">
                        <div className="d-block d-lg-flex align-items-center justify-content-center mr-30 mr-md--0" data-tm-width="80" data-tm-height="72">
                          <img src="images/icons/d01.png" alt="Icon"/>
                        </div>
                        <h2 className="text-white font-weight-900 mt--0 mb--0 mt-md-20">How To Write A  <br/>Successful Petition</h2>
                      </div>
                    </div>
                    <div className="col-lg-3 text-left text-lg-right mt-md-20">
                      <Link to="/guide-page" className="btn btn-lg btn-theme-colored2 btn-flat">Read More</Link>
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

export default LandingPage;