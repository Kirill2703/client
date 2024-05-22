import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button, ConfigProvider } from "antd";
import { NavLink } from "react-router-dom";
import { TinyColor } from "@ctrl/tinycolor";

const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const TypeOfSubscribe = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "60px" }}>Type Subscribe</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "60px",
          fontSize: "18px",
          color: "#fff",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            borderRadius: "50px",
            padding: "80px",
            backgroundColor: "#281900a9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Minimal</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Content in 720hd
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Hot new: 5 pieces per month
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#f50201d7",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              Multilingualism
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#f50201d7",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              Chat
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#f50201d7",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              Sale -10%
            </p>
            <p style={{ marginTop: "40px" }}>$13.99/month</p>
            <div style={{ margin: "80px 0 0 0" }}>
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
                <NavLink to="">
                  <Button
                    type="primary"
                    size="large"
                    style={{ width: "200px" }}
                  >
                    Choose
                  </Button>
                </NavLink>
              </ConfigProvider>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid white",
            borderRadius: "50px",
            padding: "80px",
            backgroundColor: "#281900a9",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Medium</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Content in 720hd
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Hot new: 5 pieces per month
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Multilingualism
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#f50201d7",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              Chat
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#f50201d7",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              Sale -10%
            </p>
            <p style={{ marginTop: "40px" }}>$16.99/month</p>
            <div style={{ margin: "80px 0 0 0" }}>
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
                <NavLink to="">
                  <Button
                    type="primary"
                    size="large"
                    style={{ width: "200px" }}
                  >
                    Choose
                  </Button>
                </NavLink>
              </ConfigProvider>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid white",
            borderRadius: "50px",
            padding: "80px",
            backgroundColor: "#281900a9",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Unlimited</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Content in 720hd
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Hot new: unlimited
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Multilingualism
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Chat
            </p>
            <p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  backgroundColor: "#80d603de",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              Sale -10%
            </p>
            <p style={{ marginTop: "40px" }}>$13.99/month</p>
            <div style={{ margin: "80px 0 0 0" }}>
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
                <NavLink to="">
                  <Button
                    type="primary"
                    size="large"
                    style={{ width: "200px" }}
                  >
                    Choose
                  </Button>
                </NavLink>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeOfSubscribe;
