import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../src/App";
import "../styles/SignIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({ email: "", password: "" });
  const [verified, setVerified] = useState(true);
  const subBtn = useRef(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const FormData = {
      email: data.email,
      password: data.password,
    };

    const response = await fetch("http://localhost:2000/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (response.status == 200) {
      document.cookie = `token=${response.token};max-age=2332332;`;
      setUser((prev) => ({
        ...prev,
        ["token"]: response.token,
        ["name"]: response.name,
      }));
      
      console.log(user,response.token);

      subBtn.current.classList.remove("invalid");
      subBtn.current.classList.add("verified");
      subBtn.current.innerText = "verified";

      setTimeout(() => {
        location.href = "/";
      }, 1000);
    } else if (response.status == 404) {
      subBtn.current.classList.remove("verified");
      subBtn.current.classList.add("invalid");
      subBtn.current.innerText = "retry";
    } else if (response.status == 401) {
      subBtn.current.classList.remove("verified");
      subBtn.current.classList.add("invalid");
      subBtn.current.innerText = "Not Verified";
      setVerified(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="SignInParent">
        <div className="wrapper">
          <div className="left">
            <img src={"/png/bust-mask-12.png"} width={"100%"} />
          </div>
          <div className="right">
            <form className="signInForm" onSubmit={HandleSubmit}>
              <div className="title">Sign In</div>
              <div className="email">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  id=""
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="pass">
                <span>Password</span>
                <input
                  type="text"
                  name="password"
                  id=""
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="submit">
                <button className="" ref={subBtn} type="submit">
                  Verify
                </button>
              </div>
            </form>
              <div className="etc">
                <span key={1}>
                  <Link to={"/ForgetPassword"}>Forgot</Link> password ?
                </span>
                {verified
                  ? []
                  : [
                      <span key={2}>
                        Not Verified ? <Link to={"/Verify"}>Verify</Link> now
                      </span>,
                    ]}
                <span key={3}>
                  Don't have an account 
                  {" "}
                  <Link to={"/Register"}>
                    SignUp
                  </Link>
                </span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
