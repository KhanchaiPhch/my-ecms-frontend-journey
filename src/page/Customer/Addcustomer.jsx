import React from "react";
import "../style/Customer.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const Addcustomer = () => {
  return (
    <div>
      <div>
        <h2>เพิ่มลูกค้าใหม่</h2>
      </div>
      <div className="Addcustomer">
        <div className="containeraddcutomer">
          <p>ลูกค้า</p>
          <div>
            <div className="flexs">
              <label className="Addcutomerlabel">รหัส:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="C001"
                style={{ backgroundColor: "#d0d4d6" }}
              />
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel">ชื่อลูกค้า:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="EV-000-000-0005"
              />
            </div>
          </div>
          <p>ข้อมูลลูกค้า</p>
          <div>
            <div className="flexs">
              <label className="Addcutomerlabel">ชื่อบริษัท:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="B001"
              />
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel">เบอร์โทรศัพท์:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="090-0000-xxx"
              />
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel">อีเมล์:</label>
              <input
                type="text"
                className="form-control col "
                placeholder="sodadrink@gmail.com"
              />
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel edit-label">จังหวัด:</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel edit-label">อำเภอ/เขต:</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel edit-label">ตำบล/แขวง:</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel  ">รหัสไปรษณีย์:</label>
              <input type="text" className="form-control col " placeholder="" />
            </div>
            <div className="flexs">
              <label className="Addcutomerlabel edit-labeltextArea">
                ที่อยู่:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              className="btn btn-secondary  bnt-save"
              style={{ width: "140px", fontSize: "17px", marginBottom: "10px" }}
            >
              {" "}
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
