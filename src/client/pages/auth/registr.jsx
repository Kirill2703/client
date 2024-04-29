import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../thunks/authThunk"
import { useNavigate } from "react-router-dom";
import useSelection from "antd/es/table/hooks/useSelection";

const Registr = () => {
  const dispath = useDispatch();

  const navigate = useNavigate();

  const [error, seterror] = useState(null);

  const onFinish = async (values) => {
    try {
      const responce = await dispath(register(values));
      if (responce.payload.email) {
        navigate('/login')
      }
      else {
        seterror(responce.payload.message);
      }
    }
    catch (error) {}
  };

  //  useEffect(() => {
  //    if (auth.userData.name) {
  //      navigate("/login");
  //    }
  //  }, [auth]);
  return (
    <div>
      <h1>Sign up</h1>
      {error}
      <Form
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
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your e-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registr;
