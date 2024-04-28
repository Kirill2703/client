import React, { useEffect } from 'react';
import MenuClient from './menu/menuClient';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { allMovies } from '../../thunks/moviesThunk';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMovies());
  }, []);
    return (
      <div>
            <MenuClient />
            <Outlet />
      </div>
    );
}

export default Main;
