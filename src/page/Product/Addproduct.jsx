import React from "react";
import { Link } from "react-router-dom";
import "../style/Product.css";
export const Addproduct = () => {
  return (
    <div>
      <Link to={"/Product"}> {"<"} สินค้าทั้งหมด</Link>
      <h2 className="spacing">สินค้านำเข้าใหม่</h2>
      <div className="showproduct">
        <div className="i-con">
          <i className="bi bi-archive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="50px"
              fill="currentColor"
              className="bi bi-archive"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
          </i>
        </div>

        <div className="row spacing-row">
          <div className="col-xl-6">
            <div className="row spacing">
              <label className="col">รหัสสินค้า:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="EV-000-000-0005"
                style={{ backgroundColor: "#d0d4d6" }}
              />
            </div>
            <div className="row spacing">
              <label className="col">ชื่อสินค้า:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="ตัวอย่างที่ 5"
              />
            </div>
            <div className="row spacing">
              <label className="col">หน่วย:</label>
              <input
                type="text "
                className="form-control col "
                placeholder="ตัวอย่าง ชิ้น ลัง"
              />
            </div>
            <div className="row spacing">
              <label className="col">Tag สินค้า:</label>
              <input type="text" className="form-control col  " />
            </div>
          </div>
          <div className="col">
            <div className="row" style={{ margin: "20px" }}>
              <div className="col-xl-4">
                <label form="formFile" className="form-label">
                  เพิ่มรูปสินค้า
                </label>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <p className="text-detail">
            {" "}
            <i className="bi bi-clipboard2-minus ">
              <svg
                xmlns="http://ww w.w3.org/2000/svg"
                width="30px"
                height="50px"
                fill="currentColor"
                className="bi bi-clipboard2-minus"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                <path d="M6 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
              </svg>
            </i>
            ข้อมูลขนส่ง
          </p>
          <div className="col-xl-8">
            <div className="row spacing">
              <label className="col">น้ำหนัก {"(กรัม) :"}</label>
              <input
                type="text"
                className="form-control col "
                placeholder="0"
              />
            </div>
            <div className="row ">
              <div className="spacing-delivery">
                <div className="row spacing">
                  <label className="col">ขนาด {"(กว้าง ยาว สูง) (ซม) :"}</label>
                  <input
                    type="text"
                    className="form-control col  "
                    placeholder="กว้าง"
                  />
                </div>
                <input
                  type="text"
                  className="form-control col input-size"
                  placeholder="ยาว"
                />
                <input
                  type="text"
                  className="form-control col  input-size-2"
                  placeholder="สูง"
                />
              </div>
            </div>
          </div>
        </div>
        <Link to={"/DetailPD"}>
          <button
            className="btn btn-secondary  position-brn"
            style={{ width: "140px", fontSize: "17px", marginBottom: "10px" }}
          >
            {" "}
            สร้างรายการ
          </button>
        </Link>
      </div>
    </div>
  );
};
