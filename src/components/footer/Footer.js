import React, {Fragment} from "react";
import '../style.css';
import India from '../images/india1.png'; 

function Our_expertise(){
    return(
      <Fragment>
        <section class="dark-bg pt-2">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={India} className="img-fliud" alt="whoarewe" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column flex-wrap justify-content-center mb-5">
                <h4 class="text-light footer-h4-heading">If you would like to discuss your next construction project or for future employment queries, please do not hesitate to send us an email at <a href="mailto:enquiry@ivory.com" class="text-light">enquiry@ivory.com</a></h4>
                <div class="mt-5">
                    <h3 class="footer-h3-heading">FIND US</h3>
                    <h4 class="text-light footer-h4-heading">8899 Wandering Way<br />Ooltewah, Tennessee(TN), 37363</h4>
                </div>
                <div class="mt-5">
                    <h3 class="footer-h3-heading">CALL</h3>
                    <h4 class="text-light footer-h4-heading">+91 91355 11225</h4>
                </div>
                <div class="mt-5">
                    <h3 class="footer-h3-heading">CONNECT</h3>
                    <div class="d-flex flex-row social-icons-footer">
                        <h4 class="text-light footer-h4-heading"><i class="fi-snsuxl-facebook"></i></h4>
                        <h4 class="text-light footer-h4-heading"><i class="fi-xnsuxl-instagram"></i></h4>
                        <h4 class="text-light footer-h4-heading"><i class="fi-snsuxl-linkedin"></i></h4>
                    </div>
                </div>
              </div>
              {/* <div className="our-expertise-border-backround"></div> */}
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default Our_expertise;