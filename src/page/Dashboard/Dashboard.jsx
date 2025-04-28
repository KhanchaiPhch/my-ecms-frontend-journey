import React from "react";

// import { useEffect ,useState } from "react";

import "../style/Dashboard.css";
// import { fetchTodos } from "../data/test";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
// import { useContext } from "react";
// import { AppContext } from "../../conponent/AppContext";

const Dashboard = () => {
  // const [Dashboard, setDashboard] = useState([]);

  // useEffect(()=> {
  //   setDashboard(fetchTodos);
  // },[])

  // console.log(Dashboard.length);


  return (
    <>
      <Container>
        {/* Debug border-2 border-rose-500 */}
        <div className=" flex-row justify-between row mb-4">
          <div className="drop-shadow-lg bg-white p-3 rounded flex justify-between items-center w-[410px] 
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
            <div className="flex flex-col items-end bg-white">
              <span className="text-lg font-semibold text-gray-600">คำขอถอนคอร์ส</span>
              <span className="text-3xl font-bold text-gray-800 text-sky-400/100">1</span>
            </div>
          </div>
          <div className="drop-shadow-lg bg-white p-3 rounded flex justify-between items-center w-[410px] 
                  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
            <div className="flex flex-col items-end bg-white">
              <span className="text-lg font-semibold text-gray-600">คำขอเบิกค่าอบรม</span>
              <span className="text-3xl font-bold text-gray-800 text-sky-400/100">1</span>
            </div>
          </div>
          <div className="drop-shadow-lg bg-white p-3 rounded flex justify-between items-center w-[410px] 
                  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
            <div className="flex flex-col items-end bg-white">
              <span className="text-lg font-semibold text-gray-600">ผลลัพธ์การอบรม</span>
              <span className="text-3xl font-bold text-gray-800 text-sky-400/100">1</span>
            </div>
          </div>
        </div>
        <div className="row w-3/4 flex-row row mb-5">
          <div className="drop-shadow-lg bg-white p-3 rounded flex justify-between items-center w-[410px] 
                  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
            <div className="flex flex-col items-end bg-white">
              <span className="text-lg font-semibold text-gray-600">พนักงานที่ยังทำงานอยู่</span>
              <span className="text-3xl font-bold text-gray-800 text-sky-400/100">1</span>
            </div>
          </div>

          <div className="drop-shadow-lg bg-white p-3  ml-[25px] rounded flex justify-between items-center w-[410px] 
                  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
            <div className="flex flex-col items-end bg-white">
              <span className="text-lg font-semibold text-gray-600">พนักงานที่ลาออกแล้ว</span>
              <span className="text-3xl font-bold text-gray-800 text-sky-400/100">1</span>
            </div>
          </div>

        </div>
      </Container>
    </ >
  );
};

export default Dashboard;
