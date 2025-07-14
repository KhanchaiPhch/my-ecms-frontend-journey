import React, { useEffect, useRef } from "react";
import "./style.css";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { AppContext } from "./AppContext";

export const Navbar = () => {

  const [tab, setTeb] = React.useState('Dashboard')
  const { setPageName } = useContext(AppContext);
  const DashboardRef = useRef()

  useEffect(() => {
    setTeb('Dashboard')
    DashboardRef.current.click()
  }, [])

  return (
    <Container>
      {/* <div className="rounded-lg bg-gray-400 w-screens p-2"> */}
        <div className="text-center justify-center items-center flex mt-8 mb-12">
          <h1 className="text-4xl font-bold text-white-600 ">
            ECMS
          </h1>
        </div>

        <div className="dashbord">
          <Link to={"/"}>
            <button
              className={
                (tab === "Dashboard"
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200") +
                " text-black px-3 py-2 rounded hover:bg-gray-400"
              }
              onClick={() => {
                setTeb("Dashboard");
                setPageName("ภาพรวม");
              }}
              ref={DashboardRef}

            >
              <i className="bi bi-clipboard-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clipboard-data"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                </svg>
              </i>
              ภาพรวม
            </button>
          </Link>
        </div>

        <label className="px-1">ตัวเลือก</label>

        <div className="Menu">
          <div className="item">
            <Link to={"/Course"}>
              <button
                className={
                  (tab === "Course"
                    ? "bg-gray-400 text-white"
                    : "bg-gray-200") +
                  " text-black px-3 py-2 rounded hover:bg-gray-400"
                }
                onClick={() => {
                  setTeb("Course");
                  setPageName("คอร์ส");
                }}
              >
                <i className="bi bi-box-seam">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-seam"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                  </svg>
                </i>
                คอร์ส
              </button>
            </Link>
          </div>
          <div className="item">
            <Link to={"/Requset"}>
              <button
                className={
                  (tab === "Requset"
                    ? "bg-gray-400 text-white"
                    : "bg-gray-200") +
                  " text-black px-3 py-2 rounded hover:bg-gray-400"
                }
                onClick={() => {
                  setTeb("Requset");
                  setPageName("คำขอ");
                }}
              >
                <i className="bi bi-card-checklist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-card-checklist"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                  </svg>
                </i>
                คำขอ
              </button>
            </Link>
          </div>
          <div className="item">
            <Link to={"/Results"}>
              <button
                className={
                  (tab === "Results"
                    ? "bg-gray-400 text-white"
                    : "bg-gray-200") +
                  " text-black px-3 py-2 rounded hover:bg-gray-400"
                }
                onClick={() => {
                  setTeb("Results");
                  setPageName("ผลลัพธ์การอบรม");
                }}
              >
                <i className="bi bi-truck">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-truck"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                  </svg>
                </i>
                ผลลัพธ์การอบรม
              </button>
            </Link>
          </div>
          <div className="item">
            <Link to={"/Employee"}>
              <button
                className={
                  (tab === "Employee"
                    ? "bg-gray-400 text-white"
                    : "bg-gray-200") +
                  " text-black px-3 py-2 rounded hover:bg-gray-400"
                }
                onClick={() => {
                  setTeb("Employee");
                  setPageName("พนักงาน");
                }}
              >
                {" "}
                <i className="bi bi-person">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </i>
                พนักงาน
              </button>
            </Link>
          </div>
        </div>
        <div className="account">
          <Link to={"/Accounts"}>
            <button
              className={
                  (tab === "Accounts"
                    ? "bg-gray-400 text-white"
                    : "bg-gray-200") +
                  " text-black px-3 py-2 rounded hover:bg-gray-400"
                }
              onClick={() => {
                setTeb("Accounts");
                setPageName("โปรไฟล์");
              }}
            >
              {" "}
              <i className="bi bi-person">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </i>
              โปรไฟล์
            </button>
          </Link>
        </div>
      {/* </div> */}
    </Container>
  );
};


// import React, { useEffect, useRef, useContext } from "react";
// import { Link } from "react-router-dom";
// import { AppContext } from "./AppContext";

// export const Navbar = () => {
//   const [tab, setTeb] = React.useState("Dashboard");
//   const { setPageName } = useContext(AppContext);
//   const DashboardRef = useRef();

//   useEffect(() => {
//     setTeb("Dashboard");
//     DashboardRef.current.click();
//   }, []);

//   const navItems = [
//     { name: "Dashboard", label: "ภาพรวม", path: "/" },
//     { name: "Course", label: "คอร์ส", path: "/Course" },
//     { name: "Requset", label: "คำขอ", path: "/Requset" },
//     { name: "Results", label: "ผลลัพธ์การอบรม", path: "/Results" },
//     { name: "Employee", label: "พนักงาน", path: "/Employee" },
//   ];

//   return (
//     <div className="max-w-sm mx-auto py-2 px-4">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-white">ECMS</h1>
//       </div>

//       <div className="mb-6">
//         {navItems.slice(0, 1).map((item) => (
//           <Link to={item.path} key={item.name}>
//             <button
//               ref={item.name === "Dashboard" ? DashboardRef : null}
//               className={`w-full text-left px-4 py-2 rounded border text-white ${tab === item.name
//                   ? "btn btn-secondary"
//                   : "btn btn-outline-secondary"
//                 }`}
//               onClick={() => {
//                 setTeb(item.name);
//                 setPageName(item.label);
//               }}
//             >
//               {item.label}
//             </button>
//           </Link>
//         ))}
//       </div>

//       <label className="block mb-2 text-white">ตัวเลือก</label>

//       <div className="space-y-3 ">
//         {navItems.slice(1).map((item) => (
//           <Link to={item.path} key={item.name}>
//             <button
//               className={`w-full text-left px-4 py-2 mb-6 rounded border text-white ${tab === item.name
//                   ? "btn btn-secondary"
//                   : "btn btn-outline-secondary"
//                 }`}
//               onClick={() => {
//                 setTeb(item.name);
//                 setPageName(item.label);
//               }}
//             >
//               {item.label}
//             </button>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
