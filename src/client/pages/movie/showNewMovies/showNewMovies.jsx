import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShowNewMovies = () => {
    const [latestMovies, setLatestMovies] = useState([]);
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
      if (movies.length > 0) {
        const sortedMovies = [...movies].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLatestMovies(sortedMovies);
      }
    }, [movies]);

    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "120px" }}>
          {" "}
          hot new movies
        </h2>
        <div
          className="scrool-holder"
          style={{ "--count": latestMovies.length }}
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
            {latestMovies.map((newMovie) => (
              <div key={newMovie._id}>
                <Link to={`/movie/${newMovie._id}`}>
                  <img src={newMovie.img} alt="" />
                </Link>
              </div>
            ))}
            {latestMovies.map((newMovie) => (
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
            {latestMovies.map((newMovie) => (
              <div key={newMovie._id}>
                <Link to={`/movie/${newMovie._id}`}>
                  <img src={newMovie.img} alt="" />
                </Link>
              </div>
            ))}
            {latestMovies.map((newMovie) => (
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
}

export default ShowNewMovies;
