import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { removeMovies } from "../../../thunks/moviesThunk";
import { useDispatch, useSelector } from "react-redux";

const MoviesList = () => {
    const columns = [
      {
        title: "Poster",
        dataIndex: "img",
        render: (text) => <img src={text} style={{ width: "150px" }} />,
      },
      {
        title: "Name",
        dataIndex: "title",
        sorter: (a, b) => (a.title > b.title ? 1 : -1),
      },
      {
        title: "Price",
        dataIndex: "price",
        sorter: (a, b) => a - b,
      },
      {
        title: "Country",
        dataIndex: "countries",
        sorter: (a, b) => (a.title > b.title ? 1 : -1),
        render: (countries) => countries.map((c) => c.title).join(", "),
      },
      {
        title: "Year",
        dataIndex: "year",
        sorter: (a, b) => (a.title > b.title ? 1 : -1),
        render: (year) => new Date(year).getFullYear()
      },
      {
        title: "Genre",
        dataIndex: "genres",
        render: (genres) => genres.map((g) => g.title).join(", "),
      },
      {
        title: "Type",
        dataIndex: "types",
        render: (types) => types.map((t) => t.title).join(", "),
      },

      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <div>
            <Link to={`/admin/movies/update/${record._id}`}>
              <Button type="dashed">
                <EditOutlined />
              </Button>
            </Link>

            <Button
              type="dashed"
              danger
              onClick={() => removeHandler(record._id)}
            >
              <DeleteOutlined />
            </Button>
          </div>
        ),
        width: "200px",
      },
    ];
      const movies = useSelector((state) => state.movies.movies);
      const dispatch = useDispatch();
      const removeHandler = (_id) => {
        dispatch(removeMovies(_id));
      };
    return (
      <div>
        <h1>Movies</h1>

        <Link to="/admin/movies/create">
          <Button type="primary">Create</Button>
        </Link>

        <Table columns={columns} rowKey="_id" dataSource={movies} />
      </div>
    );
}

export default MoviesList;
