import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Tracker from "./components/Tracker";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
