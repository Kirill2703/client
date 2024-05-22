import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ShowNewMovies = () => {
  const { id } = useParams();
  const [latestMoviesFirstBlock, setLatestMoviesFirstBlock] = useState([]);
  const [latestMoviesSecondBlock, setLatestMoviesSecondBlock] = useState([]);
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    if (movies.length > 0) {
      const sortedMoviesFirstBlock = [...movies]
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .slice(0, 5);
      setLatestMoviesFirstBlock(sortedMoviesFirstBlock);
    }
  }, [movies]);

  useEffect(() => {
    if (movies.length > 0) {
      const sortedMoviesSecondBlock = [...movies]
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .slice(5, 10);
      setLatestMoviesSecondBlock(sortedMoviesSecondBlock);
    }
  }, [movies]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "120px" }}>
        {" "}
        hot new movies
      </h2>
      <div
        className="scrool-holder"
        // style={{ "--count": latestMoviesFirstBlock.length }}
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
          {latestMoviesFirstBlock.map((newMovie) => (
            <div key={newMovie._id}>
              <Link to={`/movie/${newMovie._id}`}>
                <img src={newMovie.img} alt="" />
              </Link>
            </div>
          ))}
          {latestMoviesFirstBlock.map((newMovie) => (
            <div key={newMovie._id}>
              <Link to={`/movie/${newMovie._id}`}>
                <img src={newMovie.img} alt="" />
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
          {latestMoviesSecondBlock.map((newMovie) => (
            <div key={newMovie._id}>
              <Link to={`/movie/${newMovie._id}`}>
                <img src={newMovie.img} alt="" />
              </Link>
            </div>
          ))}
          {latestMoviesSecondBlock.map((newMovie) => (
            <div key={newMovie._id}>
              <Link to={`/movie/${newMovie._id}`}>
                <img src={newMovie.img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowNewMovies;
