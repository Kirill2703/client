import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActor } from '../../../thunks/actorsThunk';
import MovieCard from '../movies/movieCard';
import { Col, Row } from 'antd';

const Actor = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movies = useSelector((state) => state.movies.movies);
    const [actorMovies, setActorMovies] = useState([]);
    const [actorName, setActorName] = useState("");
    const [actorSurname, setActorSurname] = useState("");

    useEffect(() => {
      getActorName();
      getActorSurname();
    }, [id]);

    const getActorName = async () => {
      const responce = await dispatch(getActor({ id: id }));
      setActorName(responce.payload.name);
    };

    const getActorSurname = async () => {
      const responce = await dispatch(getActor({ id: id }));
      setActorSurname(responce.payload.surname);
    };

    useEffect(() => {
      setActorMovies(
        movies.filter((m) => m.actors.find((c) => c._id === id))
      );
    }, [id, movies]);

    if (movies.length === 0 || !actorMovies) {
      return "Loading...";
    }
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          All films with: {actorName} {actorSurname}
        </h2>
        <Row>
          {actorMovies.map((movie) => (
            <Col span={4} key={movie.id} style={{ margin: "24px" }}>
              <MovieCard movie={movie} key={movie._id} />
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default Actor;
