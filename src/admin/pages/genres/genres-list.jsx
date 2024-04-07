import { Button, Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => (a.title > b.title ? 1 : -1),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div>
        <Link to={`/admin/genres/update/${record._id}`}>
          <Button type="dashed">
            <EditOutlined />
          </Button>
        </Link>

        <Button type="dashed" danger>
          <DeleteOutlined />
        </Button>
      </div>
    ),
    width: "200px",
  },
];
const GenresList = () => {
  const genres = useSelector((state) => state.genres.genres);
  return (
    <div>
      <h1>Genres</h1>

      <Link to="/admin/genres/create">
        <Button type="primary">Create</Button>
      </Link>

      <Table columns={columns} rowKey="_id" dataSource={genres} />
    </div>
  );
};

export default GenresList;
