import React, { useEffect, useContext, useState } from "react";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import { AppContext } from "../../../conponent/AppContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("active"); // ค่าเริ่มต้น: เปิดอยู่
  const itemsPerPage = 5;
  const [flattenedSessions, setFlattenedSessions] = useState([]);
  const { setPageName } = useContext(AppContext);
  const [courseAll, setCourseAll] = useState([])
  const [courseSelect, setCourseSelect] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token")
      try {
        const res = await axios.post("http://localhost:9999/courses/showCourse", {
          courseId: "C001",
          sessionId: "S002"
        }, {
          headers: {
            // Bearer
            "content-Type": "application/json",
            "authorization": token,
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
    setPageName("คอร์ส");
  }, [setPageName]);

  const navigate = useNavigate();
  const CourseDetailReq = async () => {
    const token = sessionStorage.getItem("token")
    const reqData = await axios.post("http://localhost:9999/courses/courseDetail", {
      "courseId": "C004",
      "sessionId": "S001"

    }, {
      headers: {
        authorization: token,
        "Content-Type": "application/json"
      }
    })
    const resdata = reqData.data.data
    setCourseSelect(resdata)
    console.log(resdata)
  }

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
          <Button
            variant={filterStatus === "all" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            onClick={() => handleFilterChange("all")}
          >
            ทั้งหมด
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
                    <td>
                      {/* <Link to={"/CourseDetail"}> */}
                      <button onClick={async () => {
                        await CourseDetailReq(); // รอให้โหลดข้อมูลเสร็จ
                        navigate("/CourseDetail"); // แล้วค่อยเปลี่ยนหน้า
                      }}
                        className="btn btn-outline-success pt-[1px] pb-[1px]"
                      >เปิด</button>
                      {/* </Link> */}
                    </td>
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
