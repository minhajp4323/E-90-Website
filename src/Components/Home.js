import React from "react";
import HomeBg from "../Assets/Background.jpg";
import { Button } from "react-bootstrap";
import Logo from "../Assets/Logo.PNG";
import "./Home.css";
import MainNavbar from "./MainNavbar";



function Home() {
  return (
    <>
        <MainNavbar />

      <div className="home">{/* <img className="home-bg" src={Logo}/> */}</div>
      <div className="heading">
        <h1>
          NEW WAVE STREATE
          <br /> CULTURE
        </h1>
        <button>Contact US</button>
        <button>Shop</button>
      </div>
    </>
  );
}

export default Home;
