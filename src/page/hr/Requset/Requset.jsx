import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Requset = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col md:flex-row gap-8 w-full">

        {/* การ์ดคำขอเบิกค่าอบรม */}
        {/* hover:scale-[1.02] */}
        <div className="flex-1 bg-gray-50 rounded shadow-lg p-8 transition duration-300">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">คำขอเบิกค่าอบรม</h1>
          <button
            onClick={() => navigate("/Reimbursement")}
            className="w-full px-6 py-3 bg-gray-600 
            text-white text-lg font-semibold rounded-lg 
            hover:bg-gray-800 transition duration-300 hover:scale-[1.02]"
          >
            ไปยังหน้าคำขอเบิก
          </button>
        </div>

        {/* การ์ดคำขอลงคอร์ส */}
        <div className="flex-1 bg-gray-50 rounded shadow-lg p-8 transition duration-300">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">คำขอถอนคอร์ส</h1>
          <button
            onClick={() => navigate("/CourseRequest")}
            className="w-full px-6 py-3 bg-gray-600 
            text-white text-lg font-semibold rounded-lg 
            hover:bg-gray-700 transition duration-300 hover:scale-[1.02]"
          >
            คำขอถอนคอร์ส
          </button>
        </div>
      </div>
    </div>
  )
}
