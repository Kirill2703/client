import React from 'react';
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeTypes } from '../../../thunks/typesThunk';



const TypeList = () => {
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
  const types = useSelector((state) => state.types.types);
  const dispatch = useDispatch();
  const removeHandler = (_id) => {
    dispatch(removeTypes(_id));
  };
    return (
      <div>
        <h1>Types</h1>

        <Link to="/admin/types/create">
          <Button type="primary">Create</Button>
        </Link>

        <Table columns={columns} rowKey="_id" dataSource={types} />
      </div>
    );
}

export default TypeList;
