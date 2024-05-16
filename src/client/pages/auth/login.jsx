import { Button, Form, Input, notification } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../thunks/authThunk";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => {
    return state.auth;
  });

  const onFinish = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (auth.error) {
      api.info({
        message: auth.error,
      });
    }
    if (auth.token) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div>
      <div className="login-page">
        <h1>Login</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 400,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Link to="/recover-password">Forgot password?</Link>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </div>
          </Form.Item>
        </Form>
        {contextHolder}
      </div>
    </div>
  );
};

export default Login;
