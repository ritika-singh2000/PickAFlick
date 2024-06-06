import React, { useState } from "react";
import { IMovie } from "../components/Explore/Interfaces";
import { imgPrefixURLPath } from "../components/Constants/Api";
import {
  faStar,
  faThumbsUp,
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CarouselCard = ({ movie }: { movie: IMovie }) => {
  const imgURL = movie?.poster_path
    ? `${imgPrefixURLPath}${movie.poster_path}`
    : "";
  return (
    <Link
      className="w-[300px] h-full rounded-xl overflow-hidden flex-shrink-0"
      to={`/movies/${movie?.id}`}
    >
      <img
        src={imgURL}
        alt={movie?.title || "No title"}
        className="h-[450px]"
      />
      <div className="w-full p-2 bg-black text-white font-semibold flex justify-between">
        <div className="flex gap-x-2 items-center justify-between">
          <FontAwesomeIcon icon={faStar} className="text-blue-700" />
          {(Math.round(movie?.vote_average * 10) / 10).toFixed(1)}
        </div>
        <div className="flex gap-x-2 items-center justify-between">
          <FontAwesomeIcon icon={faThumbsUp} className="text-blue-700" />
          {movie?.vote_count}
        </div>
      </div>
    </Link>
  );
};

const Carousel = ({ moviesList }: { moviesList: IMovie[] }) => {
  const itemsPerPage = 5;
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, moviesList.length - itemsPerPage)
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };
  const currentMovies = moviesList.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="flex flex-col my-8 mx-4 ">
      <div className="text-2xl my-2 font-medium text-gray-700">
        Trending Movies
      </div>
      <div className="flex  justify-center overflow-hidden">
        <div className=" relative">
          <div className="flex gap-x-6 transition-transform duration-500 ease-in-out transform ">
            {currentMovies.map((movie) => (
              <CarouselCard key={movie.id} movie={movie} />
            ))}
          </div>

          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 "
          >
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              size="3x"
              color="#718096"
              className="opacity-50"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= moviesList.length}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2"
          >
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              size="3x"
              color="#718096"
              className="opacity-50"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
