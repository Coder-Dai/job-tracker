import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Tracker from "./components/Tracker";
import { MyAccount } from "./components/MyAccount";
import { useState } from "react";
import UserContext from "./contexts/userContext";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ userId, setUserId }}>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
