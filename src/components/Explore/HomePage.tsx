import React, { useEffect, useState } from "react";
import NowPlayingList from "./NowPlayingList";
import { authHeaders } from "../Constants/Api";
import { IMovie } from "./Interfaces";
import PopularList from "./PopularList";

const HomePage = () => {
  return (
    <div>
      <NowPlayingList />
      <PopularList />
    </div>
  );
};

export default HomePage;
