import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlogs from "../pages/AddBlogs/AddBlogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addblogs',
                element: <AddBlogs></AddBlogs>
            },
            // {
            //     path: '/allblogs',
            //     element: <Register></Register>
            // },
            // {
            //     path: '/featuredblogs',
            //     element: <Register></Register>
            // },
            // {
            //     path: '/wishlist',
            //     element: <Register></Register>
            // },
        ],
    },
]);
