import { Fragment, useCallback } from "react";
import '../style.css';
import logo1 from '../images/icons/logo1.png';
import cross1 from '../images/icons/cross1.png';
import hamburger1 from '../images/icons/hamburger1.png';
import arrow1 from '../images/icons/arrow1.png';
import { motion } from 'framer-motion';

function Navbar() {
    const openNav = useCallback(() => { 
        document.getElementById("mySidebar").style.width = "350px";
        document.getElementById("main").style.marginLeft = "0px";
    }, []);

    const closeNav = useCallback(() => { 
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }, []);


    const scrollDown = {
        up: {
            opacity: 0
        },
        down: {
            opacity : 1,
            transition : {
                type: 'tween',
                delay: 1
            }
        }
    }
        
    return(
        <Fragment>
            <section id="banner" className="demo">
            <div className="container-fluid">
                <div className="middle">
                </div>    
            </div>
            <nav id="navbar" className={`navbar navbar-expand-md fixed-top`}>
            <div className="order-1 order-md-0 d-flex flex-row">
            <ul className="navbar-nav mr-auto d-flex flex-row">
            <li className="nav-item">
                <button id="main" className="openbtn" onClick={openNav}>
                    <picture>
                        <source media="(min-width:1920px)" srcSet={`${hamburger1}`}  />
                        <source media="(min-width:768px)" srcSet={`${hamburger1}`}  />
                        <img src={`${hamburger1}`} alt="Flowers" className="img-fluid" />
                    </picture> 
                </button> 
            </li>
            <li className="nav-item">
                <a className={`navbar-brand`}  href="/">
                    <motion.img
                    whileHover={{scale: 1.1}} 
                    src={logo1} className="img-fluid" alt="APP LOGO" />                                
               </a>
            </li>
        </ul>
                
    </div>
</nav>
<div id="mySidebar" className="sidebar">
                <div className="closebtn" style={{color:'#c3996c'}} onClick={closeNav}>
                    <picture>
                        <source media="(min-width:1920px)" srcSet={`${cross1}`}  />
                        <source media="(min-width:768px)" srcSet={`${cross1}`}  />
                        <img src={`${cross1}`} alt="Flowers" className="img-fluid" />
                    </picture> 
                </div>
                <a href="#whoweare" onClick={closeNav}>WHO WE ARE</a>
                <a href="#whychooseus" onClick={closeNav}>WHY CHOOSE US</a>
                <a href="#ourexpertise" onClick={closeNav}>OUR EXPERTISE</a>
                <a href="#contactus" onClick={closeNav}>CONTACT US</a>
                <a href="#projects" onClick={closeNav}>PROJECTS</a>
                <div className="container">
                <hr className="hr-sidebar-tag" />
                </div>
                <div className="social-sidebar-container">
                    <a href="https://facebook.com"><h4 className="sidebar-h4-heading"><i className="fi-snsuxl-facebook"></i></h4>
                    </a>
                    <a href="https://instagram.com">
                        <h4 className="sidebar-h4-heading"><i className="fi-xnsuxl-instagram"></i></h4>
                        </a>
                    <a href="https://linkedin.com">
                        <h4 className="sidebar-h4-heading"><i className="fi-snsuxl-linkedin"></i></h4>
                    </a>
                    <a href="https://linkedin.com">
                        <h4 className="sidebar-h4-heading"><i className="fi-xnsuxl-map-marker-solid"></i></h4>
                    </a>
                </div>
                <div className="contact-sidebar">
                    <h4 className="contact-sidebar-h4">
                        +91 90355 11225
                    </h4>
                    <h4 className="contact-sidebar-h4">
                        enquiry@ivory.com
                    </h4>
                </div>
            </div>
            <div className="container pt-0">
                <div className="row">
                    <div className="position-relative col-offset-lg-2 col-lg-9 col-md-12 col-sm-12 d-flex">
                        <h1 className="large-font-size" style={{alignItems:'center'}}>We Create<br />Homes</h1>
                    </div>
                </div>
            </div>

                <motion.div className="row position-absolute floating-section" 
                    variants={scrollDown}
                    initial="up"
                    animate="down"
                    style={{width:100+'%'}}
                    >
                    <div className="text-arrow-down">
                        <a href="#whoweare">
                            <span>SCROLL DOWN<br />TO EXPLORE</span>
                        </a>
                    </div>
                    <div className="picture-arrow-down">
                        <a href="#whoweare">
                            <picture>
                                    <source media="(min-width:1440px)" srcSet={`${arrow1}`}  />
                                    <source media="(min-width:768px)" srcSet={`${arrow1}`}  />
                                    <img src={`${arrow1}`} alt="Flowers" style={{width:'auto'}} />
                            </picture> 
                        </a>
                    </div>
                </motion.div>
          
            </section>
        </Fragment>
    )
}

export default Navbar;