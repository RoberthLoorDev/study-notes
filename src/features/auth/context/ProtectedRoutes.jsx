import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";

export default function ProtectedRoutes({ children }) {
    const { user } = UseAuth();

    //if user not exist, then back to login page
    if (!user) {
        return <Navigate to="/login" />;
    }

    //if the user exist, show the rest pages
    return children;
}
