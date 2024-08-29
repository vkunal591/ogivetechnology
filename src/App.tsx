import {
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import Product from "./Component/Product";
import Service from "./Component/Service";
import AppHome from "./layout/AppHome";
import LandingPage from "./Pages/LandingPage";
import AdminPanel from "./layout/AdminPanel";
import ViewBlog from "./Pages/AdminPanel/Blog/ViewBlog";
import CreateCategory from "./Pages/AdminPanel/Category/CreateCategory";
import ViewCategory from "./Pages/AdminPanel/Category/ViewCategory";
import Login from "./Pages/AdminPanel/Auth/Login";
import ErrorPage from "./Pages/ErrorPage";
import CreateBlog from "./Pages/AdminPanel/Blog/CreateBlog";

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
            path: "software-service",
            element: <Service />
          },
          {
            path: "products",
            element: <Product />
          },
          {
            path: "indoustries",
            element: <Product />
          }
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
          { path: "", element: "Admin Control"},
          {
            path: "blog/createblog",
            element: <CreateBlog />
          },
          {
            path: "blog/viewblog",
            element: <ViewBlog />
          }
          ,
          {
            path: "category/createcategory",
            element: <CreateCategory />
          },
          {
            path: "category/viewcategory",
            element: <ViewCategory />
          }
        ]
      }
    ],
    errorElement: <ErrorPage />

  },
  { path: "admin",
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
