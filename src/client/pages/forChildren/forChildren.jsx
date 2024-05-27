import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../movies/movieCard";

const ForChildren = () => {
  const movies = useSelector((state) => state.movies.movies);
  const cartoons = movies.filter((movie) => {
    return movie.types.some((type) => type.title === "Cartoon");
  });

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "60px" }}>Cartoons</h2>
      <Row>
        {cartoons.map((movie) => (
          <Col span={4} key={movie.id} style={{ margin: "24px" }}>
            <MovieCard movie={movie} key={movie._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ForChildren;
