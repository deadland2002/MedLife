import React, { useContext } from "react";
import { UserContext } from "../src/App";
import "../styles/SignIn.css";

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("", {});
  };
  return (
    <>
      <div className="SignInParent">
        <div className="wrapper">
          <div className="left">IMG</div>
          <div className="right">
            <form onSubmit={HandleSubmit}>
              <input type="text" name="email" id="" />
              <input type="text" name="password" id="" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
