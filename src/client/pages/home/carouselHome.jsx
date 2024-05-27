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
  paddingTop: "60px",
  zIndex: "1"
};

// const overlayStyle = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   zIndex: 1,
// };

// const videoStyle = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   zIndex: 0,
// };

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
          <div>
            <video
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                zIndex: "0",
              }}
              autoPlay
              loop
              muted
            >
              <source src="/slide-sign-up.mp4" />
            </video>
            <h3 style={contentStyle}>
              <AnimatedText>
                <h2>
                  Log in to your personal account to take advantage of all the
                  benefits of our library
                </h2>
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
        </div>
        <div>
          <div>
            <img src="" alt="" />
            
            <h3 style={contentStyle}>
              <AnimatedText>
                <h2>
                  Do you want to watch in high quality and without restrictions?{" "}
                  <br />
                  Only $ 19.99/month
                </h2>
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
        </div>
        <div>
          <h3 style={contentStyle}>
            <AnimatedText>
              <h2>We have the hottest new items from the cinematic universe</h2>
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
