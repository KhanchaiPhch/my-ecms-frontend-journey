import React from "react";
import { Link } from "react-router-dom";

export const Adddelivery = () => {
  return (
    <div>
      <Link to={"/Delivery"}>
        <p>{"< รายการก่อนหน้า"}</p>
      </Link>
      <h2>บริการขนส่ง</h2>
      <div className="Adddelivery">
        <div className="detail-container">
          <div className="Detail">
            <p>สินค้า</p>
            <div className="flexs">
              <input
                type="text"
                className="form-control"
                placeholder="สินค้า"
              />
              <button type="button" className="btn btn-light">
                เลือก
              </button>
            </div>
            <p>บริษัท</p>
            <div className="flexs">
              <input
                type="text"
                className="form-control"
                placeholder="บริษัทผู้รับ"
              />
              <button type="button" className="btn btn-light">
                เลือก
              </button>
            </div>
            <div>
              <p>ชื่อผู้รับ</p>
              <div className="flexs">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อ-นามสกุล ผู้รับ"
                />
              </div>
              <div className="flexs">
                <input
                  type="text"
                  className="form-control"
                  placeholder="เบอร์โทรศัพท์ผู้รับ"
                />
              </div>
              <div className="flexs">
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="รหัสไปรษณีย์"
                />
              </div>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="ที่อยู่"
              ></textarea>
            </div>
          </div>
          <div>
            <h4>เลือกรูปแบบการขนส่ง</h4>
            <div className="select-delivery">
              <div className="select-Transport">
                <div className="text-Transport">
                  <h5>Kerry Express</h5>
                  <p>บริการนำพัสดุส่งทั่วไทย</p>
                </div>
                <div className="img">
                  <img
                    src="https://www.ordertracker.com/app/template/img/couriers/kerry-express.png"
                    style={{ height: "120px" }}
                  />
                </div>
              </div>
              <div className="select-Transport">
                <div className="text-Transport">
                  <h5>Flash Express</h5>
                  <p>รับถึงบ้านทั่วประเทศไทย</p>
                </div>
                <div className="img">
                  <img
                    src="https://th.bing.com/th/id/OIP.RrGoMS35drNcd7U3BVZxmwHaHa?rs=1&pid=ImgDetMain"
                    alt=""
                    style={{ height: "120px" }}
                  />
                </div>
              </div>
              <div className="select-Transport">
                <div className="text-Transport">
                  <h5>Thai Post</h5>
                  <p>ไปรษณีไทย</p>
                </div>
                <div className="img">
                  <img
                    src="https://thaiportal.ru/wp-content/uploads/2018/04/thailand-post.png"
                    alt=""
                    style={{ width: "190px" }}
                  />
                </div>
              </div>
              <div className="select-Transport">
                <div className="text-Transport">
                  <h5>Shopee Express</h5>
                  <p>Shopee Express</p>
                </div>
                <div className="img">
                  <img
                    src="https://vectorseek.com/wp-content/uploads/2023/06/Shopee-Express-Logo-Vector-01.jpg"
                    alt=""
                    style={{ width: "130px" }}
                  />
                </div>
              </div>
            </div>
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
