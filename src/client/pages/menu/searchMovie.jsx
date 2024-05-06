import { AutoComplete, Space } from "antd";
import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Search from "antd/es/input/Search";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const SearchMovie = () => {
  const [searchMovie, setsearchMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
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
          return [{
              value: '',
              label: <div>Nothing found</div>
          }]
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
    console.log(value);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
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
        size="large"
      >
        <Space direction="vertical">
          <Search
            placeholder=""
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            allowClear
            value={searchMovie}
            onChange={(e) => setsearchMovie(e.target.value)}
          />
        </Space>
      </AutoComplete>
    </div>
  );
};

export default SearchMovie;
