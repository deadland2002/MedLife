import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../src/App";
import { useContext } from "react";
import "../styles/Nav.css";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <ul className="navParent">
      <div className="">Logo</div>
      <div className="rightDiv">
        <Link className="navLink" key="1" to={"/"}>
          Home
        </Link>
        <Link className="navLink" key="2" to={"/Appointment"}>
          Appointment
        </Link>
        <Link className="navLink" key="3" to={"/Services"}>
          Services
        </Link>
        <Link className="navLink" key="4" to={"/FAQ"}>
          FAQ
        </Link>
        {user
          ? [
              <Link to={"/Account"} key="5">
                Account
              </Link>,
            ]
          : [
              <Link className="SignIn navLink" to={"/SignIn"} key="5">
                SignIn
              </Link>,
            ]}
      </div>
    </ul>
  );
};

export default Navbar;
