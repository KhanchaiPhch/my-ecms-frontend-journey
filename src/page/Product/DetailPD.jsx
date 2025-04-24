import React from "react";

import { Link } from "react-router-dom";

import '../style/Product.css'

export const DetailPD = () => {
  return (
    <div>
      <Link to={"/Product"}> {"<"} สินค้าทั้งหมด</Link>
      <h2>รายละเอียดสินค้า ข้อมูลตัวอย่าง 5</h2>
      <div>
        <div className="row today">
          <div className="intoday col">
            <div className="i-con">
              <i className="bi bi-box-seam">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  fill="currentColor"
                  className="bi bi-box-seam"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
              </i>
            </div>
            <div className="text-center">
              <span>สินค้าคงเหลือ (ชิ้น)</span>
              <span>1</span>
            </div>
          </div>
          <div className="ordertoday col">
            <div className="i-con">
              <i className="bi bi-minecart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  fill="currentColor"
                  className="bi bi-minecart"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7z" />
                </svg>
              </i>
            </div>
            <div className="text-center">
              <span>สินค้าเตรียมจัดส่ง (ชิ้น)</span>
              <span>1</span>
            </div>
          </div>
          <div className="delitoday col">
            <div className="i-con">
              <i className="bi bi-reception-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  fill="currentColor"
                  className="bi bi-reception-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                </svg>
                
              </i>
            </div>
            <div className="text-center">
              <span>สินค้าส่งออกเดือนนี้ (ชิ้น)</span>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
        <div className="row showdetail">
          <div className="col-xl-3" style={{ border: "1px solid red" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sed nemo
            iste, aliquid saepe necessitatibus ullam reprehenderit rem unde natus
            voluptatibus maxime laborum fuga facilis repudiandae, harum eveniet.
            Sunt, accusantium.
          </div>
          <div className="col-xl-9 pading-detail">
            <br />
            <span className="font-2">ตัวอย่างที่ 5</span>
            <br />
            <br />
            <span className="font-1">รหัสสินค้า</span> <br />
            <span className="font-2">EV-000-000-0005</span> <br />
            <span className="font-1">น้ำหนัก</span> <br />
            <span className="font-2">1000 กรัม</span>
            <br />
            <span className="font-1">สินค้าเป็นชุด</span>
            <br />
            <span className="font-2">ไม่มีข้อมูล</span>
          </div>
        </div>
      </div>
  );
};
