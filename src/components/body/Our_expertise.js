import React, {Fragment, useState, useEffect } from "react";
import '../style.css';
import BlockRevealAnimation from 'react-block-reveal-animation';
import VerticalCarousel from './VerticalCarousel.js';
import Industrial from './Industrial';
import Institution from './Institution';
import ScrollReveal from 'scrollreveal';
import { motion } from 'framer-motion';
import indus from '../images/indus.png'; 
import resid from '../images/resid.png'; 
import insti from '../images/insti.png'; 
import MobileCarousel from './MobileCarousel';



// residential 
import villa from '../images/_4.jpg';
import res1 from '../images/res1.jpg';
import res2 from '../images/res5.jpg';
import res3 from '../images/res3.jpg';
// residential

// Industrial 
import ind1 from '../images/ind1.jpg';
import ind2 from '../images/ind2.jpg';
import ind3 from '../images/ind4.jpg';
import ind4 from '../images/ind3.jpg';
// Industrial

// residential 
import ins2 from '../images/ins1.jpg';
import ins1 from '../images/ins2.jpg';
import ins3 from '../images/ins3.jpg';
import ins5 from '../images/ins5.jpg';
// residential

function Our_expertise(){

  useEffect(() => {
    ScrollReveal().reveal('.myCustomClassName', BlockRevealAnimation);
  })
  const [inHover, setHover] = useState(false);
  const [inHover1, setHover1] = useState(false);
  const [inHover2, setHover2] = useState(false);

  // Our_expertise.handleClickOutside = () => setIsShownToggle(false);
  // Our_expertise.handleMouseLeave = () => setIsShownToggle(false);
  

  const data = {
    "leadingText": "Residential",
    "slides": [
      {
        "introline": "Group housing",
        "id": "dogs",
        "content": {
          "image": `${res1}`,
          "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
  
      {
        "introline": "Bungalows",
        "id": "lizards",
        "content": {
          "image": `${res2}`,
          "copy": "Lizards ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "Villas",
        "id": "villas",
        "content": {
          "image": `${villa}`,
          "copy": "Snakes ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "Apartments",
        "id": "cats",
        "content": {
          "image": `${res3}`,
          "copy": "Cats ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      } 
    ]
  }

  const industrial = {
    "leadingText": "Industrial",
    "slides": [
      {
        "introline": "Factories",
        "id": "dogs",
        "content": {
          "image": `${ind1}`,
          "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
  
      {
        "introline": "Industry",
        "id": "lizards",
        "content": {
          "image": `${ind2}`,
          "copy": "Lizards ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "Power",
        "id": "villas",
        "content": {
          "image": `${ind3}`,
          "copy": "Snakes ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "Chemical Industry",
        "id": "cats",
        "content": {
          "image": `${ind4}`,
          "copy": "Cats ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      } 
    ]
  }

  const institutional = {
    "leadingText": "Industrial",
    "slides": [
      {
        "introline": "Institutional",
        "id": "dogs",
        "content": {
          "image": `${ins1}`,
          "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
  
      {
        "introline": "Bungalows",
        "id": "lizards",
        "content": {
          "image": `${ins2}`,
          "copy": "Lizards ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "Villas",
        "id": "villas",
        "content": {
          "image": `${ins3}`,
          "copy": "Snakes ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
      {
        "introline": "Apartments",
        "id": "cats",
        "content": {
          "image": `${ins5}`,
          "copy": "Cats ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      } 
    ]
  }
    return(
      <Fragment>
        <section className="mt-5" id="ourexpertise">
          <div className="container whoweare">
            <div className="row d-flex flex-row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div class="reveal-holder">
                <div class="reveal-block" data-aos="reveal-right"></div>
                <h2 className="heading whoweare-h2-heading">
                  OUR EXPERTISE
                </h2>
                </div>
                <hr className="whoweare-hr-tag" />
              </div>
            </div>
            <div className="row mt-5 pt-3 position-relative">
              <div className="our-expertise-border-backround d-none d-lg-block"></div>
                <div
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                className="col-lg-4 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                  <motion.img src={resid} className="img-fliud width-img-less" alt="whoarewe" />
                  <div class="our-expertise">Residential Constructions</div>
                  {inHover &&
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="sideStickBar">
                      Residentual <br />Construction
                    </motion.div>
                  }
                {inHover && <VerticalCarousel onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="" data={data.slides} leadingText={data.leadingText} />}
                </div>
              <div
                onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}
               className="col-lg-4 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={indus} className="img-fliud width-img-less" alt="whoarewe" />
                <div class="our-expertise">Industrial Constructions</div>
                {inHover1 &&
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="sideStickBar1">
                      industrial <br />Construction
                    </motion.div>
                  }
                {inHover1 && <Industrial className="" data={industrial.slides} leadingText={industrial.leadingText} />}
              </div>
              <div
                onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}
              className="col-lg-4 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                <img src={insti} className="img-fliud width-img-less" alt="whoarewe" />
                <div class="our-expertise">Institutional Constructions</div>
                {inHover2 &&
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="sideStickBar2">
                      Institutional <br />Construction
                    </motion.div>
                  }
                {inHover2 && <Institution className="" data={institutional.slides} leadingText={institutional.leadingText} />}
              </div>
            </div>
            
          </div>

          <div className="row position-relative-sm">
<div>

<div className="col-lg-12 col-sm-12 col-md-12">
<h2 className="heading whoweare-h2-heading" style={{padding: 20, marginTop: 20, marginBottom: 20}}>
Institutional<br />
                  Construction
                </h2>
<MobileCarousel className="" data={institutional.slides} leadingText={institutional.leadingText} />
</div>
{/* <hr  /> */}

<div className="col-lg-12 col-sm-12 col-md-12">
<h2 className="heading whoweare-h2-heading" style={{padding: 20, marginTop: 20, marginBottom: 20}}>
                  Residential<br />
                  Construction
                </h2>
<MobileCarousel className="" data={data.slides} leadingText={institutional.leadingText} />
</div>
<hr />

<div className="col-lg-12 col-sm-12 col-md-12">
<h2 className="heading whoweare-h2-heading" style={{padding: 20, marginTop: 20, marginBottom: 20}}>
Industrial<br />
                  Construction
                </h2>
<MobileCarousel className="" data={industrial.slides} leadingText={institutional.leadingText} />
</div>
</div>


{/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
<div className="carousel-item active">
<img className="d-block w-100" src='../images/ins1.jpg' alt="First slide" />
</div>
<div className="carousel-item">
<img className="d-block w-100" src={`${ins2}`} alt="Second slide" />
</div>
<div className="carousel-item">
<img className="d-block w-100" src={`${ins2}`} alt="Third slide" />
</div>
</div>
</div> */}

</div>

        </section>
      </Fragment>
    );
}

export default Our_expertise;
