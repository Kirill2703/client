import React from 'react';
import { Button, Table } from "antd";
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeActors } from '../../../thunks/actorsThunk';



const ActorsList = () => {
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
          <Link to={`/admin/actors/update/${record._id}`}>
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
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actors.actors);
   const removeHandler = (_id) => {
     dispatch(removeActors(_id));
   };
    return (
      <div>
        <h1>Actors</h1>

        <Link to="/admin/actors/create">
          <Button type="primary">Create</Button>
        </Link>

        <Table columns={columns} rowKey="_id" dataSource={actors} />
      </div>
    );
}

export default ActorsList;
