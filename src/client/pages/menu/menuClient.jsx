import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../thunks/authThunk";
import Currency from "./currency";

const MenuClient = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(logout());
  };

  const authUser = (
    <>
      Welcome, {auth.userData.name}
      <button onClick={logoutClickHandler}>Logout</button>
    </>
  );

  const guestUser = (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
  return (
    <div className="mainMenu">
      <NavLink to="/">Home</NavLink>
      {auth.token ? authUser : guestUser}
      <Currency />
    </div>
  );
};

export default MenuClient;
