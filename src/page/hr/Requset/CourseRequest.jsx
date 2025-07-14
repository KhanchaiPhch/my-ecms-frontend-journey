import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../conponent/AppContext";
const CourseRequest = () => {

    const { setPageName } = useContext(AppContext)
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);

    const [courseRequests, setCourseRequests] = useState([])
    const [filterStatus, setFilterStatus] = useState("pending");
    // const [filterPage,setFilterPage] = useState("pending")

    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem("token");
            try {
                const res = await axios.get("http://localhost:9999/withdrawrequest/requests", {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                });

                setCourseRequests(res.data.data);
                console.log(res);
            } catch (error) {
                console.log(`Error at courseRequests ${error}`);
            }
        };
        setPageName("คำขอถอนคอร์ส")
        fetchData();
    }, []);


    const filteredRequests = courseRequests.filter(req => {
        if (filterStatus === "all") return true;
        return req.status === filterStatus;
    });


    const handleFilterChange = (status) => {
        setFilterStatus(status)
    }

    const colorStatus = (status) => {
        if (status === "pass") {
            return (
                <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-600">pass</span>
            )
        } else if (status === "pending") {
            return (
                <span className="px-2 py-1 rounded text-sm bg-yellow-100 text-yellow-600">pending</span>
            )
        } else {
            return (
                <span className="px-2 py-1 rounded text-sm bg-red-100 text-red-600">deny</span>
            )
        }
    }

    if (!courseRequests)
        return <h1>ไม่พบคำขออนคอร์ส</h1>
    return (
        // <div className="min-h-screen bg-gray-100 py-10 px-4">
        <>
            <div className="mt-[5px] mb-[13px]">
                <span className="rounded-lg bg-gray-300 w-screens p-2">
                    <button className={
                        (filterStatus === "pending"
                            ? "bg-gray-400 text-white"
                            : "bg-gray-300")
                        +
                        " text-black px-3 py-1  mr-2 rounded hover:bg-gray-400"
                    }
                        // variant={filterStatus === "ongoing" ? "bg-gray-400" : "bg-gray-300"}
                        onClick={() => handleFilterChange("pending")}>รออนุมัติ
                    </button>

                    <button className={
                        (filterStatus === "pass"
                            ? "bg-gray-400 text-white"
                            : "bg-gray-300")
                        +
                        " text-black px-3 py-1  mr-2 rounded hover:bg-gray-400"
                    }
                        // variant={filterStatus === "ongoing" ? "bg-gray-400" : "bg-gray-300"}
                        onClick={() => handleFilterChange("pass")}>
                        อนุมัติแล้ว
                    </button>

                    <button className={
                        (filterStatus === "deny"
                            ? "bg-gray-400 text-white"
                            : "bg-gray-300")
                        +
                        " text-black px-3 py-1 mr-2 rounded hover:bg-gray-400"
                    }
                        onClick={() => handleFilterChange("deny")}
                    >ไม่อนุมัติ
                    </button>

                    <button className={(
                        filterStatus === "all"
                            ? "bg-gray-400 text-white"
                            : "bg-gray-300"
                    )
                        +
                        " text-black px-3 py-1 mr-2 rounded hover:bg-gray-400"
                    }
                        onClick={() => { handleFilterChange("all") }}
                    >ทั้งหมด</button>
                </span>
            </div>
            <div className=" mx-auto bg-white p-8 rounded-lg shadow-lg">

                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    รายการคำขอถอนคอร์ส
                </h1>

                {filteredRequests.length === 0 ? (
                    <p className="text-center text-gray-500">ไม่มีคำขอคอร์ส</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border px-4 py-2 text-center">ชื่อผู้ขอ</th>
                                    <th className="border px-4 py-2 text-center">ชื่อคอร์ส</th>
                                    <th className="border px-4 py-2 text-center">รหัสคอร์ส</th>
                                    <th className="border px-4 py-2 text-center">วันที่ขอ</th>
                                    <th className="border px-4 py-2 text-center">สถานะ</th>
                                    <th className="border  py-2 text-center">การจัดการ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredRequests.map((req) => (
                                    <tr key={req._id} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2 ">{req.empName}</td>
                                        <td className="border px-4 py-2 ">{req.nameCourse}</td>
                                        <td className="border px-4 py-2 ">{req.sessionId}</td>
                                        <td className="border px-4 py-2 text-center">{req.createdAt ?
                                            (req.createdAt.slice(0, 10))
                                            : "ไม่ระบุ"}</td>
                                        <td className="border px-4 py-2 text-center">
                                            {/* {() => colorStatus(req.status)} */}
                                            {colorStatus(req.status)}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            {req.status === "pending" ? (
                                                <>
                                                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2">
                                                        อนุมัติ
                                                    </button>
                                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2">
                                                        ลบ
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            navigate("/DetailRequest", { state: req })
                                                        }

                                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ">
                                                        ดูรายละเอียด
                                                    </button>
                                                </>
                                            ) : (<><button
                                                onClick={() =>
                                                    navigate("/DetailRequest", { state: req })
                                                }

                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ">
                                                ดูรายละเอียด
                                            </button></>)
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div >
        </>
        // </div >
    );
};

export default CourseRequest;
