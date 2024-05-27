import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilmmaker } from '../../../thunks/filmmakersThunk';
import MovieCard from '../movies/movieCard';

const Filmmaker = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movies = useSelector((state) => state.movies.movies);
    const [filmmakerMovies, setFilmmakerMovies] = useState([]);
    const [filmmakerName, setFilmmakerName] = useState("");
    const [filmmakerSurname, setFilmmakerSurname] = useState("");

    useEffect(() => {
      getFilmmakerName();
      getFilmmakerSurname();
    }, [id]);

    const getFilmmakerName = async () => {
      const responce = await dispatch(getFilmmaker({ id: id }));
      setFilmmakerName(responce.payload.name);
    };

    const getFilmmakerSurname = async () => {
      const responce = await dispatch(getFilmmaker({ id: id }));
      setFilmmakerSurname(responce.payload.surname);
    };

    useEffect(() => {
      setFilmmakerMovies(
        movies.filter((m) => m.filmmakers.find((c) => c._id === id))
      );
    }, [id, movies]);

    if (movies.length === 0 || !filmmakerMovies) {
      return "Loading...";
    }
    return (
      <div>
        <h2>
          All films type: {filmmakerName} {filmmakerSurname}
        </h2>
        {filmmakerMovies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    );
}

export default Filmmaker;
