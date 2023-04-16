import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../src/App";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { user, setUser } = useContext(UserContext);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({
    fname: "",
    sname: "",
    phone: "",
    email: "",
    password: "",
    rpassword: "",
    gender: "male",
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
  const imgLeft = useRef(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/SignUp", {
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
    } else if (response.status == 404) {
      subBtn.current.classList.remove("verified");
      subBtn.current.classList.add("invalid");
      subBtn.current.innerText = "retry";
    } else if (response.status == 405) {
      subBtn.current.classList.remove("verified");
      subBtn.current.classList.add("invalid");
      subBtn.current.innerText = "User Exist";
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
    if (name == "password") {
      displyPasswordStat(value);
    }
    console.log(data);
  };

  const handleCurrent = (ind) => {
    if (ind == -1) {
      if (current == 1) return;
      else setCurrent((prev) => prev - 1);
    } else if (ind == 1) {
      if (current == fields.length - 1) return;
      else setCurrent((prev) => prev + 1);
    }
  };

  const fields = [
    [
      <div key={3234} className="SignUpStart">
        <div>
          <span className="title">Lets get you started</span>
          <button
            onClick={() => {
              imgLeft.current.classList.add("leaveRight");
              setCurrent(1);
            }}
          >
            Next
          </button>
        </div>
      </div>,
    ],
    [
      <div key={543} className="SignUpfields">
        <div className="title">Sign Up</div>
        <div className="name">
          <span>First Name</span>
          <input
            type="text"
            name="fname"
            id="1"
            onChange={handleChange}
            value={data.fname}
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
            value={data.sname}
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
            value={data.phone}
            required
            autoFocus
          />
        </div>
        <div className="gender">
          <span>Gender</span>
          <div className="selector">
            <span className={data.gender=="male"?"selected":""} onClick={()=>{handleChange({target:{name:"gender",value:"male"}})}}>Male</span>
            <span className={data.gender=="female"?"selected":""} onClick={()=>{handleChange({target:{name:"gender",value:"female"}})}}>Female</span>
            <span className={data.gender=="other"?"selected":""} onClick={()=>{handleChange({target:{name:"gender",value:"other"}})}}>Other</span>
          </div>
        </div>
      </div>,
    ],

    [
      <div key={4543} className="SignUpfields">
        <div className="email">
          <span>Email</span>
          <input
            type="text"
            name="email"
            id="3"
            onChange={handleChange}
            value={data.email}
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
            value={data.password}
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
            value={data.rpassword}
            required
          />
        </div>

        {data.rpassword.length > 0 && data.rpassword != data.password
          ? [
              <div>
                <span>Password does not match</span>
              </div>,
            ]
          : []}
        <div className="submit">
          <button className="" ref={subBtn} type="submit">
            Verify
          </button>
        </div>
      </div>,
    ],
  ];

  return (
    <>
      <div className="SignUpParent">
        <div className="wrapper">
          <div className="left">
            <img
              ref={imgLeft}
              key={1}
              src="/png/sit-mask-3.png"
              width={"100%"}
            />
            {current >= 1
              ? data.gender == "male"
                ? [
                    <img
                      className="pngLeft"
                      src={"/png/bust-mask-1.png"}
                      key={2}
                      width={"100%"}
                    />,
                  ]
                : [
                    <img
                      className="pngLeft"
                      src={"/png/bust-mask-9.png"}
                      key={2}
                      width={"100%"}
                    />,
                  ]
              : []}
          </div>
          <div className="right">
            <form className="signUpForm" onSubmit={HandleSubmit}>
              {fields[current]}
            </form>

            {current >= 1
              ? [
                  <div key={8} className="Controls">
                    <span
                      key={10}
                      style={
                        current == 1
                          ? { display: "none" }
                          : { cursor: "pointer", opacity: 1 }
                      }
                      onClick={() => handleCurrent(-1)}
                    >
                      <img src="/icons/backArrow.png" width={"80%"} />
                    </span>
                    <span
                      key={20}
                      style={
                        current == fields.length - 1
                          ? { cursor: "not-allowed", opacity: 0.5 }
                          : { cursor: "pointer", opacity: 1 }
                      }
                      onClick={() => handleCurrent(1)}
                    >
                      <img src="/icons/forwardArrow.png" width={"80%"} />
                    </span>
                  </div>,
                ]
              : []}

            <div className="etc">
              <span>
                {" "}
                Already have an account <Link to={"/SignIn"}>SignIn</Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
