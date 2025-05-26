import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import CardItem from "../../../conponent/Card";

const Dashboard = () => {
  const [Dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token")
      try {
        const response = await axios.get("http://localhost:9999/dashboard/dashboard", {
          headers: {
            // Bearer
            "authorization": token, // หรือใช้ token จาก props/context
          },
        });
        setDashboard(response.data);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      }
    };
    fetchData();
  }, [])

  console.log(Dashboard)

  const cardData = [
    { title: "คอร์สทั้งหมด", number: Dashboard?.data?.courses || 0 },
    { title: "คำขอเบิกค่าอบรม", number: Dashboard?.data?.refunds || 0 },
    { title: "คำขอถอนคอร์ส", number: Dashboard?.data?.courseRequests || 0 },
    { title: "ผลลัพธ์การอบรมของพนักงาน", number: Dashboard?.data?.courseResults || 0 },
    { title: "พนักงานทั้งหมด", number: Dashboard?.data?.allEmps || 0 },
    { title: "พนักงานที่ยังทำงานอยู่", number: Dashboard?.data?.empActives || 0 },
    { title: "พนักงานที่ลาออกแล้ว", number: Dashboard?.data?.empInactives || 0 },
  ];

  return (
    <>
      {/* <Container> */}
      {/* Debug border-2 border-rose-500 */}
      <div className="flex flex-wrap justify-between gap-3">
        {cardData.map((item, index) => (
          <CardItem key={index} title={item.title} number={item.number} />
        ))}
      </div>
      {/* </Container> */}
    </ >
  );
};

export default Dashboard;
