import React from "react";
import { useNavigate } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hello">Hello World!!!</div>
      <div className="home">
        <h1>Connect With Other Techies</h1>
        <button className="navigate" onClick={() => navigate("user")}>
          <div className="sign">
            <ImArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
