import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubscribeUser,
  setSubscribeUser,
} from "../../../thunks/subscribeThunk";
import { Card,Typography, List, Button, ConfigProvider} from "antd";
import { NavLink } from "react-router-dom";
import { TinyColor } from "@ctrl/tinycolor";

const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const { Title, Text } = Typography;

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());



const Subscribe = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [subscribes, setSubscribes] = useState([]);

  useEffect(() => {
    getSubscribe();
  }, [auth]);

  const getSubscribe = async () => {
    if (auth.userData._id) {
      const response = await dispatch(getSubscribeUser(auth.userData._id));
      setSubscribes(response.payload);
    }
  };

  const paySubscribe = async () => {
    const response = await dispatch(
      setSubscribeUser({ user_id: auth.userData._id, summa: 50 })
    );
    setSubscribes([...subscribes, response.payload]);
    console.log(response);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Title level={1} style={{ textAlign: "center", marginBottom: "40px" }}>
        My Subscriptions
      </Title>

      {subscribes.length === 0 ? (
        <Text
          style={{ display: "block", textAlign: "center", fontSize: "18px" }}
        >
          No subscriptions
        </Text>
      ) : (
        <List
          dataSource={subscribes}
          renderItem={(subscribe) => (
            <List.Item>
              <Card
                style={{ width: "100%" }}
                title={`Date: ${new Date(subscribe.date).toLocaleDateString()}`}
                bordered={false}
              >
                <Text>Amount: {subscribe.summa}</Text>
              </Card>
            </List.Item>
          )}
        />
      )}

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <div style={{ margin: "20px 0 0 0" }}>
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
            <NavLink to="/subscribes-type">
              <Button type="primary" size="large" style={{ width: "200px" }}>
                Update your plan
              </Button>
            </NavLink>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
