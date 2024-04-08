import React from "react";
import {
  AppstoreOutlined,
  DesktopOutlined,
  UserOutlined,
  GlobalOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    <NavLink to="/admin">Dashboard</NavLink>,
    "dashboard",
    <DesktopOutlined />
  ),
  getItem(
    <NavLink to="/admin/types">Types</NavLink>,
    "types",
    <BarsOutlined />
  ),
  getItem(
    <NavLink to="/admin/countries">Countries</NavLink>,
    "countries",
    <GlobalOutlined />
  ),
  getItem(
    <NavLink to="/admin/genres">Genres</NavLink>,
    "genres",
    <AppstoreOutlined />
  ),
  getItem(
    <NavLink to="/admin/actors">Actors</NavLink>,
    "actors",
    <UserOutlined />
    // [
    // getItem("Option 5", "5"),
    // getItem("Option 6", "6"),
    // getItem("Option 7", "7"),
    // getItem("Option 8", "8"),]
  ),
  getItem(
    <NavLink to="/admin/filmmakers">Filmmakers</NavLink>,
    "filmmakers",
    <AppstoreOutlined />
  ),

  // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  //   getItem("Submenu", "sub3", null, [
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  //   ]),
  // ]),
];
const AdminMenu = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
        style={{
          height: "100vh",
        }}
      />
    </div>
  );
};
export default AdminMenu;
