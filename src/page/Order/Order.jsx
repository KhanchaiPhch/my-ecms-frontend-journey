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
    </div>
  );
};

export default Order;
