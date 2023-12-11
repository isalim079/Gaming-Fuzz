import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import AuthProvider from "./pages/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={Router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
