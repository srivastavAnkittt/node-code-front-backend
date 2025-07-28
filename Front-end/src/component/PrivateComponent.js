import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
    let user = localStorage.getItem('user')
    return(
  user ? <Outlet /> : <Navigate to= "/register" />
   )
}
export default PrivateComponent;
