import React, {Fragment} from "react";
import '../style.css';
import { motion } from 'framer-motion';
import whoweare from '../images/whoweare.jpg'; 
import our_expertise_1 from '../images/our_expertise_1.jpg'; 
import our_expertise_2 from '../images/our_expertise_2.jpg'; 

function Our_expertise(){
    return(
      <Fragment>
        <section>
          <div className="container whoweare">
            <div className="row d-flex flex-row">
              <div data-aos="fade-up" className="col-lg-12 col-md-12 col-sm-12">
                <h2 className="whoweare-h2-heading">
                  OUR EXPERTISE
                </h2>
                <hr className="whoweare-hr-tag" />
              </div>
            </div>
            <div className="row mt-5 position-relative">
              <div className="our-expertise-border-backround"></div>
              <motion.div 
              whileHover={{ scale: 2, x:200 + 'px', zIndex: 999, background: 100 + '%' }} 
              data-aos="fade-right" className="col-lg-4 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={our_expertise_2} className="img-fliud width-img-less" alt="whoarewe" />
                <div class="our-expertise">Residential Constructions</div>
              </motion.div>
              <div data-aos="fade-down" className="col-lg-4 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={our_expertise_1} className="img-fliud width-img-less" alt="whoarewe" />
                <div class="our-expertise">Industrial Constructions</div>
              </div>
              <div data-aos="fade-left" className="col-lg-4 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={whoweare} className="img-fliud width-img-less" alt="whoarewe" />
                <div class="our-expertise">Institutional Constructions</div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default Our_expertise;