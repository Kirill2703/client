import { AutoComplete, Space } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const SearchMovie = () => {
  const [searchMovie, setsearchMovie] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies);

  const onSearch = (value) => {
    if (value.trim().length !== 0) {
      navigate(`/search?s=${value}`);
      setsearchMovie("");
    }
  };

  const searchResult = (query) => {
    const searchSetMovie = (movie) => {
      const reg = new RegExp(query, "i");
      return reg.test(movie.title);
    };

    if (movies.filter(searchSetMovie).length === 0) {
      return [
        {
          value: "",
          label: <div>Nothing found</div>,
        },
      ];
    }
    return movies.filter(searchSetMovie).map((movie) => {
      return {
        value: movie._id,
        label: (
          <div>
            <Link to={`/movie/${movie._id}`}>
              <div>{movie.title}</div>
            </Link>
          </div>
        ),
      };
    });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = () => {
    setsearchMovie("");
  };

  return (
    <div>
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Space direction="vertical">
          <input
            type="text"
            placeholder="Search..."
            value={searchMovie}
            onChange={(e) => setsearchMovie(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              outline: "none",
              borderRadius: "20px",
              background: "none",
            }}
          />
          <SearchOutlined
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#aaa", // Цвет иконки
            }}
          />
        </Space>
      </AutoComplete>
    </div>
  );
};

export default SearchMovie;
