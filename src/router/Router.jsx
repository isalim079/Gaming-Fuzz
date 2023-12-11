/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import ErrorMessage from "./ErrorMessage";
import About from "../pages/About/About";
import OurServices from "../pages/OurServices/OurServices";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import PrivateGameDetails from "../pages/PrivateGameDetails/PrivateGameDetails";
import PreOrder from "../pages/PreOtder/PreOrder";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorMessage></ErrorMessage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/gameServices.json"),
            },
            {
                path: "/about",
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>,
            },
            {
                path: "/ourServices",
                element: <OurServices></OurServices>,
            },
            {
                path: "/service/:id",
                element: (
                    <PrivateRoute>
                        <PrivateGameDetails></PrivateGameDetails>
                    </PrivateRoute>
                ),
                loader: () => fetch("/gameServices.json"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/preOrders",
                element: (
                    <PrivateRoute>
                        <PreOrder></PreOrder>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default Router;
