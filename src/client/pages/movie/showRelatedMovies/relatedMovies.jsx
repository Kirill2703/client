import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";


const RelatedMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    const currentMovie = movies.find((m) => m._id === id);
    setMovie(currentMovie);

    const movieWithSameGenre = movies.filter((m) => {
      const currentMovieGenres = currentMovie.genres.map((genre) => genre._id);
      return (
        m.genres.some((genre) => currentMovieGenres.includes(genre._id)) &&
        m._id !== currentMovie._id
      );
    });
    setRelatedMovies(movieWithSameGenre);
  }, [id, movies]);
  

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "120px" }}>
        {" "}
        Similar films by genre
      </h2>
      <div
        className="scrool-holder"
        style={{ "--count": relatedMovies.length }}
      >
        <div
          className="scrool-tray"
          style={{ marginTop: "20px" }}
          onMouseOver={(e) =>
            (e.target.closest(".scrool-tray").style.animationPlayState =
              "paused")
          }
          onMouseOut={(e) =>
            (e.target.closest(".scrool-tray").style.animationPlayState =
              "running")
          }
        >
          {relatedMovies.map((relatedMovie) => (
            <div key={relatedMovie._id}>
              <Link to={`/movie/${relatedMovie._id}`}>
                <img src={relatedMovie.img} alt="" />
              </Link>
            </div>
          ))}
          {relatedMovies.map((relatedMovie) => (
            <div key={relatedMovie._id}>
              <Link to={`/movie/${relatedMovie._id}`}>
                <img src={relatedMovie.img} alt="" />
              </Link>
            </div>
          ))}
        </div>
        <div
          className="scrool-tray"
          onMouseOver={(e) =>
            (e.target.closest(".scrool-tray").style.animationPlayState =
              "paused")
          }
          onMouseOut={(e) =>
            (e.target.closest(".scrool-tray").style.animationPlayState =
              "running")
          }
        >
          {relatedMovies.map((relatedMovie) => (
            <div key={relatedMovie._id}>
              <Link to={`/movie/${relatedMovie._id}`}>
                <img src={relatedMovie.img} alt="" />
              </Link>
            </div>
          ))}
          {relatedMovies.map((relatedMovie) => (
            <div key={relatedMovie._id}>
              <Link to={`/movie/${relatedMovie._id}`}>
                <img src={relatedMovie.img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default RelatedMovies;
