import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TypeUpdate = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const types = useSelector((state) => state.types.types);

  useEffect(() => {
    form.setFieldsValue(types.find((type) => type._id === id));
  }, [types]);

  const onFinish = (values) => {
    // dispatch(updateGenres(values));
    form.resetFields();
    navigate("/admin/types");
  };
  return (
    <div>
      <h1>Update Type</h1>

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
};

export default TypeUpdate;
