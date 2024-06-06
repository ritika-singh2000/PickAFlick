import React, { useEffect, useState } from "react";
import { authHeaders, getOptions } from "../Constants/Api";

interface IGenre {
  id: string;
  name: string;
}

const GenresList = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState("");

  const getGenersData = async () => {
    await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      getOptions
    )
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGenersData();
  }, []);

  return (
    <div className="flex gap-x-2 justify-between h-14 bg-blue-600">
      {genres.map((type) => {
        return (
          <button
            className="text-white text-xl p-2"
            onClick={() => {
              setSelectedGenres(type.id);
            }}
          >
            {type.name}
          </button>
        );
      })}
    </div>
  );
};

export default GenresList;
