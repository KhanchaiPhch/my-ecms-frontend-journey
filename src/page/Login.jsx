import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style/Login.css";

export const Login = ({ setToken }) => {
  const login = () => {
    setToken("123");
  };

  return (
    <div className="container-Login">
      <div className="Login">
        <Form className="from">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User</Form.Label>
            <Form.Control type="email" placeholder="Username" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
