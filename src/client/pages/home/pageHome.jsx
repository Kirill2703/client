import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMovies } from "../../../thunks/moviesThunk";
import MenuClient from "../menu/menuClient";
import MovieCard from "../movies/movieCard"


const PageHome = () => {
  console.log(
    "https://www.youtube.com/watch?v=kM9ADzMo4bE&t=2s"
      .replace("watch?v=", "embed/")
      .slice(
        0,
        "https://www.youtube.com/watch?v=kM9ADzMo4bE&t=2s".lastIndexOf("t")
      )
  );
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(allMovies());
  }, []);
  return (
    <div>
    
      <MenuClient />
      {movies.map((movie) => <MovieCard movie={movie} key={movie._id} /> )}
    </div>
  );
};

export default PageHome;
