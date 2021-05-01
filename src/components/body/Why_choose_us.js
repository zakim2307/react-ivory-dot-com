import React, {Fragment} from "react";
import '../style.css';
import whychooseus from '../images/whychooseus.png'; 

function Whychooseus(){
    return(
      <Fragment>
        <div>
          <div class="container whoweare mt-5">
            <div class="row d-flex flex-row">
            <div class="col-lg-6 col-md-12 col-sm-12">
                <img src={whychooseus} className="img-fliud max-width-img" alt="whoarewe" />
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 why-choose-us-reverse-order">
                <h6 className="whoweare-h6-heading whoweare">
                  WHY CHOOSE US
                </h6>
                <h2 className="whoweare-h2-heading">
                  OUR SISTER COMPANIES
                </h2>
                <hr class="whoweare-hr-tag" />
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
                <h6 className="whoweare-h6-heading-second">TRUST OUR PROCESS</h6>
              </div>
              
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Whychooseus;