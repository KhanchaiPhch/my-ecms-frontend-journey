import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style/Login.css";
import axios from "axios";
import { useState } from "react";

export const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันไม่ให้รีเฟรชหน้า

    try {
      const response = await axios.post("http://localhost:9999/auth/login", {
        "username": username,
        "password": password
      }, {
        headers: {
          "content-type": "application/json"
        }
      })
      // const res = JSON.stringify(response.data.data, null, 2)
      //debug
      // console.log(`Data for Login ${response.data.data.token}`)

      if (response.data.code != "200") {
        throw new Error("Invalid email or password");
      }
      const token =  response.data.data.token
      sessionStorage.setItem("token", token)
      setToken(token);

    } catch (error) {
      setErrorMessage(`Login error: ${error}`);
    }

  };
  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-gray-50 rounded shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-1 text-center">ECMS</h1>
        <h3 className="text-gray-600 text-center mb-8 font-medium tracking-wide">
          Employee Course Management System
        </h3>

        {errorMessage && (
          <div
            className="
          error-message border-solid bg-red-100
          text-danger 
          d-flex justify-content-center mt-2 py-2">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <div className="mb-6">
            <label htmlFor="Username" className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold shadow-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

};
