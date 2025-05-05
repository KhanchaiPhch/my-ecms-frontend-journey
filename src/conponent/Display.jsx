import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';

import { Outlet } from "react-router-dom";

export const Displays = () => {
    return (
        <div>
            <Container >
                <Outlet />
            </Container>
        </div>
    )
}