import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movies/movieCard";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const AllFilms = () => {
  const movies = useSelector((state) => state.movies.movies);
  const films = movies.filter((movie) => {
    return movie.types.some((type) => type.title === "Film");
  });

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        All films in our library
      </h2>
      <Row>
        {films.map((movie) => (
          <Col span={4} key={movie.id} style={{ margin: "24px" }}>
            <MovieCard movie={movie} key={movie._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllFilms;
