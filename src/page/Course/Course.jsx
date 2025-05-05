import React, { useEffect, useContext, useState } from "react";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import { AppContext } from "../../conponent/AppContext";
import { Link } from "react-router-dom";
import "../style/Product.css";
import axios from "axios";

const Course = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("active"); // ค่าเริ่มต้น: เปิดอยู่
  const itemsPerPage = 5;
  const [flattenedSessions, setFlattenedSessions] = useState([]);
  const { setPageName } = useContext(AppContext);
  const [courseAll, setCourseAll] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:9999/courses/showCourse", {
          courseId: "C001",
          sessionId: "S002"
        }, {
          headers: {
            // Bearer
            "content-Type": "application/json",
            authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ4ZmFhZGYxMWQ1YmM1MTE2OTI0NWUiLCJ1c2VybmFtZSI6ImhzeSIsInJvbGVzIjoiSHIiLCJzdGF0dXMiOiJpbmFjdGl2ZSIsImlhdCI6MTc0NjI1ODk1NCwiZXhwIjoxNzQ2ODYzNzU0fQ.sSAZKxS3gg8lHpnf3uJsXIHycwQSP67g4Te_Y3V_-p8`,
          }
        })

        setCourseAll(res.data.data)
        console.log(courseAll)
        const flatData = res.data.data.flatMap((course) =>
          course.sessions.map((session) => ({
            ...course,
            ...session,
          }))
        );

        setFlattenedSessions(flatData);
      }
      catch (error) {
        console.error("Error fetching Course:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPageName("Course");
  }, [setPageName]);

  // ฟิลเตอร์ข้อมูลตามสถานะ
  const filteredSessions = flattenedSessions.filter((item) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return item.status === "active";
    if (filterStatus === "ongoing") return item.status === "ongoing";
    if (filterStatus === "close") return item.status === "close";
    if (filterStatus === "complete") return item.status === "complete";
    return true;
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
    <div>
      <Container className="p-0" style={{ marginTop: 20 }}>
        {/* Filter buttons */}
        <ButtonGroup className="mb-2">
          <Button
            variant={filterStatus === "active" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            onClick={() => handleFilterChange("active")}
          >
            เปิดอยู่
          </Button>
          <Button
            variant={filterStatus === "ongoing" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            onClick={() => handleFilterChange("ongoing")}
          >
            กำลังอบรม
          </Button>
          <Button
            variant={filterStatus === "close" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            onClick={() => handleFilterChange("close")}
          >
            ปิดอยู่
          </Button>
          <Button
            variant={filterStatus === "complete" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            onClick={() => handleFilterChange("complete")}
          >
            อบรมเสร็จ
          </Button>
        </ButtonGroup>

        {/* Table */}
        <div className="drop-shadow-lg bg-white rounded shadow overflow-hidden">
          <Table bordered responsive className="table-striped table-hover m-0">
            <thead>
              <tr className="text-center">
                <th>ลำดับ</th>
                <th>รหัสคอร์ส</th>
                <th>ชื่อคอร์ส</th>
                <th>รอบ</th>
                <th>ที่นั่ง</th>
                <th>วันที่</th>
                <th>เวลา</th>
                <th>ชั่วโมง</th>
                <th>สถานที่</th>
                {/* <th>สถานะ</th> */}
                <th>รายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr key={`${index}`} className="text-center">
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{item.courseId}</td>
                    <td>{item.courseName}</td>
                    <td>{item.sessionId}</td>
                    <td>{item.courseLimit}</td>
                    <td>{item.trainingDate}</td>
                    <td>{item.periods}</td>
                    <td>{item.hours}</td>
                    <td>{item.trainingLocation}</td>
                    {/* <td>{item.status}</td> */}
                    <td><button type="button" className="btn btn-outline-success pt-[1px] pb-[1px]">เปิด</button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        {/* Pagination + Create button */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "btn btn-secondary" : "btn btn-outline-secondary"}
                className="mr-1"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>

          <Link to={"/AddCourse"}>
            <button
              className="btn btn-dark"
              style={{ width: "140px", fontSize: "17px" }}
              onClick={() => setPageName("CreateCourse")}
            >
              สร้างคอร์ส
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Course;
