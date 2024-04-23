import { Card } from 'antd';
import React from 'react';
import { BiSolidCameraMovie, BiSolidLike, BiSolidDislike } from "react-icons/bi";
const { Meta } = Card;

const MovieItem = ({movie}) => {
    return (
      <div className="container">
        <h1>Slider and content</h1>

        <div className="movie">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={movie.title} src={movie.img} />}
          >
            <Meta title={movie.title} className="title" />
            <div>
              <p>
                {" "}
                {movie.year},{" "}
                {movie.genres.map((genre) => genre.title).join(", ")}
              </p>
              <p className="genre">
                <span>{movie.types.map((type) => type.title).join(", ")} </span>
                <BiSolidCameraMovie />
              </p>
              <p> </p>
              <div>
                <p className="likes">
                  <BiSolidLike className="icon" /> {movie.likes}{" "}
                  <BiSolidDislike className="icon" />
                  {movie.dislikes}
                </p>
              </div>
              <p>
                Rating:{movie.rating} Agerating:{movie.agerating}
              </p>
              <p>{movie.runtimes}</p>
            </div>
          </Card>
        </div>
      </div>
    );
}

export default MovieItem;
