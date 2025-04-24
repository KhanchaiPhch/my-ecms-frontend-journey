import React from "react";
import { Link } from "react-router-dom";
import "../style/Order.css";
export const Addorders = () => {
  return (
    <div>
      <Link to={"/Order"}> {"<"} รายการสินค้า</Link>
      <h2 className="spacing">สร้างรายการเบิก</h2>
      <div className="row showorder">
        <div>ข้อมูล</div>
        <div className="row">
          <div className="container-addorder">
            <div className=" addorder-flex">
              <label className="lable-from">รหัสสินค้า :</label>
              <input
                type="text"
                className="form-control"
                placeholder="EV-000-000-0005"
                style={{ backgroundColor: "#d0d4d6" }}
              />
            </div>
            <div className=" addorder-flex">
              <label className="lable-from edit">จาก :</label>
              <select
                className="form-select"
                // aria-label="Default select example"
              >
                <option selected> select menu</option>
                <option value="1">บริษัท A</option>
                <option value="2">บริษัท B</option>
                <option value="3">บริษัท C</option>
                <option value="3">บริษัท D</option>
              </select>
            </div>
            <div className=" addorder-flex">
              <label className="lable-from">ไป :</label>
              <input type="text" className="form-control" />
            </div>
            <div className=" addorder-flex">
              <label className="lable-from">วันที่ :</label>
              <input type="datetime-local" className="form-control" />
            </div>
            <div className=" addorder-flex">
              <label className="lable-from">อ้างอิง :</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="row showorder-detail">
        <div>สินค้า</div>
        <div className="row row-table">
          <div className="col-xl-3 head-table"></div>
          <div className="col-xl-3 head-table" style={{ paddingLeft: "70px" }}>
            รหัสสินค้า
          </div>
          <div className="col-xl-3 head-table" style={{ paddingLeft: "60px" }}>
            ชื่อสินค้า
          </div>
          <div className="col-xl-3 head-table" style={{ paddingLeft: "60px" }}>
            จำนวนสินค้า
          </div>
        </div>
        <div className="add-product-order ">
          <div className="col-xl-3"></div>
          <div className="col-xl-3 head-table-add">
            <input
              type="text"
              className="form-control  input-size-3"
              placeholder="รหัสสินค้า"
            />
          </div>
          <div className="col-xl-3 head-table-add">
            <input
              type="text"
              className="form-control  input-size-3"
              placeholder="ชื่อสินค้า"
            />
          </div>
          <div className="col-xl-3 head-table-add">
            <input
              min="1"
              max="100"
              type="number"
              id="typeNumber"
              className="form-control input-size-3"
              placeholder="จำนวน"
            />
          </div>
        </div>
        <div className="add-product-order">+ เพื่มสินค้า</div>
        <div className="footer-order-add">
          <div className="flex-notation">
            <h5 className="notation">หมายเหตุ</h5>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-secondary  position-brn"
          style={{ width: "140px", fontSize: "17px", marginBottom: "10px" }}
        >
          {" "}
          สร้างรายการ
        </button>
      </div>
    </div>
  );
};
