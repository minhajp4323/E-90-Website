import React from "react";
import HomeBg from "../Assets/Background.jpg";
import { Button } from "react-bootstrap";
import "./Home.css"


function Home() {
  return (
    <>
      <div className="home">
        <div className="home-first">
          <img className="home-bg" src={HomeBg} />
          <h1>E90 the men's steps</h1>

        </div>
        <div className="home-content">
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

export default Home;
