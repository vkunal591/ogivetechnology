import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import FloatingLink from "../Pages/AdminPanel/Admin_Component/FloatingLink";

const AppHome = () => {
  return (
    <>
      <Header />
      <FloatingLink />
      <Outlet />
      <Footer />
      
    </>
  );
};

export default AppHome;
