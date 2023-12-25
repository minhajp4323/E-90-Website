import React, { useContext, useRef, useState } from "react";
import { Button, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Data } from "../../Main";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { userData, setLogin, setLoginUser } = useContext(Data);
  const navigate = useNavigate();
  const user = useRef();
  const pass = useRef();

  const logins = (e) => {
    e.preventDefault();

    const username = user.current.value;
    const password = pass.current.value;

    const users = userData.find(
      (item) => item.userName === username && item.password === password
    );
    if (users) {
      setLogin(true);
      Toast.success("Thank you for login");
      navigate("/");
      setLoginUser(users);
    } else {
      Toast.error("user not found");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="login-content">
          <h3 className="login-title">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              required
              ref={user}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              required
              ref={pass}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={logins} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot text-right mt-2">
            Not a member? <a href="/signin">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
