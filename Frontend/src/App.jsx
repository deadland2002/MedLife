import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import { Navbar, Footer } from "../Components";
import { Home, Appointment, Services, SignIn, Register,Verify } from "../Pages";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Navbar />
          <div className="Mount">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Appointment" element={<Appointment />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Verify" element={<Verify />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export { UserContext };

export default App;
