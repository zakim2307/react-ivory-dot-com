import React, {Fragment} from "react";
import '../style.css';
import whoweare from '../images/whoweare.jpg'; 
import {motion} from 'framer-motion';

function Header(){
    return(
      <Fragment>
        <div>
          <div class="container mt-5 pt-5">
            <div class="row d-flex flex-row justify-content-space-between">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h6 data-aos="zoom-in-right" className="whoweare-h6-heading whoweare">
                  WHO WE ARE
                </h6>
                <h2 data-aos="zoom-in-right" className="whoweare-h2-heading">
                  CONSTRUCTION FIRM
                </h2>
                <hr data-aos="zoom-in-right" class="whoweare-hr-tag" />
                <motion.div data-aos="zoom-in-up" className="whoweare">

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
                <h6 className="whoweare-h6-heading-second">FIND OUT MORE ABOUT IVORY GROUPS</h6>
              </div>
              <div data-aos="fade" class="col-lg-6 col-md-12 col-sm-12">
                <img src={whoweare} className="img-fliud max-width-img" alt="whoarewe" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Header;