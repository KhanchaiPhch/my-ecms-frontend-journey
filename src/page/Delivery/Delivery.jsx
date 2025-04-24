import React from "react";
import { Link } from "react-router-dom";
import "../style/Delivery.css";

const Deliverys = () => {
  return (
    <div>
      <div className="row  searchs ">
        <div className="input">
          <div>จำนวนสินค้าทั้งหมด</div>
          <input
            type="text"
            className="form-control"
            placeholder="searchs"
            style={{ width: "200px", fontSize: "17px" }}
          />
        </div>
        <div className="btn-button">
          <div>
            <Link to={"/Adddelivery"}>
              <button
                className="btn btn-secondary "
                style={{ width: "140px", fontSize: "17px" }}
              >
                ขนส่ง
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row showdelivery">
        <p>ทั้งหมด</p>
        <table className="table product-tb" style={{ width: "97%" }}>
          <thead>
            <tr
              className="table-secondary"
              style={{ height: "50px", textAlign: "center" }}
            >
              <td>#</td>
              <td>รหัส</td>
              <td>ชื่อสินค้า</td>
              <td>คงเหลือ</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
            <tr style={{ height: "50px", textAlign: "center" }}>
              <td>1</td>
              <td>P001</td>
              <td>Soda lemon</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deliverys;
