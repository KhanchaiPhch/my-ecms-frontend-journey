import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../conponent/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const CreateCourse = () => {
  const { setPageName } = useContext(AppContext);
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setPageName("สร้างคอร์ส");
  }, [setPageName]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!courseId || !courseName) {
      setMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      setSuccess(false);
      return;
    }

    // แสดง popup ถ้ากรอกครบ
    setShowModal(true);
  };

  const navigate = useNavigate();
  const confirmCreateCourse = async () => {
    setShowModal(false); // ปิด modal ก่อนส่ง
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:9999/courses/createCourse",
        { courseId, courseName },
        {
          headers: {
            "Content-Type": "application/json",
            "authorization": token,
          },
        }
      );

      if (res.data.status === "OK") {
        setMessage("สร้างคอร์สสำเร็จ!");
        setSuccess(true);
        setCourseId("");
        setCourseName("");
        setTimeout(() =>  navigate("/CreateSession"), 2000)

      } else {
        setMessage("เกิดข้อผิดพลาดในการสร้างคอร์ส");
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");
      setSuccess(false);
    }
  };

  return (
    <div className="w-full bg-white  rounded shadow-xl p-[20px]">
      {/* <h2 className="text-3xl font-bold mb-6  text-gray-700">สร้างคอร์ส</h2> */}
      <div>
        <Link to={"/Course"}>
          <button type="button" className="btn btn-outline-secondary pt-[1px] pb-[1px] mb-[10px]">{"< กลับไปหน้าคอร์ส"}</button>
        </Link> 
      </div>
      {message && (
        <div
          className={`mb-4 px-4 py-2 rounded text-sm text-center ${success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <div className="row">

          <div className="col-6">
            <div className="mb-6">
              <label className="block mb-1 font-semibold text-gray-600">รหัสคอร์ส</label>
              <input
                type="text"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="เช่น C001"
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-6">
              <label className="block mb-1 font-semibold text-gray-600">ชื่อคอร์ส</label>
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="เช่น React สำหรับผู้เริ่มต้น"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-success  hover:bg-success-700 text-white font-semibold py-2 px-6 rounded"
          >
            สร้าง
          </button>
        </div>
      </form>

      {/* Modal ยืนยัน */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">ยืนยันการสร้างคอร์ส</h3>
            <p className="text-gray-600 mb-6">ต้องการสร้างคอร์สนี้ใช่หรือไม่?</p>
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
