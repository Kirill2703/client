import { Button, Col, ConfigProvider, Input, Row } from "antd";
import React, { useState } from "react";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { register } from "../../../thunks/authThunk";
import { useNavigate } from "react-router-dom";
import { TinyColor } from "@ctrl/tinycolor";

const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const Registr = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [error, seterror] = useState(null);

  const onFinish = async (values) => {
    try {
      const responce = await dispatch(register(values));
      if (responce.payload.email) {
        navigate("/login");
      } else {
        seterror(responce.payload.message);
      }
    } catch (error) {}
  };

  //  useEffect(() => {
  //    if (auth.userData.name) {
  //      navigate("/login");
  //    }
  //  }, [auth]);
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
            Sign up
          </h2>
          {error}
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
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
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
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
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
                    Sign Up
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Registr;
