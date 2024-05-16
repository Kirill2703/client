import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CustomLinkNameSurname from "../customLinkNameSurname";

const ShowActors = ({ movie }) => {
  const settings = {
    
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: movie.actors.length >= 5 ? 5: movie.actors.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ textAlign: "center" }}>Actors</h1>
      <div>
        <Slider {...settings}>
          {movie.actors.map((actor) => (
            <div key={actor._id}>
              <div>
                <CustomLinkNameSurname actor={actor} href="actors" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prev-arrow" onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next-arrow" onClick={onClick}>
      <RightOutlined />
    </div>
  );
};

export default ShowActors;
