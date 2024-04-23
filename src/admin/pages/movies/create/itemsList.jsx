import { Form, Select, Button } from "antd";
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

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

const ItemsList = ({ items, add, remove, errors, fields, title }) => {
    return (
      <>
        <>
          {fields.map((field, index) => (
            <Form.Item
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? title : ""}
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
                    message: `Please choose ${title}!`,
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
                  {items.map((item) => (
                    <Select.Option
                      key={item._id}
                      value={item._id}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: `Please choose ${title}!`,
                        },
                      ]}
                    >
                      {title === 'Filmmaker' || title === 'Actor' ? `${item.name} ${item.surname}`: item.title}
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
              Add {title}
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      </>
    );
}

export default ItemsList;
