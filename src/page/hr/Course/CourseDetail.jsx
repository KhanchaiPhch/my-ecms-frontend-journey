import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const CourseDetail = () => {

    const location = useLocation();
    // const Course = location.state?.[0];
    const Course = location.state

    console.log(JSON.stringify(Course, null, 2));
    console.log("Course from state:", Course);

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
                <Link to={"/Course"}>
                    <button type="button" className="btn btn-outline-secondary pt-[1px] pb-[1px] mb-[10px]">{"< กลับไปหน้าคอร์ส"}</button>
                </Link>
                <h1 className="text-3xl font-bold mb-2">{Course.courseName}</h1>
                <p className="text-lg text-gray-600 mb-2">Course ID: {Course.courseId}</p>
                <div className="text-sm text-gray-500 mb-3">
                    สร้างเมื่อ: {new Date(Course.createdAt).toLocaleString()}
                    <br />
                    อัปเดตล่าสุด: {new Date(Course.updatedAt).toLocaleString()}
                </div>
                <div className="mb-6">
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
                                    {session.status !== "complete" && (
                                        <div className="flex gap-2 mt-2">
                                            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                                                เปิด
                                            </button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                                ปิด
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default CourseDetail;
