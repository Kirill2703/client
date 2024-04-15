import React from "react";
import { Button, Form, Input, Select, DatePicker} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message, Upload, Tabs } from "antd";
import { createMovies } from "../../../thunks/moviesThunk";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";



const formItemLayout = {
  labelCol: {
    xs: {
      span: 8,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 16,
    },
    sm: {
      span: 16,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 8,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Dragger } = Upload;
const props = {
  name: "img",
  multiple: false,
  action: "http://127.0.0.1:4000/upload-img",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const {TabPane} = Tabs


const MoviesCreate = () => {
  const countries = useSelector((state) => state.countries.countries);
  const genres = useSelector((state) => state.genres.genres);
  const actors = useSelector((state) => state.actors.actors);
  const types = useSelector((state) => state.types.types);
  const filmmakers = useSelector((state) => state.filmmakers.filmmakers);
  
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    values.img = 'http://127.0.0.1:4000/uploads/' + values.img.file.name
    dispatch(createMovies(values));
    form.resetFields();
    navigate("/admin/movies");
    console.log(values);
  };

  const initialValues = {
    countries: [{}],
    genres: [{}],
    actors: [{}],
    types: [{}],
    filmmakers: [{}]
  };

  return (
    <div>
      <h1>Create Movie</h1>

      <Form
        form={form}
        name="basic"
        initialValues={initialValues}
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
        <Tabs defaultActiveKey="1">
          <TabPane tab="General" key="1">
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

            <Form.Item label="Image" name="img">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </Form.Item>

            <Form.Item
              label="Year"
              name="year"
              rules={[
                {
                  required: true,
                  message: "Please input year!",
                },
              ]}
            >
              <DatePicker
                picker="year"
                format={{
                  format: "YYYY",
                  type: "mask",
                }}
              />
            </Form.Item>

            <Form.List name="countries">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Country" : ""}
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please choose country!",
                          },
                        ]}
                        noStyle
                      >
                        <Select
                          showSearch
                          filterOption={(inputValue, option) => {
                            return option.children
                              .toLowerCase()
                              .startsWith(inputValue.toLowerCase());
                          }}
                        >
                          {countries.map((country) => (
                            <Select.Option
                              key={country._id}
                              value={country._id}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please choose country!",
                                },
                              ]}
                            >
                              {country.title}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add Country
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List name="genres">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Genre" : ""}
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please choose genre!",
                          },
                        ]}
                        noStyle
                      >
                        <Select
                          showSearch
                          filterOption={(inputValue, option) => {
                            return option.children
                              .toLowerCase()
                              .startsWith(inputValue.toLowerCase());
                          }}
                        >
                          {genres.map((genre) => (
                            <Select.Option
                              key={genre._id}
                              value={genre._id}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please choose genre!",
                                },
                              ]}
                            >
                              {genre.title}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add Genre
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List name="actors">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Actor" : ""}
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please choose actor!",
                          },
                        ]}
                        noStyle
                      >
                        <Select
                          showSearch
                          filterOption={(inputValue, option) => {
                            return option.children
                              .toLowerCase()
                              .startsWith(inputValue.toLowerCase());
                          }}
                        >
                          {actors.map((actor) => (
                            <Select.Option
                              key={actor._id}
                              value={actor._id}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please choose actor!",
                                },
                              ]}
                            >
                              {actor.name} {actor.surname}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add Actor
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List name="types">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Type" : ""}
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please choose type!",
                          },
                        ]}
                        noStyle
                      >
                        <Select
                          showSearch
                          filterOption={(inputValue, option) => {
                            return option.children
                              .toLowerCase()
                              .startsWith(inputValue.toLowerCase());
                          }}
                        >
                          {types.map((type) => (
                            <Select.Option
                              key={type._id}
                              value={type._id}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please choose type!",
                                },
                              ]}
                            >
                              {type.title}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add Type
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List name="filmmakers">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Filmmaker" : ""}
                      required={true}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please choose filmmaker!",
                          },
                        ]}
                        noStyle
                      >
                        <Select
                          showSearch
                          filterOption={(inputValue, option) => {
                            return option.children
                              .toLowerCase()
                              .startsWith(inputValue.toLowerCase());
                          }}
                        >
                          {filmmakers.map((filmmaker) => (
                            <Select.Option
                              key={filmmaker._id}
                              value={filmmaker._id}
                              rules={[
                                {
                                  required: true,
                                  whitespace: true,
                                  message: "Please choose filmmaker!",
                                },
                              ]}
                            >
                              {filmmaker.name} {filmmaker.surname}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "60%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add Filmmaker
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Add Movie
              </Button>
            </Form.Item>
          </TabPane>

          <TabPane tab="Secondary" key="2">
            <Form.Item label="Gallery" name="gallery">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </Form.Item>
          </TabPane>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add Movie
            </Button>
          </Form.Item>
        </Tabs>
      </Form>
    </div>
  );
};

export default MoviesCreate;
