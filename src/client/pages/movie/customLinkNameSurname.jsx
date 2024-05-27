import { Avatar } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";

const CustomLinkNameSurname = ({ href, actor }) => {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "0 8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to={`/${href}/${actor._id}`}>
        <Avatar src={actor.actorPhoto} size={150} />
          <p style={{textAlign: "center", color:"white"}}>{actor.title ? actor.title : `${actor.name} ${actor.surname}`}</p>
      </Link>
    </div>
  );
};

export default CustomLinkNameSurname;
