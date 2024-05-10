import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomLink from "./customLink";
import { Col, Rate, Row } from "antd";
import { FrownOutlined,SmileOutlined, HeartOutlined, HeartFilled   } from "@ant-design/icons";
import { setMoviesDislikes, setMoviesLikes } from "../../../thunks/moviesThunk";
import Slider from "./slider";
import ModalTrailer from "../modal/modalTrailer";




const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const [movie, setmovie] = useState("");
  const [relatedMovies, setRelatedMovies] = useState("");
  const [UserRating, setUserRating] = useState(localStorage.getItem('UserRating') || false);
  const [seeLatter, setseelatter] = useState(false);
  const [notSeeLatter, setnotSeelatter] = useState(true);

  useEffect(() => {
    const currentMovie = movies.find((m) => m._id === id);
    setmovie(currentMovie);

    const movieWithSameGenre = movies.filter(
      (m) => {
        const currentMovie_genres = currentMovie.genres.map(m => m._id);
        return m.genres.some((genre) => currentMovie_genres.includes(genre._id)) && m._id !== currentMovie._id;
      })
        setRelatedMovies(movieWithSameGenre)
  }, [id, movies]);

  if (movies.length === 0 || !movie) {
    return "Loading...";
  }

  const watchLatter = () => {
    setseelatter(!seeLatter)
    setnotSeelatter(!seeLatter)
  }


  const setLikes = () => {
    dispatch(setMoviesLikes({ id: movie._id }));
    localStorage.setItem("clickRating", movie._id);
  };

  const setDislikes = () => {
    dispatch(setMoviesDislikes({ id: movie._id }));
  };

  const extractYear = (date) => {
    return date.split("-")[0];
  };

  return (
    <div>
      <div className="pg-movie">
        <Row>
          <Col span={24}>
            <div className="slider-relative">
              <Slider />

              <div className="movie-information">
                <Row>
                  <Col span={4} offset={2}>
                    <div className="main-information">
                      <div className="poster">
                        <img src={movie.img} alt={movie.title} />
                      </div>
                      <div className="rating">
                        <Rate
                          disabled
                          allowHalf
                          value={
                            (movie.likes * 5) / (movie.likes + movie.dislikes)
                          }
                        />
                      </div>
                    </div>
                  </Col>
                  <Col span={12} offset={4}>
                    <div className="information-block">
                      <h1>{movie.title}</h1>
                      <div className="sml-info">
                        <div>
                          <CustomLink data={movie.countries} href="country" />
                        </div>
                        <div>
                          <CustomLink data={movie.genres} href="genres" />
                        </div>
                        <div>{extractYear(movie.year)}</div>
                        <div>{movie.agerating}</div>
                        <div>{movie.runtimes}</div>
                        <div>{movie.ratingIMDB}</div>
                        {/* <div>
                          <CustomLink data={movie.types} href="types" />
                        </div>
                        <div>
                          <CustomLink data={movie.actors} href="actors" />
                        </div>
                        <div>
                          <CustomLink data={movie.filmmakers} href="filmmakers" />
                        </div> */}
                      </div>
                      <div>{movie.description}</div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="rating-users">
                          <div className="likes-rating">
                            <SmileOutlined
                              className="icon-like"
                              onClick={() => (UserRating ? setLikes() : null)}
                            />
                            {movie.likes}
                          </div>
                          <div className="dislikes-rating">
                            <FrownOutlined
                              className="icon-dislike"
                              onClick={() =>
                                UserRating ? setDislikes() : null
                              }
                            />
                            {movie.dislikes}
                          </div>
                        </div>
                        <div className="modal-trailer">
                          <ModalTrailer />
                        </div>
                        <div style={{ fontSize: "20px", cursor: "pointer" }} onClick={watchLatter}>
                          {notSeeLatter ? <HeartOutlined /> : <HeartFilled />}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div></div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div>
              {relatedMovies.map((relatedMovie) => (
                <div key={relatedMovie._id}>
                  <img src={relatedMovie.img} alt={relatedMovie.title} />
                  <h3>{relatedMovie.title}</h3>
                </div>
              ))}
            </div>
            <div>
              {movie.actors.map((actor) => (
                <div key={actor._id}>
                  {actor.name} {actor.surname}{" "}
                  <img src={actor.actorhoto} alt="" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MoviePage;
