import { Card } from "antd";
import React from "react";
import {
  BiSolidCameraMovie,
} from "react-icons/bi";
import { Link } from "react-router-dom";
const { Meta } = Card;

const MovieCard = ({ movie }) => {
  const extractYear = (date) => {
    return date.split("-")[0];
  };
  return (
    <div className="movie">
      <Card
        hoverable
        style={{ width: 240, position: "relative", overflow: "hidden" }}
        cover={<img alt={movie.title} src={movie.img} />}
      >
        <Meta title={movie.title} className="title" />
        <div>
          <div>
            {extractYear(movie.year)},
            {movie.genres.map((genre) => genre.title).join(", &nbsp;")},   
            {movie.countries.map((country) => country.title).join(", ")}
          </div>
          <div className="genre">
            <span>{movie.types.map((type) => type.title).join(", ")} </span>
            <BiSolidCameraMovie />
          </div>
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
    </div>
  );
};

export default MovieCard;
