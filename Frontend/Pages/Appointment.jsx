import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../src/App.jsx";
import { SignInRequired, AppointmentComponent } from "../Components";

const Appointment = () => {
  const { user, setUser } = useContext(UserContext);
  const [isFetching, setIfFetching] = useState(true);

  useEffect(() => {
    var token = document.cookie.split(";");

    token = token.filter((item) => {
      return item.length >= 5;
    });

    async function validateToken(temp) {
      try {
        const response = await fetch("http://localhost:2000/VerifyToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: temp[1] }),
        }).then((res) => res.json());

        if (response.status == 200) {
          setUser((prev) => ({
            ...prev,
            ["token"]: temp[1],
            ...response.user,
          }));
        }
        console.log(response);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
      setIfFetching(false);
    }

    if (token && token.length != 0) {
      for (var i of token) {
        if (i.startsWith("token=")) {
          var temp = i.split("=");
          validateToken(temp);
        }
      }
    } else {
      setIfFetching(false);
    }
  }, []);

  return (
    <>
      {!isFetching && !user
        ? [
            <div key={1}>
              <SignInRequired />
            </div>,
          ]
        : []}

      {isFetching
        ? [<div key={2}>isFetching</div>]
        : !isFetching && user
        ? [<AppointmentComponent user={user} setUser={setUser} />]
        : []}
    </>
  );
};

export default Appointment;
