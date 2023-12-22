import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Components/Home";
import Login from "./Components/Registration/Login";
import Signin from "./Components/Registration/Signin";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function Main() {
  return (
    <div>
      <MainNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login /> } />
        <Route path="signin" element={<Signin /> } />
      </Routes>
      {/* <Signin /> */}
      {/* <Footer /> */}
      
    </div>
  );
}

export default Main;
