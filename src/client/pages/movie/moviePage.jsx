import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomLink from "./customLink";
import { Card, Carousel, Col, Rate, Row, Avatar, List } from "antd";
import { FrownOutlined,SmileOutlined, HeartOutlined, HeartFilled   } from "@ant-design/icons";
import { setMoviesDislikes, setMoviesLikes } from "../../../thunks/moviesThunk";
import Slider from "./slider";
import ModalTrailer from "../modal/modalTrailer";
import ShowActors from "./showActor/showActors";
import RelatedMovies from "./showRelatedMovies/relatedMovies";


const { Meta } = Card;

const MoviePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [movie, setmovie] = useState("");
  const [UserRating, setUserRating] = useState(localStorage.getItem('UserRating') || false);
  const [seeLatter, setseelatter] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const currentMovie = movies.find((m) => m._id === id);
    setmovie(currentMovie);
  }, [id, movies]);
 

  if (movies.length === 0 || !movie) {
    return "Loading...";
  }

  const watchLatter = () => {
    setseelatter(!seeLatter)
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
      
        <Row>
          <Col span={24}>
            <div className="slider-relative">
              <Slider />
              <div className="movie-information">
                <Row style={{ width: "100%" }}>
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
                  <Col span={14} offset={4}>
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
                      </div>
                      <div className="despription">{movie.description}</div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: "16px"
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
                        <div
                          style={{ fontSize: "20px", cursor: "pointer" }}
                          onClick={watchLatter}
                        >
                          {seeLatter ? <HeartFilled /> : <HeartOutlined />}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="btm-info">
              <ShowActors movie={movie}/>
          </div>  
          
          <div>
            <RelatedMovies />
          </div>
          </Col>
        </Row>
      
    </div>
  );
};

export default MoviePage;
