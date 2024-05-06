import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MovieCard from "../movies/movieCard";


const PageHome = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div>
      <div className="all-movies">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
};

export default PageHome;
