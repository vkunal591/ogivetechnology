import "./sidebars.css";
import logo from "../../assets/ogive logo.png";

export default function Sidebar() {
  const menuList = [
    {
      name: "Blog",
      link: "blog",
      icon: "toolbar",
      submenuId: "submenu1",
      subMenu: [
        { name: "Create Blog", link: "blog/create", icon: "edit" },
        {
          name: "View Blog",
          link: "blog/viewblog",
          icon: "visibility"
        }
      ]
    },
    {
      name: "Category",
      link: "category",
      icon: "category",
      submenuId: "submenu2",

      subMenu: [
        { name: "Create Category", link: "category/create", icon: "edit" },
        {
          name: "View Category",
          link: "category/viewcategory",
          icon: "visibility"
        }
      ]
    },
    {
      name: "Users",
      link: "users",
      icon: "supervisor_account",
      submenuId: "submenu3",

      subMenu: [
        { name: "Create User", link: "user/create", icon: "edit" },
        {
          name: "View user",
          link: "user/viewuser",
          icon: "visibility"
        }
      ]
    }
  ];
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark cs-mt-5">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            href="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Menu</span>
          </a>
          <ul
            className="nav nav-pills w-100 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            {/* <li className="nav-item">
              <a href="#" className="nav-link align-middle px-0">
                <span className="material-symbols-outlined">home</span>{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li> */}
            {menuList &&
              menuList?.map((menu, index) => {
                return (
                  <li key={index} className="w-100">
                    <a
                      href={`#${menu?.submenuId}`}
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <span className="material-symbols-outlined">
                        {menu?.icon}
                      </span>
                      <span className="ms-1 d-none d-sm-inline">
                        {menu?.name}
                      </span>{" "}
                    </a>

                    <ul
                      className="collapse show nav flex-column ms-1"
                      id={`${menu?.submenuId}`}
                      data-bs-parent="#menu"
                    >
                      {menu?.subMenu &&
                        menu?.subMenu.map((submenu, index) => {
                          return (
                            <li className="w-100" key={index}>
                              <a href={submenu?.link} className="nav-link px-0">
                                <span className="material-symbols-outlined">
                                  {submenu?.icon}
                                </span>
                                <span className="d-none d-sm-inline">
                                  {submenu?.name}
                                </span>{" "}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
          </ul>
          <hr />
          <div className="dropdown pb-4">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="30"
                height="30"
                className="rounded-circle"
              />
              <span className="d-non d-sm-inline mx-1">loser</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <div
        className="row border border-1 border-black thm-env-color fixed-top"
        style={{ height: "10px" }}
      ></div>
      <nav
        className="navbar fixed-top mt-2 p-1 navbar-nav-scroll border border-bottom-2 navbar-expand-lg navbar-light bg-white"
        style={{ height: "70px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand ml-5 py-0" href="#">
            <img src={logo} className="nav-logo" alt="ogive" />
          </a>
        </div>
      </nav>

      {/* Navbar */}
    </>
  );
}
