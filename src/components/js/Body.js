import React from 'react'
import '../css/common-css/bootstrap.css'
import '../css/common-css/fluidbox.min.css'
import '../css/common-css/ionicons.css'
import '../css/01-cv-portfolio/css/responsive.css'
import '../css/01-cv-portfolio/css/styles.css'

function Body() {
    return(
          <section className="intro-section">
              <div className="heading-wrapper">
                  <div style={{marginTop: "100px"}} className="row">
                      <div className="col-md-1 col-lg-2"></div>
                      <div className="col-md-10 col-lg-8">
                          <div className="intro">
                              <div className="profile-img">
                                  <img src={require("../images/DSC_0200.JPG")} alt=""/>
                              </div>
                            <h2><b>Sutanto Adi Nugroho</b></h2>
                            <h4 className="font-yellow">Still Working</h4>
                            <ul className="information margin-tb-30">
							    <li><b>BORN : </b>January 13, 2001</li>
							    <li><b>EMAIL : </b>adi.nugroho.an836@gmail.com</li>
							    <li><b>MARITAL STATUS : </b>Jomblo</li>
						    </ul>
                             <ul className="social-icons">
							    <li><a href="#"><i className="ion-social-pinterest"></i></a></li>
							    <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
							    <li><a href="#"><i className="ion-social-instagram"></i></a></li>
							    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
							    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
						    </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    );
}

export default Body;