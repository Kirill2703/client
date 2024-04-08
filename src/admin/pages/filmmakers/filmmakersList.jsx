import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";


const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => (a.title > b.title ? 1 : -1),
  },
  {
    title: "Surname",
    dataIndex: "surname",
    sorter: (a, b) => (a.title > b.title ? 1 : -1),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div>
        <Link to={`/admin/filmmakers/update/${record._id}`}>
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

const FilmmakersList = () => {
    const filmmakers = useSelector((state) => state.filmmakers.filmmakers);
    return (
      <div>
        <h1>Filmmakers</h1>

        <Link to="/admin/filmmakers/create">
          <Button type="primary">Create</Button>
        </Link>

        <Table columns={columns} rowKey="_id" dataSource={filmmakers} />
      </div>
    );
}

export default FilmmakersList;
