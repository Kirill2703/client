import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomLink from "./customLink";
import { Card, Col, Rate, Row } from "antd";
import {
  FrownOutlined,
  SmileOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { setMoviesDislikes, setMoviesLikes } from "../../../thunks/moviesThunk";
import Slider from "./slider";
import ModalTrailer from "../modal/modalTrailer";
import ShowActors from "./showActor/showActors";
import RelatedMovies from "./showRelatedMovies/relatedMovies";
import { getSubscribeUser } from "../../../thunks/subscribeThunk";
import ShowNewMovies from "./showNewMovies/showNewMovies";
import CustomLinkNameSurname from "./customLinkNameSurname";


const MoviePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [movie, setmovie] = useState("");
  const [UserRating, setUserRating] = useState(
    JSON.parse(localStorage.getItem("UserRating")) || []
  );
  const [seeLatter, setseelatter] = useState(false);
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const [subscribes, setSubscribes] = useState([]);

  

  useEffect(() => {
    getSubscribe();
  }, [auth]);

  


  const getSubscribe = async () => {
    if (auth.userData._id) {
      const responce = await dispatch(getSubscribeUser(auth.userData._id));
      setSubscribes(responce.payload);
    }
  };

  const otherDate = new Date(subscribes[subscribes.length - 1]?.date);
  const nowDate = new Date();
  const delta = nowDate.getTime() - otherDate.getTime();
  const month = (Math.floor(delta / 1000 / 60 / 60 / 24 / 30));

  useEffect(() => {
    const currentMovie = movies.find((m) => m._id === id);
    setmovie(currentMovie);
  }, [id, movies]);

  useEffect(() => {
    localStorage.setItem("UserRating", JSON.stringify(UserRating));
  }, [UserRating]);

  if (movies.length === 0 || !movie) {
    return "Loading...";
  }

   if (month >= 1) {
     return "Oops..";
   }

  const watchLatter = () => {
    setseelatter(!seeLatter);
  };

  const setLikes = () => {
    const finded = UserRating.includes(movie._id);
    if (!finded) {
      dispatch(setMoviesLikes({ id: movie._id }));
      setUserRating([...UserRating, movie._id]);
    }
  };

  const setDislikes = () => {
    const finded = UserRating.includes(movie._id);
    if (!finded) {
      dispatch(setMoviesDislikes({ id: movie._id }));
      setUserRating([...UserRating, movie._id]);
    }
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
                    <h2>{movie.title}</h2>
                    <div className="sml-info">
                      <div >
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
                        paddingTop: "16px",
                      }}
                    >
                      <div className="rating-users">
                        <div className="likes-rating">
                          <SmileOutlined
                            className="icon-like"
                            onClick={() => setLikes()}
                          />
                          {movie.likes}
                        </div>
                        <div className="dislikes-rating">
                          <FrownOutlined
                            className="icon-dislike"
                            onClick={() => setDislikes()}
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
            <ShowActors movie={movie} />
          </div>

          <div>
            <RelatedMovies />
          </div>

          <div>
            <ShowNewMovies />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MoviePage;
