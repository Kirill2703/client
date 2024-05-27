import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieCard from '../movies/movieCard';
import { getCountry } from '../../../thunks/countriesThunk';
import { Col, Row } from 'antd';

const Country = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const movies = useSelector((state) => state.movies.movies);
    const [countryMovies, setcountryMovies] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        getCountryTitle()
    }, [id])

    const getCountryTitle = async () => {
        const responce = await dispatch(getCountry({ id: id }))
        setCountry(responce.payload.title)
    }

    useEffect(() => {
      setcountryMovies(movies.filter((m) => m.countries.find(c =>c._id === id)));
    }, [id, movies]);

    if (movies.length === 0 || !countryMovies) {
      return "Loading...";
    }
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          All films country: {country}
        </h2>
        <Row>
          {countryMovies.map((movie) => (
            <Col span={4} key={movie.id} style={{ margin: "24px" }}>
              <MovieCard movie={movie} key={movie._id} />
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default Country;
