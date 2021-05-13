import React, {Fragment} from "react";
import '../style.css';
import India from '../images/india11.png'; 
import { motion } from 'framer-motion';

function Our_expertise(){
    return(
      <Fragment>
        <section id="footer" className="dark-bg pt-2">
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay:3}}
          className="container">
            <div className="row mt-5">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={India} className="img-fliud" alt="whoarewe" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column flex-wrap justify-content-center mb-5">
                <h4 className="text-light footer-h4-heading">If you would like to discuss your next construction project or for future employment queries, please do not hesitate to send us an email at <a href="mailto:enquiry@ivory.com" className="text-light">enquiry@ivory.com</a></h4>
                <div className="mt-5">
                    <h3 className="footer-h3-heading">FIND US</h3>
                    <h4 className="footer-h4-heading"><span className="text-light ">8899 Wandering Way<br />Ooltewah, Tennessee(TN), 37363</span></h4>
                </div>
                <div className="mt-5">
                    <h3 className="footer-h3-heading">CALL</h3>
                    <h4 className="text-light footer-h4-heading"><span className="text-light ">+91 91355 11225</span></h4>
                </div>
                <div className="mt-5">
                    <h3 className="footer-h3-heading">CONNECT</h3>
                    <div className="d-flex flex-row social-icons-footer">
                        <h4 className="text-light footer-h4-heading"><i className="text-light fi-snsuxl-facebook"></i></h4>
                        <h4 className="text-light footer-h4-heading"><i className="text-light fi-xnsuxl-instagram"></i></h4>
                        <h4 className="text-light footer-h4-heading"><i className="text-light fi-snsuxl-linkedin"></i></h4>
                    </div>
                </div>
              </div>
              {/* <div className="our-expertise-border-backround"></div> */}
            </div>
          </motion.div>
        </section>
      </Fragment>
    );
}

export default Our_expertise;