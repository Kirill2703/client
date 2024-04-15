import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateGenres } from '../../../thunks/genresThunk'

const GenreUpdate = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const genres = useSelector((state) => state.genres.genres);

  useEffect(() => {
    form.setFieldsValue(genres.find((genre) => genre._id === id));
  }, [genres]);

  const onFinish = (values) => {
    dispatch(updateGenres(values));
    form.resetFields();
    navigate("/admin/genres");
  };

  return (
    <div>
      <h1>Update Genre</h1>

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

        <Form.Item name = "_id" noStyle>
          <Input type="hidden"/>
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

export default GenreUpdate;
