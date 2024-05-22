import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ForChildren = () => {
  const movies = useSelector((state) => state.movies.movies);
  const cartoons = movies.filter((movie) => {
    return movie.types.some((type) => type.title === "Cartoon");
  });

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "60px" }}>Cartoons</h1>
      <Row>
        {cartoons.map((cartoon) => (
          <Col span={4} key={cartoon.id} style={{ margin: "24px" }}>
            <div className="card" key={cartoon._id}>
              <img
                src={cartoon.img}
                alt={cartoon.title}
                style={{ width: "" }}
              />
              <div className="descriptions">
                <h4 style={{ textAlign: "center" }}>{cartoon.title}</h4>

                <p>{cartoon.description}</p>
              </div>
              <Link
                to={`/movie/${cartoon._id}`}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              ></Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ForChildren;
