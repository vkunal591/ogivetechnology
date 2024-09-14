import {
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import logo from "./assets/ogive logo.png";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Product from "./Component/Product";
import Service from "./Component/Service";
import AppHome from "./layout/AppHome";
import LandingPage from "./Pages/LandingPage";
import AdminPanel from "./layout/AdminPanel";
import ViewBlog from "./Pages/AdminPanel/Blog/BlogPage";
import CreateCategory from "./Pages/AdminPanel/Category/CreateCategory";
import Login from "./Pages/AdminPanel/Auth/Login";
import ErrorPage from "./Pages/ErrorPage";
import CreateBlog from "./Pages/AdminPanel/Blog/CreateBlog";
import CreateUser from "./Pages/AdminPanel/User/CreateUser";
import SiteEdit from "./Pages/AdminPanel/Admin_Control/SiteEdit";
import TheamSetting from "./Pages/AdminPanel/Admin_Control/TheamSetting";
import SiteMedia from "./Pages/AdminPanel/Admin_Control/SiteMedia";
import UpdateBlog from "./Pages/AdminPanel/Blog/UpdateBlog";
import ViewUsers from "./Pages/AdminPanel/User/ViewUsers";
import ViewProfile from "./Pages/AdminPanel/User/ViewProfile";
import Blog from "./Pages/Blog";
import ContactUs from "./Component/ContactUs";
import Faq from "./Component/Faq";
import AboutUs from "./Component/AboutUs";
import Career from "./Component/Career";
import Why from "./Component/Why";
import Gallery from "./Component/Gallery";
import Industries from "./Component/Industries";
import ViewCareers from "./Pages/AdminPanel/User/ViewCareers";
import ViewConatacts from "./Pages/AdminPanel/User/ViewContacts";
import ViewSubscriber from "./Pages/AdminPanel/User/ViewSubscriber";
import LandingPageForm from "./Pages/AdminPanel/Admin_Control/LandigPageForm";
import LandingPageUpdateForm from "./Pages/AdminPanel/Admin_Control/LandigPageUpdateForm";
import OurImpact from "./Pages/StaticPages/OurImpact";
import Quality from "./Pages/StaticPages/Quality";
import Automotive from "./Pages/StaticPages/Automotive";
import Mining from "./Pages/StaticPages/Mining";
import Aeromation from "./Pages/StaticPages/Aeromation";

// Helper function to check authentication
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// AuthenticatedRoute component
const AuthenticatedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="auth/login" />;
};

// UnauthenticatedRoute component
const UnauthenticatedRoute = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/admin" />;
};

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <UnauthenticatedRoute />,
    children: [
      {
        path: "/",
        element: <AppHome />,
        children: [
          { path: "", element: <LandingPage /> },
          {
            path: "services",
            element: <Service serviceSectionData={undefined} />
          },
          {
            path: "products",
            element: <Product productSectionData={undefined} />
          },
          {
            path: "product",
            element: <Blog />
          },
          {
            path: "service",
            element: <Blog />
          },
          {
            path: "industries",
            element: <Industries />
          },
          {
            path: "industry",
            element: <Blog />
          },
          {
            path: "blog",
            element: <Blog />
          },
          {
            path: "about",
            element: <AboutUs />
          },
          {
            path: "contact-us",
            element: <ContactUs />
          },
          {
            path: "careers",
            element: <Career />
          },
          {
            path: "career",
            element: <Blog />
          },
          {
            path: "faq",
            element: <Faq />
          },
          {
            path: "why",
            element: <Why />
          },
          {
            path: "gallery",
            element: <Gallery />
          },
          { path: "whoweare", element: <OurImpact /> },
          { path: "quality", element: <Quality /> },
          {path:"automotive",element:<Automotive />},
          {path:"mining",element:<Mining />},
          {path:"aerospace",element:<Aeromation />}


          
        ]
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "/admin",
    element: <AuthenticatedRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminPanel />,
        children: [
          {
            path: "",
            element: (
              <img loading="lazy" className="m-3 p-3 cs-w-70" src={logo} />
            )
          },
          {
            path: "blog/createblog",
            element: <CreateBlog />
          },
          {
            path: "blog/viewblog",
            element: <ViewBlog />
          },
          {
            path: "blog/updateblog",
            element: <UpdateBlog />
          },
          {
            path: "category/createcategory",
            element: <CreateCategory />
          },
          {
            path: "users/createuser",
            element: <CreateUser />
          },
          {
            path: "users/viewusers",
            element: <ViewUsers />
          },
          {
            path: "users/viewProfile",
            element: <ViewProfile />
          },
          {
            path: "site/edit",
            element: <SiteEdit />
          },
          {
            path: "site/theame",
            element: <TheamSetting />
          },
          {
            path: "site/media",
            element: <SiteMedia />
          },
          {
            path: "site/settings",
            element: <TheamSetting />
          },
          { path: "viewcareers", element: <ViewCareers /> },
          { path: "viewcontacts", element: <ViewConatacts /> },
          { path: "viewsubscriber", element: <ViewSubscriber /> },
          { path: "site/landigpagedetails", element: <LandingPageForm /> },
          {
            path: "site/updatelandigpagedetails",
            element: <LandingPageUpdateForm />
          },
          {
            path: "site/updatelandigpagedetails",
            element: <LandingPageUpdateForm />
          }
        ]
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "admin",
    element: <UnauthenticatedRoute />,
    children: [
      {
        path: "auth/login",
        element: <Login />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={7}
        outerSize={50}
        color="gray"
        outerAlpha={1}
        innerScale={1.1}
        outerScale={1.5}
        showSystemCursor={true}
        trailingSpeed={10}
        outerStyle={{
          border: "2px solid gray",
          backgroundColor: "transparent"
        }}
        innerStyle={{
          backgroundColor: "gray",
          color: "gray"
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link"
        ]}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
