import iLogo from "../assets/ogive logo.png";
// import iFacebook from "../assets/facebook.04d54a32.png";
// import iInstagram from "../assets/instagram.0634a5ba.png";
// import iTwitter from "../assets/twitter-256.46571576.png";
// import iLinkedin from "../assets/linkedin.38b43a47.png";

import "./Css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4 className="text-left">Find us</h4>

                  <p className="text-left cs-w-80 " >
                    Ogive Technology, Plot Num 205, Suncity, Bandlaguda,
                    Hyderabad, Telangana, India-500086
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4 className="text-left">Call us</h4>
                  <Link className="nav-link pl-0" to="tel:+91-40-29702989">
                  <p className="text-left text-dark" >+91-40-29702989</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4 className="text-left">Mail us</h4>
                  <Link
                    className="nav-link pl-0"
                    to="mailto:info@ogivetechnology.com"
                  >
                    <p className="text-left text-dark" >info@ogivetechnology.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="index.html">
                    <img src={iLogo} className="img-fluid" alt="logo" />
                  </Link>
                </div>
                <div className="footer-text text-left">
                  <p>
                    Ogive Technology is a product engineering services company
                    helping clients in realising their ideas in Embedded
                    Systems, Internet of Things, BlockChain, Artificial
                    Intelligence, Digital Twining, and Immersive Technologies.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className="text-left">Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                  <li>
                    <Link to="services">Our Services</Link>
                  </li>
                  <li>
                    <Link to="industries">Industries</Link>
                  </li>
                  <li>
                    <Link to="contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link to="about">About us</Link>
                  </li>
                  <li>
                    <Link to="blog">Our Blog</Link>
                  </li>
                  <li>
                    <Link to="about">Expert Team</Link>
                  </li>
                  <li>
                    <Link to="contct-us">Contact us</Link>
                  </li>
                  <li>
                    <Link to="blog">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className="text-left">Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p className="text-left">
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area" id="down">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-12 col-lg-12 mt-1 text-center text-lg-left">
              <div className="copyright-text text-center">
                <p className="">
                  Copyright &copy; 2020-2024 Ogive Technology, all rights reserved.
                </p>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a to="">Home</a>
                  </li>
                  <li>
                    <a to="">Terms</a>
                  </li>
                  <li>
                    <a to="">Privacy</a>
                  </li>
                  <li>
                    <a to="">Policy</a>
                  </li>
                  <li>
                    <a to="">Contact</a>
                  </li>
                </ul> 
                 <div className="footer-social-icon d-none"  >
                   <span>Follow us</span>
                  <Link to="https://www.facebook.com/Ogive-Technology-485725495104947/">
                    <img src={iFacebook} className="facebook-bg " alt="facebook" width={30} />
                  </Link>
                  <Link to="https://twitter.com/OgiveTechnology">
                    <img src={iTwitter} className="twitter-bg " alt="Twitter" width={30} />
                  </Link>
                  <Link to="https://www.instagram.com/ogivetech/">
                    <img src={iInstagram} className="google-bg " alt="Instagram" width={30} />
                  </Link>
                  <Link to="https://www.linkedin.com/company-beta/13356002/">
                    <img src={iLinkedin} className="twitter-bg " alt="Linkedin" width={30} />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
