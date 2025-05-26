import React from 'react'
import { Link } from 'react-router-dom';
const Account = () => { 
    const profile = {
        empId: "EMP004",
        empName: "Natee",
        department: "IT",
        cardId: "100000000003",
        email: "natee.it@spumail.net",
        tel: "0834567893",
        roles: "Emp",
        status: "active",
        firstTrainingDate: "2025-03-01T00:00:00.000Z",
        expiryDate: "2026-03-01T00:00:00.000Z",
    };

    return (
        <div>
            {/* <Link to="/Course">
                <button type="button" class="btn btn-outline-secondary">{"ย้อนนกลับ"}</button></Link> */}
            <div className="w-full drop-shadow-lg bg-white p-6 rounded flex flex-col md:flex-row mb-[29px] mt-2">
                <div className="flex flex-col items-center w-full md:w-1/3 border-r border-gray-200 pr-6">
                    <img
                        src="https://via.placeholder.com/120"
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-1">{profile.empName}</h2>
                    <p className="text-base text-gray-700 mb-1">รหัสพนักงาน: {profile.empId}</p>
                    <p className="text-base text-gray-700 mb-1">อีเมล: {profile.email}</p>
                    <p className="text-base text-gray-700 mb-1">เบอร์โทร: {profile.tel}</p>
                    <p className="text-base text-gray-700">เลขบัตร: {profile.cardId}</p>
                </div>

                {/* ขวา: ข้อมูลทั่วไป */}
                <div className="w-full md:w-2/3 pl-6 mt-6 md:mt-0">
                    <h3 className="text-2xl font-semibold mb-4">ข้อมูลทั่วไป</h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-base">
                        <div className="font-medium">แผนก:</div>
                        <div>{profile.department}</div>

                        <div className="font-medium">บทบาท:</div>
                        <div>{profile.roles}</div>

                        <div className="font-medium">สถานะ:</div>
                        <div>{profile.status}</div>

                        <div className="font-medium">วันเริ่มอบรม:</div>
                        <div>{new Date(profile.firstTrainingDate).toLocaleDateString()}</div>

                        <div className="font-medium">วันหมดอายุ:</div>
                        <div>{new Date(profile.expiryDate).toLocaleDateString()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account