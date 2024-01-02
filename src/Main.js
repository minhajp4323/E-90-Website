import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Components/Home";
import Login from "./Components/Registration/Login";
import Signin from "./Components/Registration/Signin";
import Shop from "./Components/Products/Shop";
import { Product } from "./Components/Products/PruductsList";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import ViewProduct from "./Components/Products/ViewProduct";
import Cart from "./Components/Cart";

export const Data = createContext();

function Main() {
  const [userData, setUserData] = useState([
    {
      userName: "Minhaj",
      emailId: "minhajsam1233@gmail.com",
      phoneNumber: "9846564323",
      password: "1234567890",
      confirmpassword: "1234567890",
      cart: [],
    },
  ]);
  const [login, setLogin] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [product, setProduct] = useState(Product);
  const [cart, setCart] = useState();
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
          product,
          setProduct,
        }}
      >
        <Toaster position="top-center" />
        <MainNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Signin /> */}
        <Footer />
      </Data.Provider>
    </div>
  );
}

export default Main;
