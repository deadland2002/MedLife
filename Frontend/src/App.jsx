import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import "./App.css";
import { Navbar ,Footer} from "../Components";
import { Home, Appointment, Services, SignIn ,Register} from "../Pages";

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
