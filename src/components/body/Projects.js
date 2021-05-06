import React, {Fragment} from "react";
import { withRouter, Link } from 'react-router-dom';
import '../style.css';
import BlockRevealAnimation from 'react-block-reveal-animation';
import _1 from '../images/_1.jpg'; 
import _2 from '../images/_2.jpg'; 
import _3 from '../images/_3.jpg'; 
import _4 from '../images/_4.jpg'; 
import _5 from '../images/_5.jpg'; 
import _6 from '../images/_6.jpg'; 
import _7 from '../images/_7.jpg'; 
import _8 from '../images/_8.jpg'; 
import { motion } from 'framer-motion';

function Projects(){
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5
      },
      exit: {
        x: -100 + 'vw',
        transition: { ease: 'easeInOut'}
      }
    }
  }

    return(
      <Fragment>
        <section className="mt-5" id="projects">
          <div className="container">
            <div className="row d-flex flex-row">
              <div className="project-section-header col-lg-12 col-md-12 col-sm-12">
              {/* <BlockRevealAnimation className="myCustomClassName" delay={2} duration={1} color="#ff0000"> */}
              <motion.div
              class="reveal-holder">
                <motion.div 
                initial={{width: 0 + "%", opacity:1}}
                animate={{width: 100 +"%", opacity:1}} 
                class="reveal-block" 
                data-aos="reveal-right">
                </motion.div>
                <h2 className="whoweare-h2-heading">
                  PROJECTS
                </h2>
                </motion.div>
                {/* </BlockRevealAnimation> */}
                <hr className="whoweare-hr-tag" />
              </div>
              </div>
              </div>
              <div className="container project-section">
              <div className="project-section row mt-5 d-none d-lg-flex d-md-flex">
                  
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5 ">
                <img src={_1} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_2} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_3} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
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
              <div className="project-section row mt-5 d-none d-lg-flex d-md-flex d-sm-none">         
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_5} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_6} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_7} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
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
            <div className="row mt-5 d-sm-flex d-lg-none d-md-none">         
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_5} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_6} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">
                <img src={_7} className="img-fliud projects_images" alt="whoarewe" />
                <div class="Projects">
                    <span>PROJECT NAME</span>
                <hr className="whoweare-hr-tag-2" />

                    <h6 className="project-header">
                        3670 W Holland Lake Rd<br />Sidney, Michigan(MI) 48885 
                    </h6>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-3 col-md-12 col-sm-12 d-flex flex-wrap mb-5">                
              <motion.div
                    varients = {containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <h6 className="project-page">
                        <br /><Link to="/projects">
                          <span className="project-page">VIEW ALL PROJECTS</span> 
                          </Link>
                    </h6>
                    </motion.div>
              </div>
              {/* <div className="our-expertise-border-backround"></div> */}
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default withRouter(Projects);