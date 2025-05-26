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
      <div className="container-Login">
        <div className="Login">
          <Form className="from">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User</Form.Label>
              <Form.Control type="email" placeholder="Username" onChange={e => setUsername(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button
              onClick={login}
              type="submit"
              className="btn-button-login   btn btn-secondary"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
};
