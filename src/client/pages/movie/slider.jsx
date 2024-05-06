import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from "antd";
import { useParams } from 'react-router-dom';


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
        <Carousel autoplay>
          {movie.gallery.map((image) => (
            <div key={movie._id}>
              <img
                src={image}
                alt=""
                style={{ width: "120%", height: "100vh", objectFit: "cover", opacity: "0.2" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
}

export default Slider;
