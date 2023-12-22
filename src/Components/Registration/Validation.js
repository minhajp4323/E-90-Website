import React from "react";

function Validation(values) {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^1s@]{2,6}$/;
  const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === " ") {
    errors.name = "Name is Required";
    
    
  }
  if (values.email === " ") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email did'nt match";
    
    
  }
  if (values.password === " ") {
    errors.password = "Password is Required";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password did'nt match";
    
    
  }
  return errors;
  

  
}

export default Validation;
