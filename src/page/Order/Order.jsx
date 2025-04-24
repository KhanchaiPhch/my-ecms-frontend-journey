import React, { useEffect, useState } from "react";

import "../style/Order.css";

import { fetchTodos } from "../../data/test";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Order = () => {
  const [pages, setPage] = React.useState(7);
  const [todos, setTodos] = React.useState([]);

  const [curPage, setCurPage] = React.useState(1);
  const [numPage, setNumPage] = React.useState(0);

  useEffect(() => {
    setTodos(fetchTodos);
  }, []);

  useEffect(() => {
    setNumPage(Math.ceil(todos.length / pages)); 
  }, [todos]);

  // useEffect(() => {
  //   if(numPage === 0){
  //     setCurPage(0)
  //   }else {
  //     if (numPage === 0){
  //       setCurPage(1)
  //     }else if(curPage > numPage){
  //       setCurPage(numPage)
  //     }
  //   }
  // },[numPage])

  // const handle = () => {
  //   setCurPage(todos.length / pages);
  // };

  // console.log(todos.length / pages)

  const todoList = todos.map((todo, index) => {

    const start = (curPage - 1) * pages
    const end = start + pages


    if (start <= index && end > index)
      return (
        <tr key={index} style={{ height: "50px", textAlign: "center" }}>
          <td
            style={{
              width: "230px",
              textAlign: "center",
            }}
          >
            {index + 1}
          </td>
          <td
            style={{
              width: "230px",
              textAlign: "center",
            }}
          >
            {todo.id}
          </td>
          <td
            style={{
              textAlign: "center",
            }}
          >
            {todo.title}
          </td>
          <td>
            {todo.completed ? (
              <span className="badge bg-success">done</span>
            ) : (
              <button className="btn btn-sm btn-danger">Watting</button>
            )}
          </td>
        </tr>
      );
  });

  return (
    <div>
      <h1>Order</h1>
      <div className="row  searchs ">
        <div className="input">
          <div>จำนวนสินค้าทั้งหมด</div>
          <input
            type="text"
            className="form-control"
            placeholder="searchs"
            style={{ width: "200px", fontSize: "17px" }}
          />
        </div>
        <div className="btn-button">
          <div>
            <Link to={"/Addorders"}>
              <button
                className="btn btn-secondary "
                style={{ width: "140px", fontSize: "17px" }}
              >
                เบิก
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row showorder">
        <p>ทั้งหมด</p>
        <table className="table product-tb" style={{ width: "97%" }}>
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
          <tbody>{todoList}</tbody>
        </table>
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setCurPage(1);
            }}
          >
            Frist
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              if (curPage > 1) setCurPage(curPage - 1);
            }}
          >
            Previus
          </button>
          {curPage} / {numPage}
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              if (curPage < numPage) setCurPage(curPage + 1);
            }}
          >
            Next
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setCurPage(Math.ceil(todos.length / pages));
            }}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
