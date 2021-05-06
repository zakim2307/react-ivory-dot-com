import React, {Fragment, useState, useEffect } from "react";
import '../style.css';
import emailjs, { init } from 'emailjs-com';
import { Parallax, Background } from 'react-parallax';


//parallax images

import bg_image from '../images/build.jpg';

// parallax images

function Contact(props){
    init("user_vZW3dhCovmNnWwjrhlYPa")
    const [offsetY, setOffsetY] = useState(0);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSCroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
      window.addEventListener('scroll', handleSCroll);

      return () => window.removeEventListener('scroll', handleSCroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`'name' ${name}, 'phone' ${phone}, 'email' ${email}, 'message' ${message}`);
        if (!email) {
          return;
        }

        const templateParams = {
          from_name: `${name} + ${email}`,
          to_name: 'zaki.mantiqh@gmail.com',
          message: `${message}`
        };

        emailjs.send("service_w3jgynm", "template_2m6wkmt", templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert("Your Message sent successfully")
          resetForm();
       }, function(error) {
          console.log('FAILED...', error);
       });
        
    };
    const resetForm = () => {
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
    }

    return(
      <Fragment>
        {/* style={{ position: `fixed`,transform: `translateY( ${ offsetY * 0 }px )`}} */}
        <section id="contactus">
         
        <Parallax bgImage={bg_image} strength={500}>
          <div class="paralax-dev" style={{ height: 400+'px'}}>
          <div className="col-sm-12 col-md-12 col-lg-12 my-auto text-center" style={{paddingTop: 80 + 'px',paddingBottom: 80 + 'px'}}>
                        <h1 className="text-light">
                            GET IN TOUCH WITH US<br />
                            ABOUT YOUR NEXT<br />
                            CONSTRUCTION<br />
                            PROJECT
                        </h1>
                    </div>
          </div>
        </Parallax>

        <Parallax className="parallax-mobile" bgImage={bg_image} strength={500} style={{backgroundSize: 'cover'}}>
          <div className="paralax-dev-sm" style={{ height: 'auto'}}>
          <div className="col-sm-12 col-md-12 col-lg-12 my-auto text-center" style={{paddingTop: 80 + 'px',paddingBottom: 80 + 'px'}}>
                        <h4 className="text-light">
                            GET IN TOUCH WITH US<br />
                            ABOUT YOUR NEXT<br />
                            CONSTRUCTION<br />
                            PROJECT
                        </h4>
                    </div>
          </div>
        </Parallax>
          
          </section>

          {/* <section class="paralax-dev-sm bg-background-contact">
          <div class="paralax-dev-sm" style={{ height: 400+'px'}}>
          <div className="col-sm-12 col-md-12 col-lg-12 my-auto text-center" style={{paddingTop: 80 + 'px',paddingBottom: 80 + 'px'}}>
                        <h1 className="text-light">
                            GET IN TOUCH WITH US<br />
                            ABOUT YOUR NEXT<br />
                            CONSTRUCTION<br />
                            PROJECT
                        </h1>
                    </div>
          </div>
          </section> */}

          <div className="container mt-5 pt-5">
            <div className="row d-flex flex-row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2 className="whoweare-h2-heading">
                  CONTACT US
                </h2>
                <hr className="whoweare-hr-tag" />
                <h6 className="whoweare-h2-heading contact-minus-margin ml-5">
                  Little About You
                </h6>
              </div>
            </div>
            <div className="row ml-5 mt-5 d-flex flex-row contact-minus-margin">
              <div class="col-sm-12 col-md-12 col-lg-12">
                  <form onSubmit={handleSubmit} style={{width:100 + "%"}}>
                      <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                          <input className="styled-form-component form-control" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
                      </div>
                      <div className="d-flex flex-row flex-wrap justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                            <input className="styled-form-component form-control" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                            <input className="styled-form-component form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 mr-5 mb-5">
                          <textarea className="styled-form-component form-control" id="w3review" value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter A Message" name="message" rows="4" cols="50"></textarea>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-9">
                          <button type="submit" className="btn btn-primary-send form-control submit">Send</button>
                      </div>
                  </form>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6">
                
              </div>
              {/* <div className="our-expertise-border-backround"></div> */}
            </div>
          </div>
      </Fragment>
    );
}

export default Contact;