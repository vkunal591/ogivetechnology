import "./sidebars.css"
import logo from"../../assets/ogive logo.png"

export default function Sidebar() {
  return (
<>
{/* <!--Main Navigation--> */}
<header>
  {/* <!-- Sidebar --> */}
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-0 mt-4">
        <a href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple ">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
            className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
      </div>
    </div>
  </nav>
  {/* <!-- Sidebar --> */}

{/* Navbar */}

<div
        className="row border border-1 border-black thm-env-color fixed-top"
        style={{ height: "10px" }}
      ></div>
      <nav className="navbar fixed-top mt-2 p-1 navbar-nav-scroll border border-bottom-2 navbar-expand-lg navbar-light bg-white" style={{height:"70px"}}>
        <div className="container-fluid">
          <a className="navbar-brand ml-5 py-0" href="#">
            <img src={logo} className="nav-logo" alt="ogive" />
          </a>
        </div>
      </nav>

{/* Navbar */}


</header>
{/* <!--Main Navigation--> */}

{/* <!--Main layout--> */}

{/* <!--Main layout--> */}
</>
  )
}
