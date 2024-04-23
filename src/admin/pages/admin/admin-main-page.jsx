import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminMenu from "./admin-menu";
import { useDispatch } from "react-redux";
import { allGenres } from "../../../thunks/genresThunk";
import { allActors } from "../../../thunks/actorsThunk";
import { allTypes } from "../../../thunks/typesThunk";
import { allFilmmakers } from "../../../thunks/filmmakersThunk";
import { allMovies } from "../../../thunks/moviesThunk";
import {allCountries} from "../../../thunks/countriesThunk"

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  backgroundColor: "#fff",
  padding: "0 20px"
};
const siderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#333",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
  minHeight: "100vh",
};

const AdminMainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(allGenres());
      dispatch(allActors());
      dispatch(allTypes())
      dispatch(allFilmmakers())
      dispatch(allMovies())
      dispatch(allCountries())
    }, []);
  return (
    <div>
      <Flex gap="middle" wrap="wrap"></Flex>
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          <AdminMenu />
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}><Outlet /></Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminMainPage;
