import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie || !movie.description) return null;
  const transcatedDecription =
    movie.description.length > 550
      ? `${movie.description.slice(0, 550)}...`
      : movie.description;

  return (
    <>
      <div className="card">
        <img src={movie.img} alt={movie.title} />
        <div className="descriptions">
          <h4 style={{ textAlign: "center" }}>{movie.title}</h4>

          <p>{transcatedDecription}</p>
        </div>
        <Link
          to={`/movie/${movie._id}`}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        ></Link>
      </div>
    </>
  );
};

export default MovieCard;
