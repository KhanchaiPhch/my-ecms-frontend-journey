import React from "react";

// import { useEffect ,useState } from "react";

import "../style/Dashboard.css";

// import { fetchTodos } from "../data/test";




const Dashboard = () => {
  
  // const [Dashboard, setDashboard] = useState([]);
  
  // useEffect(()=> {
  //   setDashboard(fetchTodos);
  // },[])

  // console.log(Dashboard.length);


  return (
    <div>
      <h1>Dashboard / ภาพรวม</h1>
      <div className="containerDB">
        <div className="row today">
          <div className="intoday col">
            <div className="i-con">
              <i className="bi bi-calendar3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  fill="currentColor"
                  className="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </i>
            </div>
            <div className="text-center">
              <span>ยอดสินค้าเข้าวันนี้ (ชิ้น)</span>
              <span>1</span>
            </div>
          </div>
          <div className="ordertoday col">
            <div className="i-con">
              <i className="bi bi-calendar3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  fill="currentColor"
                  className="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </i>
            </div>
            <div className="text-center">
              <span>ยอดสินค้าเบิกวันนี้ (ชิ้น)</span>
              <span>1</span>
            </div>
          </div>
          <div className="delitoday col">
            <div className="i-con">
              <i className="bi bi-calendar3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  fill="currentColor"
                  className="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </i>
            </div>
            <div className="text-center">
              <span>ยอดสินค้าส่งวันนี้ (ชิ้น)</span>
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="max row">
          <div className="maxproduct col">
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
            <div className="text-center">
              <span>สินค้าเข้ามากที่สุด</span>
              <span>ตัวอย่างที่ 1</span>
            </div>
          </div>
          <div className="maxorder col">
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
            <div className="text-center">
              <span>สินค้าเข้ามากที่สุด</span>
              <span>ตัวอย่างที่ 1</span>
            </div>
          </div>
        </div>
        <div className="graph row">
          <div className="product-in col">
            <p>graph</p>
          </div>
          <div className="product-exports col">
            <p>graph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
