import React, { useEffect, useState } from "react";
import Location from "../data/Location.json";
import { Department } from "../data/Department.js";
import "../styles/Appointment.css";
import { useSearchParams } from "react-router-dom";

const AppointmentComponent = ({ user, setUser }) => {
  const [Query, setQuery] = useState({
    state: "",
    city: "",
    department: "",
    Date_of_Appointment: "",
  });
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const State = searchParams.get("State");
    const City = searchParams.get("City");
    const Department = searchParams.get("Department");
    const Date = searchParams.get("Date");

    if (State!="null" && City && Department && Date) {
      setQuery((prev) => ({
        ...prev,
        ["state"]: State,
        ["city"]: City,
        ["department"]: Department,
        ["Date_of_Appointment"]: Date,
      }));
      console.log(State,City,Department,Date);
    }

    setQuery((prev) => ({ ...prev, token: user.token }));
  }, []);

  useEffect(() => {
    setSearchParams(
      `State=${Query.state}&City=${Query.city}&Department=${Query.department}&Date=${Query.Date_of_Appointment}`
    );
  }, [Query]);

  const [result, setResult] = useState({ state: false, value: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const GetToday = (offset = 0) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return (today = yyyy + "-" + mm + "-" + dd);
  };

  const handleSearch = async (e) => {
    if (
      Query.city &&
      Query.state &&
      Query.department &&
      Query.Date_of_Appointment
    ) {
      const response = await fetch(
        "http://localhost:2000/api/SearchAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Query),
        }
      ).then((res) => res.json());

      if (response.status == 200) {
        setResult({ state: true, value: [...response.result] });
      } else if (response.status == 401) {
        // location.reload();
      }

      console.log(response, Query);
    }
  };

  const handleBookAppointment = async (obj) => {
    if (obj) {
      const response = await fetch(
        "http://localhost:2000/api/BookAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ID: obj[0],
            token: user.token,
            Day_Time: obj[4],
            Date_of_Appointment: obj[6],
            City_of_Appointment: obj[7],
          }),
        }
      ).then((res) => res.json());

      console.log(response);
    }
  };

  return (
    <>
      <div key={3423} className="AppointmentParent">
        <div className="title" key={2}>
          Welcome {user.FName}
        </div>

        <div className="wrapper">
          <div className="selectParent" key={3}>
            <div className="location" key={4}>
              <input
                key={30}
                onChange={handleChange}
                name="state"
                list="states"
                placeholder="State"
                value={Query.state}
              />
              <datalist id="states">
                {Object.keys(Location).map((single, index) => {
                  return <option value={single} key={single} />;
                })}
              </datalist>
            </div>

            <div className="city" key={5}>
              <input
                key={20}
                onChange={handleChange}
                name="city"
                list="cities"
                placeholder="City"
                value={Query.city}
                disabled={Query.state ? false : true}
              />
              <datalist id="cities">
                {Location[Query.state]
                  ? Location[Query.state].map((single, index) => {
                      return <option value={single} key={single} />;
                    })
                  : []}
              </datalist>
            </div>

            <div className="Department" key={6}>
              <input
                key={60}
                onChange={handleChange}
                name="department"
                list="department"
                placeholder="Department"
                value={Query.department}
                disabled={Query.city ? false : true}
              />
              <datalist id="department">
                {Department.map((single, index) => {
                  return <option value={single} key={single} />;
                })}
              </datalist>
            </div>

            <div key={80}>
              <input
                key={23423}
                type="date"
                name="Date_of_Appointment"
                onChange={handleChange}
                value={Query.Date_of_Appointment}
                min={GetToday()}
              />
            </div>

            <div key={42342} className="search">
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>

        {result.state
          ? result.value.length == 0
            ? [
                <div className="noting">
                  Looks Like there are no available slots
                </div>,
              ]
            : [
                <div className="resultDisplay" key={34534}>
                  <div key={756345} className="appointmentList">
                    <span>Doctor Name</span>
                    <span>Department</span>
                    <span>Time Slot</span>
                    <span>Available Slots</span>
                    <span></span>
                  </div>
                  {result.value.map((single) => {
                    return (
                      <div key={single[0]} className="appointmentList">
                        <span>{single[1] + " " + single[2]}</span>
                        <span>{single[3]}</span>
                        <span>{single[4][1]}</span>
                        <span>{single[5]}</span>
                        <span
                          className={single[8] ? "booked" : "booknow"}
                          onClick={() => {
                            !single[8] ? handleBookAppointment(single) : [];
                          }}
                        >
                          {single[8] ? "Booked" : "Book"}
                        </span>
                      </div>
                    );
                  })}
                </div>,
              ]
          : []}
      </div>
    </>
  );
};

export default AppointmentComponent;
