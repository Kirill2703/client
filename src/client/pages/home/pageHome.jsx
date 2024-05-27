import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import MovieCard from "../movies/movieCard";
import { Col, Row } from "antd";
import CarouselHome from "./carouselHome";

const PageHome = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [latestMovies, setLatestMovies] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (movies.length > 0) {
      const sortedMovies = [...movies].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setLatestMovies(sortedMovies.slice(0, 20));
    }
  }, [movies]);

  const scrollToElement = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CarouselHome scrollToElement={scrollToElement} />
      <h2 ref={scrollRef} style={{textAlign: "center", marginTop: "120px"}}>New releases</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Row >
          {latestMovies.map((movie) => (
            <Col span={4} key={movie.id} style={{ margin: "24px" }}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default PageHome;
