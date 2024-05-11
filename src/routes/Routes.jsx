import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlogs from "../pages/AddBlogs/AddBlogs";
import CardDetails from "../pages/CardDetails/CardDetails";
import UpdateBlogs from "../pages/UpdateBlogs/UpdateBlogs";
import AllBlogs from "../pages/AllBlogs/AllBlogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/blog')
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
            {
                path: '/blog/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)

            },
            {
                path: '/updateblogs/:id',
                element: <UpdateBlogs></UpdateBlogs>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path: '/allblogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch('http://localhost:5000/blog')
            },
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
