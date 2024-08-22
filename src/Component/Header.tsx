import logo from "../assets/logo.png";
import iHome from "../assets/images/nav_home.png";
import iAi from "../assets/images/nav_ai.png";
import iAr from "../assets/images/nav_ar.png";
import iBlog from "../assets/images/nav_blog.png";
import iCgi from "../assets/images/nav_cgi.png";
import iContact from "../assets/images/nav_contact.png";
import iPartners from "../assets/images/nav_partners.png";
import iSoftware from "../assets/images/nav_software.png";
import iVr from "../assets/images/nav_vr.png";

export default function Header() {
  return (
    <header className="theme-dark">
      <nav className="navbar fixed-top mt-3 navbar-nav-scroll navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand ml-5 py-0" href="#">
            <img src={logo} className="nav-logo" alt="ogive" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto justify-content-evenly mb-2 cs-w-70 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {" "}
                  <img className="d-block m-auto nav-icon" src={iHome} />
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iSoftware} />
                  SOFTWARE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iAi} />
                  AI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iVr} />
                  VR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iCgi} />
                  CGI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iAr} />
                  AR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iPartners} />
                  ABOUT
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iBlog} />
                  BLOG
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img className="d-block m-auto nav-icon" src={iContact} />
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
