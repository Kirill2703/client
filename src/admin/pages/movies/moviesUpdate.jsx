import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoviesCreate from "../movies/moviesCreate";
import dayjs from "dayjs";
import { updateMovies } from "../../../thunks/moviesThunk";

const MoviesUpdate = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const [form] = Form.useForm();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (movies.length > 0) {
      const findMovie = movies.find((m) => m._id === id);
      console.log("findMovie:", findMovie);
      const m = {
        ...findMovie,
        year: dayjs(new Date(findMovie.year).getFullYear().toString()),
        countries: findMovie.countries.map((item) => item._id),
        genres: findMovie.genres.map((item) => item._id),
        actors: findMovie.actors.map((item) => item._id),
        types: findMovie.types.map((item) => item._id),
        filmmakers: findMovie.filmmakers.map((item) => item._id),
        gallery: findMovie.gallery.map((item) => {
          return { url: item };
        }),
        img: [{ url: findMovie.img }],
      };
      console.log("m:", m);
      setMovie(m);
    }
  }, [movies]);
  return (
    <div>
      <MoviesCreate initialValuesUpdate={movie} functionSave={updateMovies()} />
    </div>
  );
};

export default MoviesUpdate;
