import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Components/Home";
import Login from "./Components/Registration/Login";
import Signin from "./Components/Registration/Signin";
import Products from "./Components/Products/Products"
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Data = createContext();

function Main() {
  const [userData, setUserData] = useState([]);
  const [login, setLogin] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  return (
    <div>
      <Data.Provider
        value={{
          userData,
          setUserData,
          login,
          setLogin,
          loginUser,
          setLoginUser,
        }}
      >
        <Toaster position="top-center" />
        <MainNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="products" element={<Products /> } />
        </Routes>
        {/* <Signin /> */}
        <Footer />
      </Data.Provider>
    </div>
  );
}

export default Main;
