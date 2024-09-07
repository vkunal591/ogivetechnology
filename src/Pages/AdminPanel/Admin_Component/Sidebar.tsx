import "./Css/sidebars.css";
import logo from "../../../assets/logo-footer.43e2938c.png";
import person from "../../../assets/nurse.70105458.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [prevMenuId, setPrevMenuId] = useState("");
  const openMenu = (id: string) => {
    const menu = document.getElementById(id);
    menu?.classList.toggle("menu-open");
    if (id != prevMenuId) {
      const prevMenu = document.getElementById(prevMenuId);
      prevMenu?.classList.remove("menu-open");
      setPrevMenuId(id);
    }
  };

  const menuList = [
    {
      name: "Blog",
      icon: "blog",
      submenuId: "submenu1",
      subMenu: [
        { name: "Create Blog", link: "blog/createblog", icon: "plus" },
        {
          name: "View Blog",
          link: "blog/viewblog",
          icon: "eye"
        }
      ]
    },
    {
      name: "Category",
      icon: "icons",
      submenuId: "submenu2",
      subMenu: [
        {
          name: "Create Category",
          link: "category/createcategory",
          icon: "plus"
        }
      ]
    },
    {
      name: "Administration",
      link: "administration",
      icon: "admin",
      submenuId: "submenu3",
      subMenu: []
    },
    {
      name: "Users",
      icon: "users",
      submenuId: "submenu4",
      subMenu: [
        {
          name: "Create User",
          link: "users/createuser",
          icon: "plus"
        },
        {
          name: "View User",
          link: "users/viewusers",
          icon: "eye"
        },
        {
          name: "My Profile",
          link: "users/viewProfile",
          icon: "user"
        }
      ]
    },
    // {
    //   name: "Site Setting",
    //   icon: "gear",
    //   submenuId: "submenu5",
    //   subMenu: [
    //     {
    //       name: "Site Edit",
    //       link: "site/edit",
    //       icon: "edit"
    //     },
    //     {
    //       name: "Theame",
    //       link: "site/theame",
    //       icon: "brush"
    //     },
    //     {
    //       name: "Media",
    //       link: "site/media",
    //       icon: "image"
    //     },
    //     {
    //       name: "Settings",
    //       link: "site/settings",
    //       icon: "gear"
    //     }
    //   ]
    // }
  ];
  return (
    <>
      <aside className="main-sidebar position-fixed sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src={logo}
            alt="AdminLTE Logo"
            className="brand-image "
            style={{ opacity: "" }}
          />
          <span className="brand-text font-weight-light">Technology</span>
        </Link>
        <div className="user-panel mt-3 pb-0 mb-3 d-flex">
          <div className="image">
            <img
              src={person}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link
              to="/admin/viewprofile"
              className="d-block nav-link text-white"
            >
              Alexander Pierce
            </Link>
          </div>
        </div>
        <div className="sidebar pl-2 pt-0 cs-mt-8">
          <nav className="mt-2 text-left">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {menuList &&
                menuList?.map((menu, index) => {
                  return (
                    <li
                      className="nav-item pt-0"
                      id={`menu${index}`}
                      key={index}
                    >
                      <a 
                        className={` ${menu?.subMenu.length ? "nav-link" : ""}`}
                        onClick={() => openMenu(`menu${index}`)}
                      >
                        <i className={`nav-icon fas fa-${menu?.icon}`}></i>
                        <p >
                          {menu?.name}
                          <i
                            className={`right fas fa-angle-${
                              menu?.subMenu.length != 0 ? "left" : ""
                            }`}
                          ></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        {menu?.subMenu &&
                          menu?.subMenu.map((submenu, index) => {
                            return (
                              <li className="nav-item" key={index}>
                                <Link to={submenu?.link} className="nav-link">
                                  <i
                                    className={`far fa-${submenu?.icon} nav-icon`}
                                  ></i>
                                  <p>{submenu?.name}</p>
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}

              <li className="nav-item d-none">
                <a className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    </>
  );
}
