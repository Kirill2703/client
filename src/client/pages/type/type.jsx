import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getType} from '../../../thunks/typesThunk'
import MovieCard from '../movies/movieCard';

const Type = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movies = useSelector((state) => state.movies.movies);
    const [typeMovies, setTypeMovies] = useState('');
    const [type, setType] = useState([]);

    useEffect(() => {
      getTypeTitle();
    }, [id]);

    const getTypeTitle = async () => {
      const responce = await dispatch(getType({ id: id }));
      setType(responce.payload.title);
    };

    useEffect(() => {
      setTypeMovies(movies.filter((m) => m.types.find((c) => c._id === id)));
    }, [id, movies]);

    if (movies.length === 0 || !typeMovies) {
      return "Loading...";
    }
    return (
      <div>
        <h1>All films type: {type}</h1>
        {typeMovies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    );
}

export default Type;
