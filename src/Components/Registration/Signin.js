import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../../Main";

function Signin() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(Data);
  return (
    <div className="signin-container">
      <form className="signin-form">
        <div className="signin-content">
          <h3 className="signin-title">SignIn</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username.."
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email.. "
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Re-enter Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p className="forgot text-right mt-2">
              Already have an account <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
