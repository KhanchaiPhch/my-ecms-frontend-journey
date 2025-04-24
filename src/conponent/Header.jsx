import "../conponent/style.css";

export const Headers = ({setToken}) => {
    const Logout = () => {
        setToken('')
    }

  return (
    <div className="Header">
      <div className="btn-account">
        <button type="button" className="btn btn-outline-danger " onClick={Logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
