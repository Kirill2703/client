import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card">
        <img src={movie.img} alt={movie.title} style={{ width: "" }} />
        <div className="descriptions">
          <h4 style={{ textAlign: "center" }}>{movie.title}</h4>

          <p>{movie.description }</p>
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
        >
        </Link>
      </div>

    </>
  );
};

export default MovieCard;
