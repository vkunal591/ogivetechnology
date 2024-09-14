import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/AdminPanel/Admin_Component/Sidebar";
import Navbar from "../Pages/AdminPanel/Admin_Component/Navbar";
import Footer from "../Pages/AdminPanel/Admin_Component/Footer";
import Loader from "../modals/Loader";

export default function AdminPanel() {
  return (
    <div className="wrapper">
      <Loader />

      <Navbar />
      <Sidebar />
      <div
        className="content-wrapper vh-100 pt-2 overflow-auto"
        style={{ minHeight: "319px" }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
