import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  notification,
} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../thunks/authThunk";
import { TinyColor } from "@ctrl/tinycolor";

const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

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
    console.log(auth);
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
    <>
      <Row
        justify={"center"}
        style={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col span={8}>
          <h2
            style={{
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            Login
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                width: 300,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your e-mail!",
                  },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <Link to="/recover-password" style={{ color: "#ef9d43" }}>
                    Forgot password?
                  </Link>
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          colorPrimary: `linear-gradient(90deg,  ${colors2.join(
                            ", "
                          )})`,
                          colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                            colors2
                          ).join(", ")})`,
                          colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                            colors2
                          ).join(", ")})`,
                          lineWidth: 0,
                        },
                      },
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      style={{ width: "100px" }}
                    >
                      Log in
                    </Button>
                  </ConfigProvider>
                </div>
              </Form.Item>
            </Form>
          </div>
          {contextHolder}
        </Col>
      </Row>
    </>
  );
};

export default Login;
