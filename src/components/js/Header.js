import React from 'react';
import '../css/common-css/bootstrap.css'
import '../css/common-css/fluidbox.min.css'
import '../css/common-css/ionicons.css'
import '../css/01-cv-portfolio/css/styles.css'
import '../css/01-cv-portfolio/css/responsive.css'

import Body from './Body'

function App() {
  return (
    <div>
      <header>
      <div className="container">
      <div className="heading-wrapper">
        <div className="row">
          <div className= "col-sm-6 col-md-6 col-lg-4">
            <div className="info">
              <i className="icon ion-ios-location-outline"/>
              <div className="right-area">
                <h5>3076 Pacitan Jawa Timur</h5>
                <h5>Adi, Arjosari 63581</h5>
              </div>
            </div>
          </div>

          <div className= "col-sm-6 col-md-6 col-lg-4">
            <div className="info">
              <i className="icon ion-ios-telephone-outline"/>
              <div className="right-area">
                <h5>337-4139538</h5>
                <h6>MIN - FRI,8AM - 7PM</h6>
              </div>
            </div>
          </div>

          <div className= "col-sm-6 col-md-6 col-lg-4">
            <div className="info">
              <i className="icon ion-ios-chatboxes-outline"/>
              <div className="right-area">
                <h5>adi.an836@gmail.com</h5>
                <h6>REPLY IN 24 HOURS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </header>
    <Body/>
    </div>
  );
}


export default App;
