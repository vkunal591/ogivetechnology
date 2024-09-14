import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../../Services/AuthServices";
import Toast from "./Toast";
import { showToast } from "../../../utils/toast";

export default function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    AuthServices.logOut();
    showToast({
      message: "You are logout",
      type: "info"   
    });
    navigate("/admin/auth/login");
  };
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="viewcareers" className="nav-link">
              Careers
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="viewcontacts" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>

        {/* <!-- Right navbar links -->/ */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
              onClick={logOut}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </li>
        </ul>
      </nav>
      <Toast />
    </>
  );
}
