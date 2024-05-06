import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Trailer = () => {
    const { id } = useParams();
    const movies = useSelector((state) => state.movies.movies)
    const [movie, setmovie] = useState("");
    useEffect(() => {
      setmovie(movies.find((m) => m._id === id));
    }, [id, movies]);

    if (movies.length === 0 || !movie) {
      return "Loading...";
    }
    return (
      <div>
        <iframe
          width="660"
          height="400" 
          src={movie.trailer} 
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
}

export default Trailer;
