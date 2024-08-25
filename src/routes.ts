import AppHome from "./layout/AppHome";


const routes = [
    { path: "/", exact: true, name: "Home" },
    {
        path: "/login",
        name: "Login",
        component: "No Login",
    },
    {
        path: "/home",
        name: "Home",
        component: AppHome,
    },
];

export default routes;
