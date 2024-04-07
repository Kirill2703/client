import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ActorsUpdate = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const actors = useSelector((state) => state.actors.actors);

  useEffect(() => {
    form.setFieldsValue(actors.find((actor) => actor._id === id));
  }, [actors]);

  const onFinish = (values) => {
    // dispatch(updateGenres(values));
    form.resetFields();
    navigate("/admin/actors");
  };
  return (
    <div>
      <h1>Update Actor</h1>

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
            Add Genre
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ActorsUpdate;
