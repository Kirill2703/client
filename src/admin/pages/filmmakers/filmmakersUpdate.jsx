import React, {useEffect} from 'react';
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const FilmmakersUpdate = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const filmmakers = useSelector((state) => state.filmmakers.filmmakers);

    useEffect(() => {
      form.setFieldsValue(filmmakers.find((filmmaker) => filmmaker._id === id));
    }, [filmmakers]);

    const onFinish = (values) => {
      // dispatch(updateGenres(values));
      form.resetFields();
      navigate("/admin/filmmakers");
    };
    return (
      <div>
        <h1>Update Filmmaker</h1>

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
              Add Filmmaker
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default FilmmakersUpdate;
