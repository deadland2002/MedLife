import React, { useState } from "react";
import Location from "../data/Location.json";
import { Department } from "../data/Department.js";
import "../styles/Appointment.css";

const AppointmentComponent = ({ user, setUser }) => {
  const [Query, setQuery] = useState({ state: "", city: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const GetToday = (offset=0) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return today = yyyy + "-" + mm + "-" + dd;
  };

  return (
    <>
      <div key={1} className="AppointmentParent">
        <div className="title" key={2}>
          Welcome {user.FName}
        </div>

        <div className="selectParent" key={3}>
          <div className="location" key={4}>
            <input
              key={30}
              onChange={handleChange}
              name="state"
              list="states"
              placeholder="State"
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
              disabled={Query.state?false:true}
            />
            <datalist id="cities">
              {Location[Query.state]
                ? Location[Query.state].map((single, index) => {
                    return <option value={single} key={single} />;
                  })
                : []}
            </datalist>
          </div>

          <div className="city" key={6}>
            <input
              key={60}
              onChange={handleChange}
              name="department"
              list="department"
              placeholder="Department"
              disabled={Query.city?false:true}
            />
            <datalist id="department">
              {Department.map((single, index) => {
                return <option value={single} key={single} />;
              })}
            </datalist>
          </div>

          <input type="date" min={GetToday()}/>
        </div>
      </div>
    </>
  );
};

export default AppointmentComponent;
