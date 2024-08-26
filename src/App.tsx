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

// Helper function to check authentication
const isAuthenticated = () => {
  // const token = localStorage.getItem("token");
  // return !!token;
  return true;
};

// AuthenticatedRoute component
const AuthenticatedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

// UnauthenticatedRoute component
// const UnauthenticatedRoute = () => {
//   return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoute />,
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
    ]
  },
  {
    path: "/admin",
    element: <AuthenticatedRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminPanel />,
        children: [
          { path: "", element: <Service /> },
          {
            path: "software-service",
            element: <Service />
          },
          {
            path: "products",
            element: <Product />
          }
        ]
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
