import { useEffect, useState } from "react";
import { IMovie } from "./Interfaces";
import { getOptions } from "../Constants/Api";
import Carousel from "../../helper components/Carousel";

const NowPlayingFullList = () => {
  const [nowPlayingList, setNowPlayingList] = useState<IMovie[]>();

  const getNowPlayingData = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN",
      getOptions
    )
      .then((response) => response.json())
      .then((response) => setNowPlayingList(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingData();
  }, []);

  return (
    <div>{nowPlayingList && <Carousel moviesList={nowPlayingList} />}</div>
  );
};

export default NowPlayingFullList;
