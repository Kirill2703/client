import { Button, Carousel, ConfigProvider } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { TinyColor } from "@ctrl/tinycolor";
import { AnimatedText, AnimatedButton } from "./animatedText";

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  paddingTop: "60px",
};

const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const CarouselHome = ({ scrollToElement }) => {
  return (
    <>
      <Carousel dotPosition="left" infinite={false} autoplay>
        <div>
          <h3 style={contentStyle}>
            <AnimatedText>
              <h1>
                Log in to your personal account to take advantage of all the
                benefits of our library
              </h1>
            </AnimatedText>
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
              <AnimatedButton>
                <NavLink to="/login">
                  {" "}
                  <Button
                    type="primary"
                    size="large"
                    style={{ width: "200px" }}
                  >
                    Log in
                  </Button>
                </NavLink>
              </AnimatedButton>
            </ConfigProvider>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <AnimatedText>
              <h1>
                Do you want to watch in high quality and without restrictions? <br />
                Only $ 19.99/month
              </h1>
            </AnimatedText>

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
              <AnimatedButton>
                <NavLink to="/register">
                  <Button
                    type="primary"
                    size="large"
                    style={{ width: "200px" }}
                  >
                    Sign Up
                  </Button>
                </NavLink>
              </AnimatedButton>
            </ConfigProvider>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <AnimatedText>
              <h1>We have the hottest new items from the cinematic universe</h1>
            </AnimatedText>
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
              <AnimatedButton>
                <Button
                  onClick={scrollToElement}
                  type="primary"
                  size="large"
                  style={{ width: "200px" }}
                >
                  Watch
                </Button>
              </AnimatedButton>
            </ConfigProvider>
          </h3>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselHome;
