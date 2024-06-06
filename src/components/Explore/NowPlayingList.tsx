import { useEffect, useState } from "react";
import { authHeaders, getOptions } from "../Constants/Api";
import { IMovie } from "./Interfaces";
import NowPlayingCarousel from "./NowPlayingCarousel";

const NowPlayingList = () => {
  const [data, setData] = useState<IMovie[] | undefined>();
  const [nowPlayingList, setNowPlayingList] = useState<IMovie[]>();

  const getNowPlayingData = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN",
      getOptions
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingData();
  }, []);
  useEffect(() => {
    const hindiMovies = data?.filter((movie) => {
      return movie.original_language === "hi" && movie.backdrop_path;
    });
    if (hindiMovies) {
      setNowPlayingList(hindiMovies);
    } else setNowPlayingList([]);
  }, [data]);
  console.log("nowPlayingListnowPlayingList", nowPlayingList);
  return (
    <div>
      {nowPlayingList && <NowPlayingCarousel nowPlayingList={nowPlayingList} />}
    </div>
  );
};

export default NowPlayingList;
