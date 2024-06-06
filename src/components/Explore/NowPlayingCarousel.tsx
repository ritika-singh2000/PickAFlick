import { useEffect, useState } from "react";
import { IMovie } from "./Interfaces";
import { imgPrefixURLPath } from "../Constants/Api";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NowPlayingCard = ({
  movie,
  currentindex,
  length,
  incrementCarousel,
  decrementCarousel,
}: {
  movie: IMovie;
  currentindex: number;
  length: number;
  incrementCarousel: () => void;
  decrementCarousel: () => void;
}) => {
  return (
    <div className="my-3 mx-8 relative">
      <img
        src={imgPrefixURLPath + movie?.backdrop_path || ""}
        alt={movie?.title || "No title"}
        className="w-screen h-[450px] rounded-xl"
      />
      <div className=" absolute text-4xl font-medium text-white top-8 left-8 flex flex-col gap-6">
        <div className="">{movie?.title}</div>
        <div className="">{movie?.original_title}</div>
      </div>
      <button className="w-fit rounded-r-lg px-4 bottom-4 bg-white absolute text-3xl font-semibold text-blue-700 flex gap-x-2 items-center justify-center">
        Book Movie Tickets
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
      <button
        className="text-xxl absolute top-1/2 -left-6"
        onClick={incrementCarousel}
      >
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          size="3x"
          color="#718096"
          className="opacity-50"
        />
      </button>
      <button
        className="text-xxl  absolute top-1/2 -right-6"
        onClick={decrementCarousel}
      >
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          size="3x"
          color="#718096"
          className="opacity-50"
        />
      </button>
      <div className="flex text-blue-500 absolute text-xxl bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {[...Array(length)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 bg-white ${
              index !== currentindex ? "opacity-50" : ""
            } rounded-full m-2`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const NowPlayingCarousel = ({
  nowPlayingList,
}: {
  nowPlayingList: IMovie[];
}) => {
  const [currentindex, setCurrentIndex] = useState(0);
  const decrementCarousel = () => {
    if (currentindex - 1 < 0) {
      setCurrentIndex(nowPlayingList?.length - 1);
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const incrementCarousel = () => {
    if (currentindex == nowPlayingList?.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentindex === nowPlayingList?.length - 1) {
        setCurrentIndex(0);
      } else setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentindex, nowPlayingList]);
  return (
    <div>
      {nowPlayingList && (
        <NowPlayingCard
          movie={nowPlayingList[currentindex]}
          currentindex={currentindex}
          length={nowPlayingList.length}
          incrementCarousel={incrementCarousel}
          decrementCarousel={decrementCarousel}
        />
      )}
    </div>
  );
};

export default NowPlayingCarousel;
