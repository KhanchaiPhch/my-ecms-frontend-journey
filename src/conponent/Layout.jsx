import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Navbar } from "./Navbar";
import { Bodys } from "./Body";

const Layout = ({ setToken  }) => {

  return (
    <div className="containers">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <Bodys setToken={setToken} />
      </div>
    </div>
  );
};

export default Layout;
