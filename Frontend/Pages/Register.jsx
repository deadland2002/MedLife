import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../src/App";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    fname: "",
    sname: "",
    phone: "",
    email: "",
    password: "",
    rpassword: "",
  });
  const [passStrength, setPassStrength] = useState({
    desc: "",
    color: "",
    len5: false,
    len10: false,
    number: false,
    small: false,
    capital: false,
    special: false,
    level: 0,
  });
  const subBtn = useRef(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/SignUp", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res=>res.json());


    if(response.status == 200){
      subBtn.current.classList.remove("invalid");
      subBtn.current.classList.add("verified");
      subBtn.current.innerText = "verified";
      setTimeout(()=>{
        location.href="/SignIn";
      },1000)
    }else if(response.status == 404){
      subBtn.current.classList.remove("verified");
      subBtn.current.classList.add("invalid");
      subBtn.current.innerText = "retry";
    }




  };

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }

  function containsNumbers(str) {
    return /[0-9]/.test(str);
  }

  function containsSpecial(str) {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(str);
  }

  function displyPasswordStat(value) {
    var temp = 0;
    setPassStrength((prev) => ({
      ...prev,
      len5: false,
      len10: false,
      number: false,
      small: false,
      capital: false,
      special: false,
      level: 0,
    }));
    if (containsUppercase(value)) {
      temp++;
      setPassStrength((prev) => ({ ...prev, level: temp, capital: true }));
    }
    if (containsLowercase(value)) {
      temp++;
      setPassStrength((prev) => ({ ...prev, level: temp, small: true }));
    }
    if (containsSpecial(value)) {
      temp++;
      setPassStrength((prev) => ({ ...prev, level: temp, special: true }));
    }
    if (containsNumbers(value)) {
      temp++;
      setPassStrength((prev) => ({ ...prev, level: temp, number: true }));
    }
    if (value.length >= 5) {
      temp++;
      setPassStrength((prev) => ({ ...prev, level: temp, len5: true }));
    }
    if (value.length >= 10) {
      temp++;
      setPassStrength((prev) => ({ ...prev, level: temp, len10: true }));
    }

    switch (temp) {
      case 0:
        setPassStrength((prev) => ({ ...prev, desc: "", color: "" }));
        break;
      case 1:
        setPassStrength((prev) => ({
          ...prev,
          desc: "very weak",
          color: "#f02e2e",
        }));
        break;
      case 2:
        setPassStrength((prev) => ({
          ...prev,
          desc: "weak",
          color: "#df7e43",
        }));
        break;
      case 3:
        setPassStrength((prev) => ({
          ...prev,
          desc: "need improvement",
          color: "#c317f9",
        }));
        break;
      case 4:
        setPassStrength((prev) => ({
          ...prev,
          desc: "moderate",
          color: "#0188bd",
        }));
        break;
      case 5:
        setPassStrength((prev) => ({
          ...prev,
          desc: "good",
          color: "#0bbb93",
        }));
        break;
      case 6:
        setPassStrength((prev) => ({
          ...prev,
          desc: "perfect",
          color: "#0ab700",
        }));
        break;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    var str = "12121sas";

    if (name == "password") {
      displyPasswordStat(value);
    }
  };

  return (
    <>
      <div className="SignUpParent">
        <div className="wrapper">
          <div className="right">
            <form className="signUpForm" onSubmit={HandleSubmit}>
              <div className="title">Sign Up</div>
              <div className="name">
                <span>First Name</span>
                <input
                  type="text"
                  name="fname"
                  id="1"
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="name">
                <span>Second Name</span>
                <input
                  type="text"
                  name="sname"
                  id="2"
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="phone">
                <span>Phone</span>
                <input
                  type="text"
                  name="phone"
                  id="3"
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="email">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  id="3"
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="pass">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  id="4"
                  onChange={handleChange}
                  required
                />
              </div>
              {passStrength.level > 0
                ? [
                    <div className="strength">
                      <span>Password Strength : </span>{" "}
                      <span style={{ color: passStrength.color }}>
                        {passStrength.desc}
                      </span>
                    </div>,
                  ]
                : []}

              {passStrength.level < 6 && passStrength.level >= 1
                ? [
                    <div className="strengthAnnote">
                      <span
                        style={{
                          color: passStrength.capital ? "#0ab700" : "#5a5a5a",
                        }}
                      >
                        Contains Capital
                      </span>
                      <span
                        style={{
                          color: passStrength.small ? "#0ab700" : "#5a5a5a",
                        }}
                      >
                        Contains Small
                      </span>
                      <span
                        style={{
                          color: passStrength.special ? "#0ab700" : "#5a5a5a",
                        }}
                      >
                        Contains Special
                      </span>
                      <span
                        style={{
                          color: passStrength.number ? "#0ab700" : "#5a5a5a",
                        }}
                      >
                        Contais Number
                      </span>
                      <span
                        style={{
                          color: passStrength.len5 ? "#0ab700" : "#5a5a5a",
                        }}
                      >
                        Character more than 5
                      </span>
                      <span
                        style={{
                          color: passStrength.len10 ? "#0ab700" : "#5a5a5a",
                        }}
                      >
                        Character more than 10
                      </span>
                    </div>,
                  ]
                : []}

              <div className="pass">
                <span>Confirm Password</span>
                <input
                  type="password"
                  name="rpassword"
                  id="5"
                  onChange={handleChange}
                  required
                />
              </div>

              {data.rpassword.length > 0 && data.rpassword != data.password
                ? [
                  <div>
                    <span>Password does not match</span>
                  </div>
                ]
                : []}

              <div className="submit">
                <button className="" ref={subBtn} type="submit">
                  Verify
                </button>
              </div>
              <div className="etc">
                <span>
                  {" "}
                  Already have an account <Link to={"/SignIn"}>
                    SignIn
                  </Link>{" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
