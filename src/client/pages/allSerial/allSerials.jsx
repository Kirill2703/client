import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../movies/movieCard";

const AllSerials = () => {
  const movies = useSelector((state) => state.movies.movies);
  const serials = movies.filter((movie) => {
    return movie.types.some((type) => type.title === "Serial");
  });

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        All serials in our library
      </h2>
      <Row>
        {serials.map((movie) => (
          <Col span={4} key={movie.id} style={{ margin: "24px" }}>
            <MovieCard movie={movie} key={movie._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllSerials;
