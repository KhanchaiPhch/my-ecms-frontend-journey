import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CourseDetail = () => {
    const navagate = useNavigate()
    const location = useLocation();
    // const Course = location.state?.[0];
    const Course = location.state
    // console.log(JSON.stringify(Course, null, 2));
    // console.log("Course from state:", Course);
    const [message, setMessage] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState(false)

    const [courseid, setCourseId] = useState({})
    const [sessionid, setSessionId] = useState({})

    const handleFormSubmit = (sessionId, courseId) => {
        setCourseId(courseId)
        setSessionId(sessionId)
        console.log(typeof (courseId))
        console.log(typeof (sessionId))
        // แสดง popup ถ้ากรอกครบ
        setShowModal(true);
    };

    const openCourse = async (courseid, sessionid) => {
        const token = sessionStorage.getItem("token")
        try {
            const reqOpen = await axios.post("http://localhost:9999/courses/startCourse",
                {
                    courseid,
                    sessionid
                }, {
                headers: {
                    "authorization": token,
                    "Content-Type": "application/json"
                }
            })
            if (reqOpen.data.status === "OK") {
                showModal(false)
                setSuccess(true)
                setMessage("เปิดการอบรมสำเร็จ")
                setTimeout(setSuccess(false), 2000);
                navagate("./Course")
            }

        } catch (error) {
            console.log(error)
            setSuccess(false)
            setMessage("เปิดอบรมไม่สำเร็จ เกิดข้อผิดพลาดทางเซิฟเวอร์")
        }

    }
    if (!Course) {
        return (
            <div>
                <Link to={"/Course"}>
                    <button type="button" className="btn btn-outline-secondary pt-[1px] pb-[1px] mb-[10px]">{"< กลับไปหน้าคอร์ส"}</button>
                </Link>
                <div className="p-6 text-center text-red-600 font-bold">
                    ไม่พบข้อมูลคอร์ส
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-full drop-shadow-lg bg-white p-6 rounded mb-[29px]">
                {/* <Link to={"/Course"}>
                    <button type="button" className="btn btn-outline-secondary pt-[1px] pb-[1px] mb-[10px]">{"< กลับไปหน้าคอร์ส"}</button>
                </Link> */}

                <Link to="/Course">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 mb-4 border border-gray-400 text-gray-700 text-sm rounded hover:bg-gray-100 transition"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        กลับไปหน้าคอร์ส
                    </button>
                </Link>

                <h1 className="text-3xl font-bold mb-2">{Course.courseName}</h1>
                <p className="text-lg text-gray-600 mb-2">Course ID: {Course.courseId}</p>
                <div className="text-sm text-gray-500 mb-3">
                    สร้างเมื่อ: {new Date(Course.createdAt).toLocaleString()}
                    <br />
                    อัปเดตล่าสุด: {new Date(Course.updatedAt).toLocaleString()}
                </div>
                <div className="mb-6">

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

                    <h2 className="text-2xl font-semibold mb-2">Sessions</h2>


                    {Course.sessions.map((session, index) => (
                        <div
                            key={session.sessionId}
                            className=" shadow-xl bg-slate-200 rounded p-4 mb-4"
                        >
                            <h3 className="text-xl font-semibold mb-2">Session {index + 1}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4">
                                {/* Column 1 */}
                                <div>
                                    <p className="text-base mb-1">
                                        <span className="font-semibold">วันที่:</span>{" "}
                                        {new Date(session.trainingDate).toLocaleDateString()}
                                    </p>
                                    <p className="text-base mb-1">
                                        <span className="font-semibold">สถานที่:</span>{" "}
                                        {session.trainingLocation}
                                    </p>
                                </div>

                                {/* Column 2 */}
                                <div>
                                    <p className="text-base mb-1">
                                        <span className="font-semibold">เวลา:</span> {session.periods}
                                    </p>
                                    <p className="text-base mb-1">
                                        <span className="font-semibold">ชั่วโมง:</span> {session.hours}
                                    </p>
                                </div>

                                {/* Column 3 */}
                                <div>
                                    <p className="text-base mb-1">
                                        <span className="font-semibold">รับได้:</span>{" "}
                                        {session.courseLimit} คน
                                    </p>
                                    <p className="text-base mb-1">
                                        <span className="font-semibold">เหลือ:</span>{" "}
                                        {session.courseLeft} คน
                                    </p>
                                </div>

                                {/* Column 4 - สถานะและปุ่ม */}
                                <div className="ml-[100px]">
                                    <p className="text-base mb-2">
                                        <span className="font-semibold">สถานะ:</span>{" "}
                                        <span
                                            className={`font-bold ${session.status === "complete" ? "text-green-600" : "text-yellow-600"
                                                }`}
                                        >
                                            {session.status}
                                        </span>
                                    </p>

                                    {/* แสดงปุ่มถ้าสถานะไม่ complete */}
                                    {session.status === "active" ? (
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={() => handleFormSubmit(session.sessionId, Course.courseId)}
                                                className="btn btn-success text-white px-3 py-1 rounded hover:bg-green-600">
                                                เริ่มการอบรม
                                            </button>
                                        </div>
                                    ) : session.status === "close" ? (
                                        <div className="flex gap-2 mt-2">
                                            <button className="btn btn-success text-white px-3 py-1 rounded hover:bg-green-600">
                                                เปิด
                                            </button>
                                        </div>
                                    ) : session.status === "complete" ? (
                                        <div className="flex gap-2 mt-2">
                                            {/* s */}
                                        </div>
                                    ) : (
                                        <div className="flex gap-2 mt-2">
                                            <button className="btn btn-success text-white px-3 py-1 rounded hover:bg-green-600">
                                                เสร็จสินการอบรม
                                            </button>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div >
                {
                    showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-center">
                                <h3 className="text-xl font-semibold mb-4">ยืนยันการสร้างคอร์ส</h3>
                                <p className="text-gray-600 mb-6">ต้องการสร้างคอร์สนี้ใช่หรือไม่?</p>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={openCourse}
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
                    )
                }
            </div >
        );
    }
};

export default CourseDetail;
