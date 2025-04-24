import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Product.css";
import { fetchTodos } from "../../data/test";
import { useContext } from "react";
import { AppContext } from "../../conponent/AppContext";
import { Container } from "react-bootstrap";
const Course = () => {

  const [todos, setTodos] = React.useState([]);
  const { setPageName } = useContext(AppContext);
  useEffect(() => {
    setTodos(fetchTodos()); // เรียกเป็นฟังก์ชัน () ด้วย
  }, []);

  const mapTodos = todos.map((e, index) => (
    <tr key={index}>
      <td>{index + 1}</td> {/* ลำดับรายการ */}
      <td>{e.id}</td>
      <td>{e.title}</td>
      <td>{e.completed ? "✓" : "✗"}</td> {/* แสดง true/false แบบสวย ๆ */}
    </tr>
  ));

  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        
        <div className="row searchs">
          
          <div className="row">
            <div className="input">
              <div>รหัสคอร์ส</div>
              <input
                type="text"
                className="form-control"
                placeholder="รหัสคอร์ส"
                style={{ width: "200px", fontSize: "17px" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="input">
              <div>รหัสคอร์ส</div>
              <input
                type="text"
                className="form-control"
                placeholder="รหัสคอร์ส"
                style={{ width: "200px", fontSize: "17px" }}
              />
            </div>
          </div>
          <div className="btn-button">
            <Link to={"/AddCourse"}>
              <button
                className="btn btn-secondary"
                style={{ width: "140px", fontSize: "17px" }}
                onClick={() => {
                  setPageName("CreateCourse")
                }}
              >
                + สินค้านำเข้า
              </button>
            </Link>
          </div>
        </div>
      </Container>

    </div>
  );
};
{/* <div className="row showproduct">
        <p>ทั้งหมด</p> */}
{/* <table className="table product-tb" style={{ width: "97%" }}>
          <thead>
            <tr
              className="table-secondary"
              style={{ height: "50px", textAlign: "center" }}
            >
              <td>#</td>
              <td>รหัส</td>
              <td>ชื่อสินค้า</td>
              <td>คงเหลือ</td>
            </tr>
          </thead>
          <tbody>{mapTodos}</tbody>
        </table> */}
{/* </div> */ }

export default Course;
