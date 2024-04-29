import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomLink from "./customLink";
import { Col, Rate, Row } from "antd";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { setMoviesDislikes, setMoviesLikes } from "../../../thunks/moviesThunk";

const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const [movie, setmovie] = useState("");

  useEffect(() => {
    setmovie(movies.find((m) => m._id === id));
  }, [id, movies]);

  if (movies.length === 0 || !movie) {
    return "Loading...";
  }

  const setLikes = () => {
    dispatch(setMoviesLikes({ id: movie._id }));
  };

  const setDislikes = () => {
    dispatch(setMoviesDislikes({ id: movie._id }));
  };

  const extractYear = (date) => {
    return date.split("-")[0];
  };

  return (
    <div>
      <Row>
        <Col span={20}>
          <h1 className="title">{movie.title}</h1>
          <Row>
            <Col span={12}>
              <div className="title-img">
                <img src={movie.img} alt={movie.title} />
              </div>

              <div className="rating">
                <div>
                  <Rate
                    disabled
                    allowHalf
                    value={(movie.likes * 5) / (movie.likes + movie.dislikes)}
                  />
                </div>
                <div className="rating-users">
                  <div className="likes-rating">
                    <BiSolidLike className="icon-like" onClick={setLikes} />{" "}
                    {movie.likes}{" "}
                  </div>
                  <div className="dislikes-rating">
                    <BiSolidDislike
                      className="icon-dislike"
                      onClick={setDislikes}
                    />{" "}
                    {movie.dislikes}{" "}
                  </div>
                </div>
              </div>
            </Col>

            <Col span={12}>
              <div className="information-block">
                <div>
                  Country: <CustomLink data={movie.countries} href="country" />
                </div>
                <div>
                  Genre: <CustomLink data={movie.genres} href="genres" />
                </div>
                <div>Year: {extractYear(movie.year)}</div>
                <div>
                  Type: <CustomLink data={movie.types} href="types" />
                </div>
                <div>
                  Actors: <CustomLink data={movie.actors} href="actors" />
                </div>
                <div>
                  Filmmaker: <CustomLink data={movie.filmmakers} href="filmmakers" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MoviePage;
