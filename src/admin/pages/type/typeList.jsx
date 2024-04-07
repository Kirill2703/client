import React from 'react';
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => (a.title > b.title ? 1 : -1),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div>
        <Link to={`/admin/types/update/${record._id}`}>
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

const TypeList = () => {
    const types = useSelector((state) => state.types.types);
    return (
      <div>
        <h1>Types</h1>

        <Link to="/admin/actors/create">
          <Button type="primary">Create</Button>
        </Link>

        <Table columns={columns} rowKey="_id" dataSource={types} />
      </div>
    );
}

export default TypeList;
