import React from "react";
import "./style.css";


import { Outlet } from "react-router-dom";

export const Displays = () =>{

    return(
        <div className="display">
            <Outlet />
        </div>
    )
}