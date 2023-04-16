import React from "react";
import "../styles/SignInRequired.css";
import { Link } from "react-router-dom";

const SignInRequired = () => {
  return (
    <div className="SignInRequiredParent">
      <div className="wrapper">
        <span>Ohh... Looks like you need to </span> <Link to={"/SignIn"}> SignIn </Link>
        <span> to Continue</span>
      </div>
    </div>
  );
};

export default SignInRequired;
