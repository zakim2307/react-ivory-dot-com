import { Fragment, useState, useEffect, useCallback } from "react";
import '../style.css';
import logo from '../images/logo-ivory.png';

function Navbar() {
    const openNav = useCallback(() => { 
        document.getElementById("mySidebar").style.width = "450px";
        document.getElementById("main").style.marginLeft = "0px";
    });

    const closeNav = useCallback(() => { 
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    });

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        })
    }, [])
        
    return(
        <Fragment>
            <section id="banner" class="demo">
            <div className="container-fluid">
                <div className="middle">
                </div>    
            </div>
            <nav className={`navbar navbar-expand-md sticky-bar `}>
            <div className="order-1 order-md-0 d-flex flex-row">
            <ul className="navbar-nav mr-auto d-flex flex-row">
            <li className="nav-item">
                <button id="main" className="openbtn" onClick={openNav}><i class="fi-xnsuxl-three-bars-solid"></i></button> 
            </li>
            <li className="nav-item">
            </li>
        </ul>
                <a className="navbar-brand mr-auto" href="/"><img src={logo} className="img-fluid" alt="APP LOGO" /></a>
    </div>
</nav>
<div id="mySidebar" className="sidebar">
                <a className="closebtn" style={{color:'#c3996c'}} onClick={closeNav}>X</a>
                <a href="#">WHO WE ARE</a>
                <a href="#">WHY CHOOSE US</a>
                <a href="#">OUR EXPERTISE</a>
                <a href="#">CONTACT US</a>
                <a href="#">PROJECTS</a>
                <div className="container">
                <hr className="hr-sidebar-tag" />
                </div>
                <div className="social-sidebar-container">
                    <a href="https://facebook.com"><h4 class="sidebar-h4-heading"><i class="fi-snsuxl-facebook"></i></h4>
                    </a>
                    <a href="https://instagram.com">
                        <h4 class="sidebar-h4-heading"><i class="fi-xnsuxl-instagram"></i></h4>
                        </a>
                    <a href="https://linkedin.com">
                        <h4 class="sidebar-h4-heading"><i class="fi-snsuxl-linkedin"></i></h4>
                    </a>
                    <a href="https://linkedin.com">
                        <h4 class="sidebar-h4-heading"><i class="fi-xnsuxl-map-marker-solid"></i></h4>
                    </a>
                </div>
                <div class="contact-sidebar">
                    <h4 class="contact-sidebar-h4">
                        +91 90355 11225
                    </h4>
                    <h4 class="contact-sidebar-h4">
                        enquiry@ivory.com
                    </h4>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-offset-lg-2 col-lg-9 col-md-12 col-sm-12 d-flex">
                        <h1 class="large-font-size">We Create Homes</h1>
                    </div>
                </div>
            </div>
            <section id="section02" class="demo">
                <a class="scroll-anchor-tag" href="#section03">SCROLL DOWN<br /> TO EXPLORE<span></span></a>
            </section>
          
        </section>
        </Fragment>
    )
}

export default Navbar;