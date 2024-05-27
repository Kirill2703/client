import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recoverPassword, updatePassword } from "../../../thunks/authThunk";
import { useNavigate, useSearchParams } from "react-router-dom";

const ChangePassword = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, seterror] = useState(null);
    const [params, setParams] = useSearchParams()

    const onFinish = async (values) => {
        values.email = params.get('email')
        console.log(values);
      try {
        const responce = await dispatch(updatePassword(values));
        if (responce.payload.status === "success") {
          navigate("/login");
        } else {
          seterror(responce.payload.message);
        }
      } catch (error) {}
    };
  return (
    <div>
      <h2>Change Password</h2>

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
          label="New Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Input your new password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/.test(
                    value
                  )
                ) {
                  return Promise.resolve(); // обещание выполнено
                }
                return Promise.reject(
                  new Error("Incorrect password!") // обещание не выполнено
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Repeat Password"
          dependencies={["password"]}
          name="repeat-password"
          rules={[
            {
              required: true,
              message: "Repeat your new password",
            },

            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve(); // обещание выполнено
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!") // обещание не выполнено
                );
              },
            }),
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

export default ChangePassword;
