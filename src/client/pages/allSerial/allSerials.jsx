import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllSerials = () => {
  const movies = useSelector((state) => state.movies.movies);
  const serials = movies.filter((movie) => {
    return movie.types.some((type) => type.title === "Serial");
  });

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "60px" }}>All serials in our library</h1>
      <Row>
        {serials.map((serial) => (
          <Col span={4} key={serial.id} style={{ margin: "24px" }}>
            <div className="card" key={serial._id}>
              <img src={serial.img} alt={serial.title} style={{ width: "" }} />
              <div className="descriptions">
                <h4 style={{ textAlign: "center" }}>{serial.title}</h4>

                <p>{serial.description}</p>
              </div>
              <Link
                to={`/movie/${serial._id}`}
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

export default AllSerials;
