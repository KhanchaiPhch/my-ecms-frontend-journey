import React from "react";
import { Link } from "react-router-dom";

export const Adddelivery = () => {
  return (
    <div>
      <Link to={"/Delivery"}>
        <p>{"< รายการก่อนหน้า"}</p>
      </Link>

    </div>
  );
};
