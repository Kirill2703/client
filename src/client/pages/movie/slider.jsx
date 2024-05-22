import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import { useParams } from "react-router-dom";

const Slider = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((m) => m._id === id);
    setMovie(selectedMovie);
  }, [id, movies]);

  if (movies.length === 0 || !movie) {
    return "Loading...";
  }
  return (
    <div>
      {movie.gallery.length === 0 ? (
        <Carousel autoplay>
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </Carousel>
      ) : (
        <Carousel autoplay>
          {movie.gallery.map((image) => (
            <div key={movie._id}>
              <img
                src={image}
                alt=""
                style={{
                  width: "120%",
                  height: "100vh",
                  objectFit: "cover",
                  opacity: "0.2",
                }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Slider;
