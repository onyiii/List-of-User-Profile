import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const User = () => {
  const disabled = {
    background: "#fff",
    color: "#ccc",
    cursor: "no-drop",
  };

  const handleClick = (event) => {
    event.currentTarget.disabled = true;
    return <div style={disabled}></div>;
  };
  const navigate = useNavigate();
  return (
    <div className="userBtn">
      <button className="navigate" onClick={() => navigate(-1)}>
        Back
      </button>

      <Link to="all-users">
        <button className="user" onClick={handleClick}>
          Click Here To See All Users
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default User;
