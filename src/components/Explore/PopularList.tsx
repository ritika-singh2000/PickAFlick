import React, { useEffect, useState } from "react";
import { IMovie } from "./Interfaces";
import { getOptions } from "../Constants/Api";
import Carousel from "../../helper components/Carousel";

const PopularList = () => {
  const [popularMoviesList, setPopularMoviesList] = useState<IMovie[]>();
  const getPopularMovies = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=IN",
      getOptions
    )
      .then((response) => response.json())
      .then((response) => setPopularMoviesList(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  console.log("popularMoviesList", popularMoviesList);
  return (
    <div>
      {popularMoviesList && <Carousel moviesList={popularMoviesList} />}
    </div>
  );
};

export default PopularList;
