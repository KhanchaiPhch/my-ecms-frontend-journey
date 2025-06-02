import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style/Login.css";
import axios from "axios";
import { useState } from "react";

export const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
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
      const token = response.data.data.token
      sessionStorage.setItem("token", token)
      setToken(token);
    } catch (error) {
      console.error("Error fetching Course:", error);
    }

  };
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded shadow-xl p-6">
        <h1>ECMS</h1>
        <h3>Employee Course Menagement System</h3>

        <form>
          {/* Username input */}
          <div className="mb-4">
            <label htmlFor="Username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            onClick={login}
          // onClick={login()} error 
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};
