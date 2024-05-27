import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../thunks/authThunk";
import Currency from "./currency";
import SearchMovie from "./searchMovie";
import { Button, ConfigProvider } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { FaHome } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { TinyColor } from "@ctrl/tinycolor";


const MenuClient = () => {
  const auth = useSelector((state) => state.auth);
  const [scroll, setScroll] = useState(false);
  const header = useRef();

  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY ) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];

  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  const authUser = (
    <div className="menu-auth">
      <span style={{ color: "#a8a0a3" }}>
        Welcome, <span style={{ color: "#ef9d43", fontWeight: "bold" }}>{auth.userData.name}</span>
      </span>
      <NavLink
        to="subscribes"
        className="menu-subscribe"
        style={{ color: "#a8a0a3" }}
      >
        <span>My subscribes</span>
      </NavLink>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(90deg,  ${colors2.join(", ")})`,
              colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                colors2
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                colors2
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button
          type="primary"
          size="small"
          icon={<PoweroffOutlined />}
          onClick={logoutClickHandler}
        />
      </ConfigProvider>
    </div>
  );

  const guestUser = (
    <div className="menu-guest">
      <NavLink to="/login" className="menu-link">
        Log In
      </NavLink>
      <NavLink to="/register" className="menu-link">
        Sign Up
      </NavLink>
    </div>
  );

  return (
    <div
      className={`mainMenu ${scroll ? "scroll" : ""}`}
      ref={header}
      style={{ padding: "20px" }}
    >
      <div className="menu-left">
        <NavLink to="/" className="menu-link">
          <div className="item-icons">
            <FaHome style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "4px" }}>Home</span>
          </div>
        </NavLink>
        <NavLink to="/films" className="menu-link">
          <div className="item-icons">
            <RiMovie2Line style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "4px" }}>Films</span>
          </div>
        </NavLink>
        <NavLink to="/serials" className="menu-link">
          <div className="item-icons">
            <FaFilm style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "4px" }}>Serials</span>
          </div>
        </NavLink>
        <NavLink to="/forchildrens" className="menu-link">
          <div className="item-icons">
            <FaChild style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "4px" }}>For kids</span>
          </div>
        </NavLink>
        <NavLink to="/subscribes-type" className="menu-link">
          <div className="item-icons">
            <BiBell style={{ fontSize: "24px" }} />
            <span style={{ paddingLeft: "4px" }}>Subscribes</span>
          </div>
        </NavLink>
      </div>
      <div className="menu-search">
        <SearchMovie />
      </div>
      <div className="menu-right">{auth.token ? authUser : guestUser}</div>
      {/* <Currency /> */}
    </div>
  );
};

export default MenuClient;
