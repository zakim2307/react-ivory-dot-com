import React, {Fragment} from "react";
import '../style.css';
import whychooseus from '../images/whychooseus.png'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Whychooseus(){
    return(
      <Fragment>
        <div id="whychooseus" className="">
          <div className="container whoweare">
            <div className="row d-flex flex-row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={whychooseus} className="img-fliud min-width-100" alt="whoarewe" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 why-choose-us-reverse-order">
              <div className="reveal-holder">
                <div className="reveal-block" data-aos="reveal-right">
                </div>
                <h6 className="whoweare-h6-heading whoweare">
                  WHY CHOOSE US
                </h6>
                <h2 className="whoweare-h2-heading">
                  OUR SISTER COMPANIES
                </h2>
                
                </div>
                <hr data-aos="zoom-out-right" data-aos-delay="200" className="whoweare-hr-tag" />
                <div className="whoweare">

                <p className="whoweare-paragraph">
                  We work in collaboration with our sister companies for seemless construction processes like digging up sites, transportation of constructionmaterials, use of heavy construction machinery, plumbing, tiling etc without any delays.
                </p>
                <p className="whoweare-paragraph">
                  All the work can be done under our company without any third party involment.
                </p>
                <p className="whoweare-paragraph">
                  This reduces the cost of construction drastically and also reduces the time of construction. Unnecessery delays are removed by removing third party involvment in the processes.
                </p>
                <p className="whoweare-paragraph">
                  We work as a team to make our construction process seemless, fast and reliable for our customers.
                </p>
                </div>
                <div className="">
                  <h6 className="wrapper"><AnchorLink className="whoweare-h6-heading-second" href="#ourexpertise" style={{padding: 9 + 'px'}}><span>Trust Our Process</span></AnchorLink></h6>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Whychooseus;