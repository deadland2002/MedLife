import React, { useState } from "react";
import "../styles/Appointment.css";
import Location from "../data/Location.json";

const AppointmentComponent = ({ user, setUser }) => {
  const [state, setState] = useState("");
  const [City, setCity] = useState("");

  return (
    <>
      <div key={1} className="AppointmentParent">
        <div className="title">Welcome {user.FName}</div>

        <div className="selectParent">
          <div className="location">
            <input
              onChange={(e) => {
                setState(e.target.value);
                console.log(e.target.value);
              }}
              name="state"
              list="states"
              placeholder="select location"
            />
            <datalist id="states">
              {Object.keys(Location).map((single, index) => {
                return <option value={single} key={index} />;
              })}
            </datalist>
          </div>

          <div className="city">
            <input
              onChange={(e) => {
                setCity(e.target.value);
                console.log(e.target.value);
              }}
              name="city"
              list="cities"
              placeholder="select location"
            />
            <datalist id="cities">
              {Location[state]
                ? Location[state].map((single, index) => {
                    return <option value={single} key={index} />;
                  })
                : []}
            </datalist>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentComponent;
