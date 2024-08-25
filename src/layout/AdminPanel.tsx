import { Outlet } from "react-router-dom";
import Sidebar from "../Component/sidebars/Sidebar";


export default function AdminPanel() {
  return (
    <>
      <Sidebar />
      <main style={{ marginTop: "58px;" }}>
        <div className="container pt-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
