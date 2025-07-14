import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../../conponent/AppContext'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
const DetailRequest = () => {
    const { setPageName } = useContext(AppContext)
    const location = useLocation()
    const detail = location.state
    // console.log(detail)

    useEffect(() => {
        setPageName(`รายละเอียดคำขอถอนคอร์สของพนักงาน ${detail.empId}`)
    }, [])

    if (!detail)
        return <h1>ไม่พบข้อมูล</h1>
    else
        return (
            <>
                <div className='rounded drop-shadow-lg w-auto bg-white pl-6 pt-3 pr-3 pb-3'>
                    <Link to="/CourseRequest">
                        <button
                            type="button"
                            className="
                                inline-flex items-center 
                                px-4 py-2 mb-3 border
                                border-gray-400 text-gray-700 text-sm 
                                rounded hover:bg-gray-100 transition"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            กลับไปรายการคำขอ
                        </button>
                    </Link>

                    <div className='mb-3'>
                        <div >
                            <span className='text-2xl font-semibold'>{`รหัสคำขอ : `}</span>
                            <span className='text-xl'>{detail.reqId}</span>
                        </div>
                        <div>
                            <span className='text-xl font-semibold'>{`รหัสพนักงาน : `}</span>
                            <span className='text-xl'>{detail.empId}</span>
                        </div>
                    </div>
                    <div className='row mb-10'>
                        <div className='col'>
                            <div>
                                <span className='text-lg font-semibold text-gray-500' >
                                    {`ชื่อ `}
                                </span>
                                <span className='text-lg'>
                                    {detail.empName}
                                </span>
                            </div>

                            <div>
                                <span className='text-lg font-semibold text-gray-500'>
                                    {`แผนก `}
                                </span>
                                <span className='text-xl'>
                                    {detail.department}
                                </span>
                            </div>
                            <div>
                                <span className='text-lg font-semibold text-gray-500'>
                                    {`วันที่ส่งคำขอ `}
                                </span>
                                <span className='text-xl'>
                                    {detail.createdAt}
                                </span>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='col'>
                                <div>
                                    <span className='text-lg font-semibold text-gray-500'>{`รหัสคอร์ส `}</span>
                                    <span>{detail.courseId}</span>
                                </div>

                                <div>
                                    <span className='text-lg font-semibold text-gray-500'>{`ชื่อคอร์ส `}</span>
                                    <span>{detail.nameCourse}</span>

                                </div>

                                <div>
                                    <span className='text-lg font-semibold text-gray-500'>{`รหัสรอบ `}</span>
                                    <span>{detail.sessionId}</span>

                                </div>

                                <div>
                                    <span className='text-lg font-semibold text-gray-500'>{`สถานะ `} <span
                                        className={`px-2 py-1 rounded text-sm 
                                        ${detail.status === "pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-green-100 text-green-600"
                                            }`}
                                    >
                                        {detail.status}
                                    </span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col  justify-items-end'>
                            {detail.status === "pending" ? (<div>
                                <button
                                    className='
                                bg-green-500 
                                hover:bg-green-700 text-white 
                                font-normal py-2 px-4 border 
                                border-green-700 rounded mr-2'
                                >อนุมัติ</button>
                                <button
                                    className='
                                bg-red-500 
                                hover:bg-red-700 text-white 
                                font-normal py-2 px-4 border 
                                border-red-700 rounded mr-2'>
                                    ไม่อนุมัติ
                                </button>
                            </div>) : (<div></div>)}

                        </div>
                    </div>
                    {/* <div>{JSON.stringify(detail)}</div> */}
                </div >
            </>
        )
}


export default DetailRequest