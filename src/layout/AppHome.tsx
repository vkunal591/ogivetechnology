import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import FloatingLink from "../Pages/AdminPanel/Admin_Component/FloatingLink";
import GoToTop from "../Component/GoToTop";

const AppHome = () => {
  return (
    <>
      <Header />
      <div style={{ height: "4.4rem" }} id="up" className="w-100"></div>
      <FloatingLink />
      <GoToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppHome;
