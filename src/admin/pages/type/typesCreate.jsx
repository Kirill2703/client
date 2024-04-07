import React from 'react';
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTypes } from "../../../thunks/typesThunk";

const TypesCreate = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
      dispatch(createTypes(values));
      form.resetFields();
      navigate("/admin/types");
    };
    return (
      <div>
        <h1>Add Type</h1>

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
                message: "Please input title type!",
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
              Add Type
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default TypesCreate;
