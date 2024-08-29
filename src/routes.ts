import AdminPanel from "./layout/AdminPanel";
import Login from "./Pages/AdminPanel/Auth/Login";


const routes = [
    { path: "admin", exact: true, name: "Admin" },
    {
        path: "auth/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/admin",
        name: "Admin",
        component: AdminPanel,
    },
];

export default routes;
