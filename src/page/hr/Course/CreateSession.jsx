import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../conponent/AppContext";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateSession = () => {
  const { setPageName } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [periods, setPeriods] = useState("");
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [trainingLocation, setTrainingLocation] = useState("");
  const [hours, setHours] = useState("");
  const [courseLimit, setCourseLimit] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState()

  useEffect(() => {
    setPageName("สร้างรอบ");

    const fetchCourses = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const res = await axios.post("http://localhost:9999/courses/showCourse", {}, {
          headers: {
            "authorization": token,
            "content-type": "application/json"
          }
        });
        setCourses(res.data.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [setPageName]);

  useEffect(() => {
    if (selectedCourse) {
      const course = courses.find((c) => c.courseId === selectedCourse);
      const nextSessionNumber = course?.sessions?.length + 1 || 1;
      setSessionId(`S${String(nextSessionNumber).padStart(3, '0')}`);
    }
    // setMessage(false)
  }, [selectedCourse, courses]);

  //ใช้ setTimeOut แทนละครับ :p
  // useEffect(() => {
  //   if (
  //     selectedCourse ||
  //     trainingDate ||
  //     periods ||
  //     trainingLocation ||
  //     hours ||
  //     courseLimit
  //   ) {
  //     setMessage(false);
  //     return;
  //   }
  // }, [selectedCourse,trainingDate,periods,trainingLocation,hours,courseLimit])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCourse || !trainingDate || !periods || !trainingLocation || !hours || !courseLimit) {
      setSuccess(false);
      setMessage("กรุณกรองข้อมลให้ครบถ้วน")
      setTimeout(() => setMessage(false), 2000);
      return;
    }
    // แสดง popup ถ้ากรอกครบ
    setShowModal(true);
  }
  const navigate = useNavigate();

  const confirmCreateCourse = async (e) => {
    const token = sessionStorage.getItem("token");
    try {
      const res = await axios.post("http://localhost:9999/courses/addSession", {
        courseId: selectedCourse,
        sessionId,
        trainingDate,
        periods,
        trainingLocation,
        hours,
        courseLimit
      }, {
        headers: {
          "authorization": token,
          "content-type": "application/json"
        }
      });

      if (res.data.status === "OK") {
        setShowModal(false)
        setMessage("สร้างรอบสำเร็จ")
        setSuccess(true)
        // setSelectedCourse(" ")
        // setTrainingDate(" ")
        // setPeriods(" ")
        // setTrainingLocation(" ")
        // setHours(" ")
        // setCourseLimit(" ")
        setTimeout(() => navigate("/Course"), 2000);
      } else {
        setMessage("เกิดข้อผิดพลาดในการสร้างคอร์ส");
        setSuccess(false);
      }

      // setSuccess(true)
    } catch (err) {
      console.error("Create session error:", err);
      setSuccess(false)
      setMessage("สร้างรอบไม่สำเร็จ เกิดข้อผิดลาดทางเซิฟเวอร์")
      setShowModal(false)
    }
  };

  return (
    <div className="w-full bg-white  rounded shadow-xl p-[20px]">
      {/* <h2 className="text-2xl font-bold mb-6">สร้างรอบอบรม</h2> */}
      <div>
        <Link to="/Course">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 mb-4 border border-gray-400 text-gray-700 text-sm rounded hover:bg-gray-300 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปหน้าคอร์ส
          </button>
        </Link>

      </div>
      <div className="h-8">
        {message && (
          <div
            className={
              ` px-4 py-2 rounded text-sm text-center 
          ${success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
              }`}
          >
            {message}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="row">
          <div className="col-6">
            {/* คอร์ส */}
            <div>
              <label className="block font-medium mb-1 ">เลือกคอร์ส</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 
                    ${selectedCourse
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  // ? "form-control is-valid"
                  // : "border-1"
                  }`
                }
              // required
              >
                <option value="">-- เลือกคอร์ส --</option>
                {courses.map((course) => (
                  <option key={course.courseId} value={course.courseId}>
                    {course.courseId} - {course.courseName}
                  </option>
                ))}
              </select>
            </div>

            {/* รหัสรอบ */}
            <div>
              <label className="block font-medium mb-1">รหัสรอบ</label>
              <input
                type="text"
                value={sessionId}
                readOnly
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 
                    ${sessionId
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  // ? "form-control is-valid"
                  // : "border-1"
                  }`
                }
              />
            </div>


            {/* ที่นั่ง */}
            <div>
              <label className="block font-medium mb-1">จำนวนที่นั่ง</label>
              <input
                type="number"
                value={courseLimit}
                onChange={(e) => setCourseLimit(e.target.value)}
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 
                    ${courseLimit
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  }`
                }
              // required
              />
            </div>

            {/* สถานที่ */}
            <div>
              <label className="block font-medium mb-1">สถานที่</label>
              <input
                type="text"
                value={trainingLocation}
                onChange={(e) => setTrainingLocation(e.target.value)}
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300
                    ${trainingLocation
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  }`
                }
              // required
              />
            </div>
          </div>

          <div className="col-6">

            {/* วันที่ */}
            <div>
              <label className="block font-medium mb-1">วันที่อบรม</label>
              <input
                type="date"
                value={trainingDate}
                onChange={(e) => setTrainingDate(e.target.value)}
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300
                    ${trainingDate
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  }`
                }
              // required
              />
            </div>


            {/* เวลาเริ่ม */}
            <div>
              <label className="block font-medium mb-1">เวลา</label>
              <select
                value={periods}
                onChange={(e) => setPeriods(e.target.value)}
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300
                  ${periods
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  // ? "form-control is-valid"
                  // : "border-1"
                  }`}
              // required
              >
                <option value="">กรุณาเลือกช่วงเวลา</option>
                <option value="08:00-17:00">08:00 - 17:00</option>
                {/* <option value="09:00-10:00">09:00 - 10:00</option>
                <option value="10:00-11:00">10:00 - 11:00</option>
                <option value="11:00-12:00">11:00 - 12:00</option>
                <option value="13:00-14:00">13:00 - 14:00</option>
                <option value="14:00-15:00">14:00 - 15:00</option>
                <option value="15:00-16:00">15:00 - 16:00</option>
                <option value="16:00-17:00">16:00 - 17:00</option> */}
              </select>
            </div>


            {/* <div>
              <label className="block font-medium mb-1">เวลา</label>
              <input
                type="text"
                // placeholder="เช่น 09:00-12:00"
                value={periods}
                onChange={(e) => setPeriods(e.target.value)}
                className={
                  `w-full pr-[36px]  py-2 rounded form-control 
                    ${periods
                    ? "form-control is-valid"
                    : "border-1"
                  }`
                }
                required
              />
            </div> */}

            {/* ถึง */}
            {/* <div>
              <label className="block font-medium mb-1">เวลาสิ้นสุด</label>
              <input
                type="time"
                // placeholder="เช่น 09:00-12:00"
                value={periods}
                onChange={(e) => setPeriods(e.target.value)}
                className={
                  `w-full pr-[36px]  py-2 rounded form-control 
                    ${periods
                    ? "form-control is-valid"
                    : "border-1"
                  }`
                }
                required
              />
            </div> */}

            {/* จำนวนชั่วโมง */}
            <div>
              <label className="block font-medium mb-1">จำนวนชั่วโมง</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className={
                  `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300
                    ${hours
                    ? "border border-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"
                    : "border border-gray-300"
                  // ? "form-control is-valid"
                  // : "border-1"
                  }`
                }
              // required
              />
            </div>

            {/* ปุ่ม */}
            <div className="flex justify-end mt-10">
              {/* <Link to="/Course">
              <button type="button" className="btn btn-outline-secondary">
              {"< กลับไปหน้าคอร์ส"}
              </button>
              </Link> */}

              <button type="submit" className="btn btn-success text-white px-6 py-2 rounded">
                สร้างรอบ
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Modal ยืนยัน */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">ยืนยันการสร้างรอบ</h3>
            <p className="text-gray-600 mb-6">ต้องการสร้างรอบนี้ใช่หรือไม่?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmCreateCourse}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
              >
                ยืนยัน
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateSession;
