import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import Review from "../components/Review";
import Service from "../components/Service";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Update from "../components/Update";
import UserReview from "../components/UserReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/review",
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviewer/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/userReview',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>
            }
        ]
    }

])