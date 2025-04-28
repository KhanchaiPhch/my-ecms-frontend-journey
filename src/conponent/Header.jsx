// import "../conponent/style.css";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';  // import bootstrap
import { useContext } from "react";
import { AppContext } from "./AppContext";

export const Headers = ({ setToken }) => {
  const Logout = () => {
    setToken('')
  }
  const { pageName } = useContext(AppContext)
  return (
    <Container>
      <div className="drop-shadow-lg bg-white p-4 rounded flex items-center mt-[24px] mb-[40px]">
        <div className='text-lg font-semibold text-gray-600'>
          {pageName}
        </div>
        <div className="btn-account">
          <button type="button" className="btn btn-outline-danger " onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </Container>
  );
};
