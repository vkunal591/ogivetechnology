import iLogo from "../assets/logo-footer.43e2938c.png";
import iFacebook from "../assets/facebook.04d54a32.png";
import iInstagram from "../assets/instagram.0634a5ba.png";
import iTwitter from "../assets/twitter-256.46571576.png";
import iLinkedin from "../assets/linkedin.38b43a47.png";

import "./Css/footer.css";

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
                  <h4>Find us</h4>

                  <span>
                    Ogive Technology, Plot Num 205, Suncity, Bandlaguda,
                    Hyderabad, Telangana, India-500086
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <a className="nav-link" href="tel:+91-40-29702989">
                    <span>+91-40-29702989</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <a
                    className="nav-link "
                    href="mailto:info@ogivetechnology.com"
                  >
                    <span>info@ogivetechnology.com</span>
                  </a>
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
                  <a href="index.html">
                    <img src={iLogo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Ogive Technology is a product engineering services company
                    helping clients in realising their ideas in Embedded
                    Systems, Internet of Things, BlockChain, Artificial
                    Intelligence, Digital Twining, and Immersive Technologies.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/Ogive-Technology-485725495104947/">
                    <img src={iFacebook} className="facebook-bg rounded" alt="facebook" width={30} />
                  </a>
                  <a href="https://twitter.com/OgiveTechnology">
                    <img src={iTwitter} className="twitter-bg rounded" alt="Twitter" width={30} />
                  </a>
                  <a href="https://www.instagram.com/ogivetech/">
                    <img src={iInstagram} className="google-bg rounded" alt="Instagram" width={30} />
                  </a>
                  <a href="https://www.linkedin.com/company-beta/13356002/">
                    <img src={iLinkedin} className="twitter-bg rounded" alt="Linkedin" width={30} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Indoustries</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane">{">"}</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2020 Ogive Technology, all rights reserved.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
