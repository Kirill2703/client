import React, { useEffect } from 'react';
import MenuClient from './menu/menuClient';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { allMovies } from '../../thunks/moviesThunk';
// import { getCurrency } from '../../thunks/currencyThunk';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMovies());
    // dispatch(getCurrency())
  }, []);
    return (
      <>
            <MenuClient />
            <Outlet />
      </>
    );
}

export default Main;
