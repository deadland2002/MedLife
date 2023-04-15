import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../src/App";
import "../styles/SignIn.css";
import { Link, useNavigate } from "react-router-dom";

const Verify = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({ email: "", password: "", otp: "" });
  const [isVerified, setIsVerified] = useState(false);
  const subBtn = useRef(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const FormData = {
      email: data.email,
      password: data.password,
    };

    const response = await fetch("http://localhost:2000/Verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (response.status == 200) {

      subBtn.current.classList.remove("invalid");
      subBtn.current.classList.add("verified");
      subBtn.current.innerText = "verified";

      setTimeout(() => {
        location.href = "/SignIn";
      }, 1000);

    } else if (response.status == 203) {
      subBtn.current.classList.remove("verified");
      subBtn.current.classList.add("invalid");
      subBtn.current.innerText = "retry";
    } else if (response.status == 201) {
      setIsVerified(true);
    }

    console.log(response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="SignInParent">
        <div className="wrapper">
          <div className="right">
            {!isVerified
              ? [
                  <form className="signInForm" onSubmit={HandleSubmit}>
                    <div className="title">Verify</div>
                    <div className="email">
                      <span>Email</span>
                      <input
                        type="text"
                        name="email"
                        id="1"
                        onChange={handleChange}
                        required
                        autoFocus
                        value={data.email}
                      />
                    </div>
                    <div className="pass">
                      <span>Password</span>
                      <input
                        type="text"
                        name="password"
                        id="2"
                        onChange={handleChange}
                        required
                        value={data.password}
                      />
                    </div>
                    <div className="submit">
                      <button className="" ref={subBtn} type="submit">
                        Verify
                      </button>
                    </div>
                  </form>,
                ]
              : [
                  <form className="signInForm" onSubmit={HandleSubmit}>
                    <div className="title">Verify</div>
                    <div className="email">
                      <span>Otp</span>
                      <input
                        type="text"
                        name="otp"
                        id="3"
                        onChange={handleChange}
                        required
                        autoFocus
                        value={data.otp}
                      />
                    </div>
                    <div className="submit">
                      <button className="" ref={subBtn} type="submit">
                        Verify
                      </button>
                    </div>
                  </form>,
                ]}

            <div className="etc">
              <span>
                <Link to={"/ForgetPassword"}>Forgot</Link> password ?
              </span>
              <span>
                Don't have an account <Link to={"/Register"}>SignUp</Link>
              </span>
            </div>
          </div>
          <div className="left">IMG</div>
        </div>
      </div>
    </>
  );
};

export default Verify;
