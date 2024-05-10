import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { recoverPassword } from '../../../thunks/authThunk';
import { useNavigate } from 'react-router-dom';

const RecoverPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [error, seterror] = useState(null);

    // const onFinish = async (values) => {
    //   try {
    //     const responce = await dispatch(recoverPassword(values));
    //     if (responce.payload.email) {
    //       navigate("/check-your-email");
    //     } else {
    //       seterror(responce.payload.message);
    //     }
    //   } catch (error) {}
    // };
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Recover Password</h1>
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
            maxWidth: 400,
          }}
        //   onFinish={onFinish}
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
            <Input placeholder="Input your e-mail" />
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default RecoverPassword;
