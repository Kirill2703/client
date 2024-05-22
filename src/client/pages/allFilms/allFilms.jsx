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
          <h1 style={{textAlign: "center", marginTop: "60px"}}>All films in our library</h1>
      <Row >
        {films.map((film) => (
          <Col span={4} key={film.id} style={{ margin: "24px" }}>
            <div className="card" key={film._id}>
              <img src={film.img} alt={film.title} style={{ width: "" }} />
              <div className="descriptions">
                <h4 style={{ textAlign: "center" }}>{film.title}</h4>

                <p>{film.description}</p>
              </div>
              <Link
                to={`/movie/${film._id}`}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              ></Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllFilms;
