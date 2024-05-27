import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGenre } from '../../../thunks/genresThunk';
import MovieCard from '../movies/movieCard';
import { Col, Row } from 'antd';

const Genre = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movies = useSelector((state) => state.movies.movies);
    const [genreMovies, setGenreMovies] = useState('');
    const [genre, setGenre] = useState("");

    useEffect(() => {
        getGenreTitle()
    }, [id])

    const getGenreTitle = async () => {
        const responce = await dispatch(getGenre({ id: id }))
        setGenre(responce.payload.title)
    }

     useEffect(() => {
       setGenreMovies(
         movies.filter((m) => m.genres.find((c) => c._id === id))
       );
     }, [id, movies]);

     if (movies.length === 0 || !genreMovies) {
       return "Loading...";
     }
    return (
      <div>
        <h2>All films genre: {genre}</h2>
        <Row>
          {genreMovies.map((movie) => (
            <Col span={4} key={movie.id} style={{ margin: "24px" }}>
              <MovieCard movie={movie} key={movie._id} />
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default Genre;
