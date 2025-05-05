import React from "react";
import { Navbar } from "./Navbar";
import { Bodys } from "./Body";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';

const Layout = ({ setToken }) => {
  return (
    <Container fluid className="p-0">
      <div className="d-flex">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="w-100 bg-gray-200">
          <Bodys setToken={setToken} />
        </div>
      </div>
    </Container>
  );
}


export default Layout;
