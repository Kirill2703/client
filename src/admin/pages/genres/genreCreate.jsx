import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { createGenres } from "../../../thunks/genresThunk";
import { useNavigate } from "react-router-dom";

const GenreCreate = () => {
  const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate()

  const onFinish = (values) => {
      dispatch(createGenres(values));
      form.resetFields()
      navigate('/admin/genres')
  };

  return (
    <div>
      <h1>Add Genre</h1>

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
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title!",
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
            Add Genre
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GenreCreate;
