import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  const extractYear = (date) => {
    return date.split("-")[0];
  };
  return (
    <>
      <div className="card">
        <img src={movie.img} alt={movie.title} style={{ width: "" }} />
        <div className="descriptions">
          <h4 style={{ textAlign: "center" }}>{movie.title}</h4>
          {/* <p>
            <span style={{ fontWeight: "bold" }}>Country: </span>
            {movie.countries
              .slice(0, 2)
              .map((country) => country.title)
              .join(", ")}
          </p> */}
          {/* <p>
            <span style={{ fontWeight: "bold" }}>Genre: </span>
            {movie.genres
              .slice(0, 2)
              .map((genre) => genre.title)
              .join(", ")}
          </p> */}
          {/* <p>
            <span style={{ fontWeight: "bold" }}>Actors: </span>
            {movie.actors.slice(0, 2).map((actor, index) => (
              <span key={index}>
                {actor.name} {actor.surname}
                {index !== movie.actors.slice(0, 2).length - 1 && ", "}
              </span>
            ))}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Filmmaker: </span>
            {movie.filmmakers.slice(0, 2).map((filmmaker, index) => (
              <span key={index}>
                {filmmaker.name} {filmmaker.surname}
                {index !== movie.filmmakers.slice(0, 2).length - 1 && ", "}
              </span>
            ))}
          </p> */}

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
          {" "}
        </Link>
      </div>

      {/* <div className="movie">
        <Card
          hoverable
          style={{
            width: "320px",
            position: "relative",
            backgroundColor: "#222",
            overflow: "hidden",
            border: "none",
            borderRadius: "20px",
          }}
          cover={
            <div className="img-card">
              <img
                alt={movie.title}
                src={movie.img}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "20px 20px 0 0",
                }}
              />
            </div>
          }
        >
          <h3
            className="title"
            style={{ margin: "0", fontSize: "18px", fontWeight: "bold" }}
          >
            {movie.title}
          </h3>
          <div className="info-card">
            <p>
              {movie.genres
                .slice(0, 2)
                .map((genre) => genre.title)
                .join(", ")}
            </p>
            <p>
              {movie.countries
                .slice(0, 2)
                .map((country) => country.title)
                .join(", ")}
            </p>
          </div>

          <div
            className="icon-info"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#fff",
              fontSize: "24px",
            }}
          >
            <InfoCircleOutlined />
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
            {" "}
          </Link>
        </Card>
      </div> */}
    </>
  );
};

export default MovieCard;
