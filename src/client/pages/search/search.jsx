import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../movies/movieCard';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const movies = useSelector((state) => state.movies.movies)
    const [moviesForShow, setmoviesForShow] = useState([]);
        

    useEffect(() => {setmoviesForShow(movies.filter(searchMovie));},[setSearchParams] )
    

    //const searchMovie = (movie) =>
    //movie.title.toLowerCase().includes(searchParams.get("s").toLowerCase());
    
    const searchMovie = (movie) => {
        const s = searchParams.get("s")
        const reg = new RegExp(s, "i")
        return reg.test(movie.title)
    }
    
    return (
      <div>
            <h1>Search for: "{searchParams.get('s')}"</h1>
        <div className="all-movies">
          {moviesForShow.length === 0? <h2>Nothing found</h2> : moviesForShow
            .map((movie) => (
              <MovieCard movie={movie} key={movie._id} />
            ))}
        </div>
      </div>
    );
}

export default Search;
