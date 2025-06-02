
import { useRef } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./conponent/Layout";

// import { CreateCourse } from "./page/hr/Course/CreateCourse";
import { CreateCourse } from "./page/hr/Course/CreateCourse";
import Course from "./page/hr/Course/Course";
import CourseDetail from "./page/hr/Course/CourseDetail";
import CreateSession from "./page/hr/Course/CreateSession";

import { Requset } from "./page/hr/Requset/Requset";
import Dashboard from "./page/hr/Dashboard/Dashboard";
import Employee from "./page/hr/Employee/Employee";
import Accounts from "./page/hr/Account/Accounts";
import Results from "./page/hr/Results/Results";
import { Login } from "./page/Login";

function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    setToken(token)
  }, []);

  if (!token) return <Login setToken={setToken} />;
  else
    return (
      <div>
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/Course" element={<Course />} />
              <Route path="/CourseDetail" element={<CourseDetail />} />
              <Route path="/CreateCourse" element={<CreateCourse />} />
              <Route path="/CreateSession" element={<CreateSession />} />

              <Route path="/Requset" element={<Requset />} />
              <Route path="/Employee" element={<Employee />} />
              <Route path="/Accounts" element={<Accounts />} />
              <Route path="/Results" element={<Results />} />
              {/* <Route path="/Addcustomer" element={<Addcustomer />} /> */}
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
}

export default App;
