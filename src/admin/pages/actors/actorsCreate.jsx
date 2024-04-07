import React from 'react';
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createActors} from "../../../thunks/actorsThunk"


const ActorsCreate = () => {
   const dispatch = useDispatch();
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const onFinish = (values) => {
     dispatch(createActors(values));
     form.resetFields();
     navigate("/admin/actors");
   };
    return (
      <div>
        <h1>Add Actor</h1>

        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Surname"
            name="surname"
            rules={[
              {
                required: true,
                message: "Please input surname!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add Actor
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default ActorsCreate;
