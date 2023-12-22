import React from "react";
import { useState } from "react";
import Validation from "./Validation";

function Signin() {
  const [values, setValues] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };
  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleValidation} className="signin-form">
        <div className="signin-content">
          <h3 className="signin-title">SignIn</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username.."
              required
              onChange={handleInput}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email.. "
              required
              onChange={handleInput}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              onChange={handleInput}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          </div>
          <div className="form-group mt-3">
            <label>Re-enter Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              required
              onChange={handleInput}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

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
