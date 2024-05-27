import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";



const RelatedMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [relatedMoviesFirstBlock, setRelatedMoviesFirstBlock] = useState([]);
  const [relatedMoviesSecondBlock, setRelatedMoviesSecondBlock] = useState([]);


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

   useEffect(() => {
     if (movies.length > 0) {
       const sortedMoviesFirstBlock = [...movies]
         .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
         .slice(0, 5);
       setRelatedMoviesFirstBlock(sortedMoviesFirstBlock);
     }
   }, [movies]);
  
  useEffect(() => {
    if (movies.length > 0) {
      const sortedMoviesSecondBlock = [...movies]
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .slice(5, 10);
      setRelatedMoviesSecondBlock(sortedMoviesSecondBlock);
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
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Similar films by genre
      </h2>
      <div className="scrool-holder">
        <div
          className="scrool-tray"
          style={{ marginTop: "40px" }}
          onMouseOver={(e) =>
            (e.target.closest(".scrool-tray").style.animationPlayState =
              "paused")
          }
          onMouseOut={(e) =>
            (e.target.closest(".scrool-tray").style.animationPlayState =
              "running")
          }
        >
          {relatedMoviesFirstBlock.map((relatedMovie) => (
            <div key={relatedMovie._id}>
              <Link to={`/movie/${relatedMovie._id}`}>
                <img src={relatedMovie.img} alt="" />
              </Link>
            </div>
          ))}
          {relatedMoviesFirstBlock.map((relatedMovie) => (
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
          {relatedMoviesSecondBlock.map((relatedMovie) => (
            <div key={relatedMovie._id}>
              <Link to={`/movie/${relatedMovie._id}`}>
                <img src={relatedMovie.img} alt="" />
              </Link>
            </div>
          ))}
          {relatedMoviesSecondBlock.map((relatedMovie) => (
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
