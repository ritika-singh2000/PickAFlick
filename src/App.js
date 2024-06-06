import { useState } from "react";
import "./App.css";
import LandingScreen from "./components/LoginScreen/LandingScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingScreen />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
