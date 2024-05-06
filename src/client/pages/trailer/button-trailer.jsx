import React from 'react';
import { Button, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const ButtonTrailer = ({onClick}) => {
    return (
      <div>
        <div>
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
            <Button onClick={onClick}
              type="primary"
              size="large"
              style={{
                width: "200px",
                height: "50px",
                fontWeight: "bold",
                fontSize: "20px",
                letterSpacing: "3px",
              }}
            >
              Trailer
            </Button>
          </ConfigProvider>
        </div>
      </div>
    );
}

export default ButtonTrailer;
