import React, {Fragment} from "react";
import '../style.css';
import whoweare from '../images/whoweare.jpg'; 
import _1 from '../images/_1.jpg'; 
import _2 from '../images/_2.jpg'; 
import _3 from '../images/_3.jpg'; 
import _4 from '../images/_4.jpg'; 
import _5 from '../images/_5.jpg'; 
import _6 from '../images/_6.jpg'; 
import _7 from '../images/_7.jpg'; 
import _8 from '../images/_8.jpg'; 

function Projects(){
    return(
      <Fragment>
        <section>
          <div className="container-fluid whoweare">
            <div className="row d-flex flex-row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2 className="whoweare-h2-heading">
                  PROJECTS
                </h2>
                <hr className="whoweare-hr-tag" />
              </div>
              </div>
              <div className="row mt-5">
                  
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_1} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_2} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_3} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_4} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              </div>
              <div className="row mt-5">
                  
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_5} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_6} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_7} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap">
                <img src={_8} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              {/* <div className="our-expertise-border-backround"></div> */}
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default Projects;