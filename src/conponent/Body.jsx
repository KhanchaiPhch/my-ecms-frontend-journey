import React from "react";
import { Headers } from "./Header";
// import { Footers } from "./Footer";
import { Displays } from "./Display";


export const Bodys = ({setToken}) => {

    return (
      <div className="body">
        <Headers setToken={setToken} />
        <Displays />
        {/* <Footers /> */}
      </div>
    );
}