import "../conponent/style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { AppContext } from "./AppContext";

export const Headers = ({ setToken }) => {
  const Logout = () => {
    setToken('')
  }
  const { pageName } = useContext(AppContext)
  return (
    <Container>
      <div className="Header">
        {pageName}
        <div className="btn-account">
          <button type="button" className="btn btn-outline-danger " onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </Container>
  );
};
