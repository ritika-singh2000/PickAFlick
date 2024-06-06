import { useState } from "react";
import "./App.css";
import LandingScreen from "./components/LoginScreen/LandingScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./components/Explore/Explore";
import MovieDetails from "./components/Movie Details/MovieDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingScreen />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
