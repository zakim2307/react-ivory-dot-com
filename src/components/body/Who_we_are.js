import React, {Fragment} from "react";
import '../style.css';
import whoweare from '../images/whoweare.png'; 
import {motion} from 'framer-motion';


function Header(){
   return(
      <Fragment>
        <div id="whoweare">
          <div className="container pt-5">
            <div className="row d-flex flex-row justify-content-space-between">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
              <div className="reveal-holder">
                <div className="reveal-block" data-aos="reveal-right"></div>
                <h6 className="heading whoweare-h6-heading">
                  WHO WE ARE
                </h6>
                <h2 className="heading whoweare-h2-heading">
                  CONSTRUCTION FIRM
                </h2>
                </div>
                <hr data-aos="zoom-out-right" data-aos-delay="200" className="whoweare-hr-tag" />
                <motion.div className="whoweare">

                <p className="whoweare-paragraph">
                  As a fast growing, full-service Construction Firm, we are dedicated to delivering the highest quality project, built on time and within budget.
                </p>
                <p className="whoweare-paragraph">
                  Our Mission: We deliver projects and services exceeding customer's expectations, while adopting practices and methods that protects the environment.
                </p>
                <p className="whoweare-paragraph">
                  Our Vision: Our core value is to work with full integrity, complete honesty and fairness. Delivering with excellence through latest technology, innovation and practices.
                </p>
                <p className="whoweare-paragraph">
                  We pride ourselves in the great working relationships we build with our partners and clients, who appreciate the ability for direct contact throughout this family run business.
                </p>
                </motion.div>
                <div>
                  <h6 className=""><a className="whoweare-h6-heading-second" href="#whychooseus"><span>FIND OUT MORE ABOUT IVORY GROUPS</span></a></h6>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={whoweare} className="img-fliud max-width-img" alt="whoarewe" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Header;