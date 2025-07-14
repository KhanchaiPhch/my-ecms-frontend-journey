import React, { useEffect, useContext, useState } from "react";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import { AppContext } from "../../../conponent/AppContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("active");
  const itemsPerPage = 5;
  const [flattenedSessions, setFlattenedSessions] = useState([]);
  const { setPageName } = useContext(AppContext);
  const [courseAll, setCourseAll] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const res = await axios.post(
          "http://localhost:9999/courses/showCourse",
          {},
          {
            headers: {
              "content-Type": "application/json",
              authorization: token,
            },
          }
        );
        setCourseAll(res.data.data);
        const flatData = res.data.data.flatMap((course) =>
          course.sessions.map((session) => ({
            ...course,
            ...session,
          }))
        );
        setFlattenedSessions(flatData);
      } catch (error) {
        console.error("Error fetching Course:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPageName("คอร์ส");
  }, [setPageName]);

  const filteredSessions = flattenedSessions.filter((item) => {
    if (filterStatus === "all") return true;
    return item.status === filterStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSessions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSessions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto">

      {/* Filter buttons */}
      <div className="mt-4 mb-[13px]">
        <span className="rounded bg-gray-300 w-screens p-2">
          <button
            className={
              (filterStatus === "active"
                ? "bg-gray-400 text-white"
                : "bg-gray-200") +
              " text-black px-3 py-1 mr-2 rounded hover:bg-gray-400"
            }
            // variant={filterStatus === "active" ? "bg-gray-400" : "bg-gray-300"}
            onClick={() => handleFilterChange("active")}
          >
            เปิดอยู่
          </button>

          <button
            className={
              (filterStatus === "ongoing"
                ? "bg-gray-400 text-white"
                : "bg-gray-200")
              +
              " text-black px-3 py-1  mr-2 rounded hover:bg-gray-400"
            }
            // variant={filterStatus === "ongoing" ? "bg-gray-400" : "bg-gray-300"}
            onClick={() => handleFilterChange("ongoing")}
          >
            กำลังอบรม
          </button>

          <button
            className={
              (filterStatus === "close"
                ? "bg-gray-400 text-white"
                : "bg-gray-200") +
              " text-black px-3 py-1 mr-2 rounded hover:bg-gray-400"
            }
            // variant={filterStatus === "close" ? "bg-gray-400" : "bg-gray-300"}
            onClick={() => handleFilterChange("close")}
          >
            ปิดอยู่
          </button>

          <button
            className={
              (filterStatus === "complete"
                ? "bg-gray-400 text-white"
                : "bg-gray-200") +
              " text-black px-3 py-1 mr-2 rounded hover:bg-gray-400"
            }
            // variant={filterStatus === "complete" ? "bg-gray-400" : "bg-gray-300"}
            onClick={() => handleFilterChange("complete")}
          >
            อบรมเสร็จ
          </button>

          <button
            className={
              (filterStatus === "all"
                ? "bg-gray-400 text-white"
                : "bg-gray-200") +
              " text-black px-3 py-1  rounded hover:bg-gray-400"
            }
            // variant={filterStatus === "all" ? "bg-gray-400" : "bg-gray-300"}
            onClick={() => handleFilterChange("all")}
          >
            ทั้งหมด
          </button>
        </span>
      </div>

      <div className="drop-shadow-lg bg-white rounded shadow p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">รายการคอร์ส</h1>

          {/* Filter buttons */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[
              { label: "เปิดอยู่", value: "active" },
              { label: "กำลังอบรม", value: "ongoing" },
              { label: "ปิดอยู่", value: "close" },
              { label: "อบรมเสร็จ", value: "complete" },
              { label: "ทั้งหมด", value: "all" },
            ].map((btn) => (
              <Button
                key={btn.value}
                variant={filterStatus === btn.value ? "success" : "outline-success"}
                onClick={() => handleFilterChange(btn.value)}
              >
                {btn.label}
              </Button>
            ))}
          </div> */}

          {/* Table */}
          <div className="overflow-x-auto">
            <Table bordered responsive className="table-striped table-hover">
              <thead className="text-center bg-gray-100">
                <tr>
                  <th>ลำดับ</th>
                  <th>รหัสคอร์ส</th>
                  <th>ชื่อคอร์ส</th>
                  <th>รอบ</th>
                  <th>ที่นั่ง</th>
                  <th>วันที่</th>
                  <th>เวลา</th>
                  <th>ชั่วโมง</th>
                  <th>สถานที่</th>
                  <th>รายละเอียด</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td>{indexOfFirstItem + index + 1}</td>
                      <td>{item.courseId}</td>
                      <td>{item.courseName}</td>
                      <td>{item.sessionId}</td>
                      <td>{item.courseLimit}</td>
                      <td>{item.trainingDate}</td>
                      <td>{item.periods}</td>
                      <td>{item.hours}</td>
                      <td>{item.trainingLocation}</td>
                      <td>
                        <button
                          onClick={() =>
                            navigate("/CourseDetail", { state: item })
                          }
                          className="btn btn-outline-success px-3 py-1"
                        >
                          เปิด
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center py-4 text-gray-500">
                      ไม่พบข้อมูล
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>

          {/* Pagination & Create Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-3">
            <div className="space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "primary" : "outline-primary"}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <div className="flex gap-3">
              <Link to={"/CreateSession"}>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded"
                  onClick={() => setPageName("สร้างคอร์ส")}
                >
                  สร้างรอบ
                </button>
              </Link>
              <Link to={"/CreateCourse"}>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded"
                  onClick={() => setPageName("สร้างคอร์ส")}
                >
                  สร้างคอร์ส
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
