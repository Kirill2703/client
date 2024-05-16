import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../thunks/authThunk";
import Currency from "./currency";
import SearchMovie from "./searchMovie";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";




const MenuClient = () => {
  const auth = useSelector((state) => state.auth);
  const [scroll, setScroll] = useState(false)
  const header = useRef()
  
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    })
  }, []);

  const authUser = (
    <div className="menu-auth">
      <span className="welcome-text">Welcome, {auth.userData.name}</span>
      <NavLink to="subscribes"> My subscribes</NavLink>
      {/* <button onClick={logoutClickHandler}></button> */}
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={logoutClickHandler}
      />
    </div>
  );

  const guestUser = (
    <div className="menu-guest">
      <NavLink to="/login" className="menu-link">Login</NavLink>
      <NavLink to="/register" className="menu-link">Register</NavLink>
    </div>
  );


  return (
    <div className={`mainMenu ${scroll ? "scroll" : ""}`} ref={header}>
      <NavLink to="/" className="menu-link">
        Home
      </NavLink>
      {auth.token ? authUser : guestUser}
      {/* <Currency /> */}

      <SearchMovie />


    </div>
  );
};

export default MenuClient;
