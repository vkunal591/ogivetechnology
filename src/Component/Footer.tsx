import { FieldValues, useForm } from "react-hook-form";
import { AxiosError, AxiosResponse } from "axios";
import iLogo from "../assets/ogive logo.png";
// import iFacebook from "../assets/facebook.04d54a32.png";
// import iInstagram from "../assets/instagram.0634a5ba.png";
// import iTwitter from "../assets/twitter-256.46571576.png";
// import iLinkedin from "../assets/linkedin.38b43a47.png";

import "./Css/footer.css";
import { Link } from "react-router-dom";
import FormService from "../Services/FormService";
import { IErrorMessageResponse } from "../interfaces/i-authentication";
import { successMessage, errorMessage } from "../utils/fetchResponseMessage";
import { showToast } from "../utils/toast";

export default function Footer() {
  const { register, handleSubmit, resetField } = useForm();
  const subscribe = async (data: FieldValues) => {
    try {
      const payload = {
        email: data?.email
      };
      await FormService.createSubscriber(payload).then((res: AxiosResponse) => {
        const message = successMessage(res.data.details.message);
        showToast({
          message: message,
          type: "success"
        });
        resetField("email");
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

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

                  <p className="text-left cs-w-80 ">
                    Plot no 9, SMR ENCLAVE, NEAR HIMAYAT SAGAR, BANDLAGUDA,
                    HYDERABAD, 500091
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
                    <p className="text-left text-dark">+91-40-29702989</p>
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
                    <p className="text-left text-dark">
                      info@ogivetechnology.com
                    </p>
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
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="products" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="services" className="nav-link">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="industries" className="nav-link">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link to="contact-us" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="about" className="nav-link">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="blog" className="nav-link">
                      Our Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="faq" className="nav-link">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link to="why" className="nav-link">
                      Why Ogive
                    </Link>
                  </li>
                  <li>
                    <Link to="gallery" className="nav-link">Events & Gallery</Link>
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
                  <form onSubmit={handleSubmit(subscribe)}>
                    <input
                      type="text"
                      className="text-black"
                      placeholder="Email Address"
                      {...register("email")}
                    />
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
                <p className="text-white">
                  Copyright &copy; 2020-2024 Ogive Technology, all rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
