import React from "react";
import { Link } from "react-router-dom";
import "../style/Order.css";
export const Addorders = () => {
  return (
    <div>
      <Link to={"/Order"}> {"<"} รายการสินค้า</Link>
    </div>
  );
};
