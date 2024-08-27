import { Outlet } from "react-router-dom";
import Sidebar from "../Component/sidebars/Sidebar";

export default function AdminPanel() {
  return (
    <div className="container-fluid px-0">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col py-3 cs-mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
