import React from 'react'
import '../css/common-css/bootstrap.css'
import '../css/common-css/fluidbox.min.css'
import '../css/common-css/ionicons.css'
import '../css/01-cv-portfolio/css/responsive.css'
import '../css/01-cv-portfolio/css/styles.css'

function About() {
    return(
        <section className="about-section section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
					    <div className="heading">
						    <h3><b>About me</b></h3>
						    <h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
					    </div>
				    </div>
                    <div className="col-sm-8">
					    <p className="margin-b-50">I am an energetic, ambitious person who has developed a mature and 
						responsible approach to any task that I undertake, or situation that I am presented with. As a graduate
						 with three years’ experience in management, I am excellent in working with others to achieve a certain 
						 objective on time and with excellence. 
						In my previous role, I improved the performance, operations and productivity of my team by 35%..</p>
				    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
