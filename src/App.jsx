
import {  useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./conponent/Layout";
import Dashboard from "./page/Dashboard/Dashboard";
import Products from "./page/Product/Product";
import Order from "./page/Order/Order";
import Deliverys from "./page/Delivery/Delivery";
import Customers from "./page/Customer/Customer";
import Accounts from "./page/Account/Accounts";
import { Addorders } from "./page/Order/Addorders";
import { Addproduct } from "./page/Product/Addproduct";
import { Adddelivery } from "./page/Delivery/Adddelivery";
import { Addcustomer } from "./page/Customer/Addcustomer";
import { Login } from "./page/Login";
import { DetailPD } from "./page/Product/DetailPD";

function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken('11')
  }, []);

  if (token === "") return <Login setToken={setToken} />;
  else 
    return (
      <div>
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/Product" element={<Products />} />
              <Route path="/Order" element={<Order />} />
              <Route path="/Delivery" element={<Deliverys />} />
              <Route path="/Customer" element={<Customers />} />
              <Route path="/Accounts" element={<Accounts />} />
              <Route path="/Addorders" element={<Addorders />} />
              <Route path="/Addproduct" element={<Addproduct />} />
              <Route path="/Adddelivery" element={<Adddelivery />} />
              <Route path="/Addcustomer" element={<Addcustomer />} />
              <Route path="/DetailPD" element={<DetailPD />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
}

export default App;
