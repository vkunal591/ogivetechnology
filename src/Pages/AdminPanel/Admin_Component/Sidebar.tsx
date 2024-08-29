import "./sidebars.css";
import logo from "../../../assets/logo-footer.43e2938c.png";
import person from "../../../assets/nurse.70105458.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const menuList = [
    {
      name: "Blog",
      link: "blog",
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
      link: "category",
      icon: "icons",
      submenuId: "submenu2",

      subMenu: [
        {
          name: "Create Category",
          link: "category/createcategory",
          icon: "plus"
        },
        {
          name: "View Category",
          link: "category/viewcategory",
          icon: "eye"
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
      link: "users",
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
          link: "users/viewuser",
          icon: "eye"
        },
        {
          name: "Update User",
          link: "users/updateuser",
          icon: "edit"
        }
      ]
    },
    {
      name: "Site Setting",
      link: "site",
      icon: "gear",
      submenuId: "submenu5",

      subMenu: [
   
     
        
        {
          name: "Title Edit",
          link: "site/edit",
          icon: "edit"
        },  {
          name: "Theam",
          link: "site/theam",
          icon: "brush"
        },  {
          name: "Images ",
          link: "site/image",
          icon: "image"
        }


      ]
    }
  ];
  return (
    <>
      {/* <!-- Main Sidebar Container --> */}
      <aside className="main-sidebar position-fixed sidebar-dark-primary elevation-4">
        {/* <!-- Brand Logo --> */}
        <Link to="/" className="brand-link">
          <img
            src={logo}
            alt="AdminLTE Logo"
            className="brand-image "
            style={{ opacity: "" }}
          />
          <span className="brand-text font-weight-light">Technology</span>
        </Link>
        {/* <!-- Sidebar user (optional) -->/ */}
        <div className="user-panel mt-3 pb-0 mb-3 d-flex">
          <div className="image">
            <img
              src={person}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link to="" className="d-block nav-link text-white">
              Alexander Pierce
            </Link>
          </div>
        </div>

        {/* <!-- Sidebar --> */}
        <div className="sidebar pl-2 pt-0 cs-mt-8">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2 text-left">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}

              {menuList &&
                menuList?.map((menu, index) => {
                  return (
                    <li className="nav-item menu-open pt-0" key={index}>
                      <Link to={""} className={` ${menu?.subMenu.length  ?"nav-link":""}`}>
                        <i className={`nav-icon fas fa-${menu?.icon}`}></i>
                        <p>
                          {menu?.name}
                          <i className={`right fas fa-angle-${menu?.subMenu.length != 0 ?"left":""}`}></i>
                        </p>
                      </Link>
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

              <li className="nav-item">
                <a href="../widgets.html" className="nav-link">
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
