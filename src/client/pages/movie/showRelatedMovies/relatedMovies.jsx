import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";


const RelatedMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const movies = useSelector((state) => state.movies.movies);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    const currentMovie = movies.find((m) => m._id === id);
    setMovie(currentMovie);

    const movieWithSameGenre = movies.filter((m) => {
      const currentMovieGenres = currentMovie.genres.map((genre) => genre._id);
      return (
        m.genres.some((genre) => currentMovieGenres.includes(genre._id)) &&
        m._id !== currentMovie._id
      );
    });
    setRelatedMovies(movieWithSameGenre);
  }, [id, movies]);

  return (
    <div className="scrool-holder">
      <div className="scrool-tray">
        {relatedMovies.map((relatedMovie) => (
          <div key={relatedMovie._id}>
            <img src={relatedMovie.img} alt="" />
          </div>
        ))}
      </div>
      <div className="scrool-tray">
        {relatedMovies.map((relatedMovie) => (
          <div key={relatedMovie._id}>
            <img src={relatedMovie.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

    // <div style={{ marginTop: "100px" }}>
    //   <h1 style={{ textAlign: "center" }}>Related movie</h1>
    //   <div className="all-movies">
    //     {relatedMovies.map((relatedMovie) => (
    //       <div className="related-movie">
    //         <div className="card-related">
    //           <Card
    //             hoverable
    //             style={{
    //               width: "320px",
    //               backgroundColor: "#222",
    //               overflow: "hidden",
    //               border: "none",
    //               borderRadius: "20px",
    //               marginRight: "20px",
    //               padding: "0",
    //               margin: "0",
    //             }}
    //             cover={
    //               <div className="img-card">
    //                 <img
    //                   alt={relatedMovie.title}
    //                   src={relatedMovie.img}
    //                   style={{
    //                     width: "100%",
    //                     height: "200px",
    //                     borderRadius: "20px 20px 0 0",
    //                   }}
    //                 />
    //               </div>
    //             }
    //           >
    //             <h3
    //               className="title"
    //               style={{ margin: "0", fontSize: "18px", fontWeight: "bold" }}
    //             >
    //               {relatedMovie.title}
    //             </h3>
    //             <div className="info-card">
    //               <p>
    //                 {relatedMovie.genres
    //                   .slice(0, 2)
    //                   .map((genre) => genre.title)
    //                   .join(", ")}
    //               </p>
    //               <p>
    //                 {relatedMovie.countries
    //                   .slice(0, 2)
    //                   .map((country) => country.title)
    //                   .join(" , ")}
    //               </p>
    //             </div>
    //             <div
    //               className="icon-info"
    //               style={{
    //                 position: "absolute",
    //                 top: "10px",
    //                 right: "10px",
    //                 color: "#fff",
    //                 fontSize: "24px",
    //               }}
    //             >
    //               <InfoCircleOutlined />
    //             </div>
    //             <Link
    //               to={`/movie/${relatedMovie._id}`}
    //               style={{
    //                 position: "absolute",
    //                 top: 0,
    //                 bottom: 0,
    //                 left: 0,
    //                 right: 0,
    //               }}
    //             >
    //               {" "}
    //             </Link>
    //           </Card>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    // </div>

export default RelatedMovies;
