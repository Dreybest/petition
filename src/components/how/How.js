import { Link } from '@reach/router'
import React from 'react'

const How = () => {
    return (
        <>
         <section className="bg-theme-colored1">
          <div className="section-content">
            <div className="container pt-110 pb-110">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="d-block d-lg-flex align-items-center">
                    <div className="d-block d-lg-flex align-items-center justify-content-center mr-30 mr-md--0" data-tm-width="80" data-tm-height="72">
                      <img src="images/icons/d01.png" alt="Icon" />
                    </div>
                    <h2 className="text-white font-weight-900 mt--0 mb--0 mt-md-20">How To Write A  <br />Successful Petition</h2>
                  </div>
                </div>
                <div className="col-lg-3 text-left text-lg-right mt-md-20">
                  <Link to="/guide-page" className="btn btn-lg btn-theme-colored2 btn-flat">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        </>
    )
}

export default How
