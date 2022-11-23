import React from "react";
import "./Frontpagecard.css";

function Frontpagecard() {
  return (
    <div className="cardContainer">
      <div className="boxBorder"></div>
      <div className="loginBox">
        <h2>Welcome to the Grid</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          incidunt quos molestiae quisquam molestias? Architecto.
        </p>
        <div className="buttonContainer">
          <button className="loginButton">Browse</button>
          <button className="loginButton">Sign Up</button>
          <button className="loginButton">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Frontpagecard;
