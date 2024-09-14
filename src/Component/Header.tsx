import "./Css/header.css";
import "./Css/home.css";
import logo from "../assets/ogive logo.png";
// import iHome from "../assets/images/home.png";
// import iIndustry from "../assets/images/infrastructure.png";
// import iBlog from "../assets/images/blogger.png";
// import iContact from "../assets/images/Contact.png";
// import iProducts from "../assets/images/product.png";
// import iService from "../assets/images/service.png";
// import iAbout from "../assets/images/aboutus.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState("");
  const [industryShow, setIndustryShow] = useState("d-none");
  const [aboutShow, setaboutShow] = useState("d-none");
  const showNav = () => {
    if (show === "show") {
      setShow("");
    } else {
      setShow("show");
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    const mybutton: HTMLElement | null = document.getElementById("goTop");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (mybutton) mybutton.style.display = "block";
    } else {
      if (mybutton) mybutton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <header className="theme-dark cs-primaryBg">
      <nav
        className="navbar fixed-top pt-2 navbar-nav-scroll navbar-expand-lg navbar-light bg-white cs-primaryBg mobile-navbar"
        style={{ borderBottom: "1px solid red" }}
      >
        <div className="container-fluid px-2">
          <Link className="navbar-brand ml-5 py-0" to="/">
            <img src={logo} className="nav-logo" alt="ogive" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            // data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse pt-2 ${show}`} id="">
            <ul className="navbar-nav nav-animation mobile-nav ms-auto justify-content-evenly mb-2 cs-w-60 mb-lg-0">
              <li
                className="nav-item"
                onClick={() => {
                  showNav();
                  topFunction();
                }}
              >
                <Link
                  className="nav-link cs-primaryText"
                  to="services?66d743de2bf7a8226072911c"
                >
                  {/* <img className="d-block m-auto nav-icon" src={iService} /> */}
                  Services
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  showNav();
                  topFunction();
                }}
              >
                <Link
                  className="nav-link cs-primaryText"
                  to="products?66d743bd2bf7a82260729116"
                >
                  {/* <img className="d-block m-auto nav-icon" src={iProducts} /> */}
                  Products
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  showNav();
                  topFunction();
                }}
                onMouseEnter={() => {
                  setIndustryShow("d-block");
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIndustryShow("d-none");
                  }, 2000);
                }}
              >
                <Link
                  className="nav-link cs-primaryText"
                  to="Industries?66d7447c2bf7a82260729122"
                >
                  {/* <img className="d-block m-auto nav-icon" src={iIndustry} /> */}
                  Industries
                </Link>
              </li>
              <li
                className="nav-item about"
                onClick={() => {
                  showNav();
                  topFunction();
                }}
                onMouseEnter={() => {
                  setaboutShow("d-block");
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setaboutShow("d-none");
                  }, 2000);
                }}
              >
                <Link className="nav-link cs-primaryText" to="about">
                  {/* <img className="d-block m-auto nav-icon" src={iAbout} /> */}
                  ABOUT
                </Link>
              </li>{" "}
              {/* <li
                className="nav-item"
                onClick={() => {
                  showNav();
                  topFunction();
                }}
              >
                <Link className="nav-link cs-primaryText" to="blog">
                  {/* <img className="d-block m-auto nav-icon" src={iBlog} /> 
                  BLOG
                </Link>
              </li>{" "} */}
              <li
                className="nav-item"
                onClick={() => {
                  showNav();
                  topFunction();
                }}
              >
                <Link className="nav-link cs-primaryText" to="careers">
                  {/* <img className="d-block m-auto nav-icon" src={iContact} /> */}
                  CAREER
                </Link>
              </li>
            </ul>

            <Link
              className="nav-lin btn btn-danger mt-0 fs-6 px-3 border-0 rounded-0 shadow-lg"
              to="contact-us"
              onClick={() => {
                showNav();
                topFunction();
              }}
            >
              {/* <img className="d-block m-auto nav-icon" src={iContact} /> */}
              TALK WITH US
            </Link>
          </div>
        </div>
        <div className="border border-top-0 border-left-0 border-right-0 border-2 border-danger"></div>
      </nav>
      <ul
        className={`cs-mt-4 bg-danger mx-auto position-fixed ${industryShow}`}
        style={{
          width: "150px",
          left: "60.5%",
          zIndex: "1000",
          listStyle: "none"
        }}
      >
        <li
          className="nav-item mt-2"
          onClick={() => {
            showNav();
            topFunction();
          }}
        >
          <Link className="nav-link" to="aerospace">
            {/* <img className="d-block m-auto nav-icon" src={iContact} /> */}
            Aerospace
          </Link>
        </li>
        <li
          className="nav-item my-2"
          onClick={() => {
            showNav();
            topFunction();
          }}
        >
          <Link className="nav-link" to="mining">
            {/* <img className="d-block m-auto nav-icon" src={iContact} /> */}
            Mining
          </Link>
        </li>
      </ul>
      <ul
        className={`cs-mt-4 bg-danger mx-auto position-fixed ${aboutShow}`}
        style={{
          width: "150px",
          left: "70.5%",
          zIndex: "1000",
          listStyle: "none"
        }}
      >
        <li
          className="nav-item mt-2"
          onClick={() => {
            showNav();
            topFunction();
          }}
        >
          <Link className="nav-link " to="whoweare">
            {/* <img className="d-block m-auto nav-icon" src={iContact} /> */}
            Who We Are
          </Link>
        </li>
        <li
          className="nav-item my-2"
          onClick={() => {
            showNav();
            topFunction();
          }}
        >
          <Link className="nav-link " to="quality">
            {/* <img className="d-block m-auto nav-icon" src={iContact} /> */}
            Quality
          </Link>
        </li>
      </ul>
    </header>
  );
}
