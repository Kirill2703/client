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
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Type Subscribe</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
        }}
      >
        <NavLink to="" className="link-subscribes">
          <div
            style={{
              padding: "40px",
              backgroundColor: "#1d1d25",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
              width: "320px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#CD6600",
                borderBottom: "1px #36363f solid",
                paddingBottom: "10px",
              }}
            >
              Bronze
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderBottom: "1px #36363f solid",
                paddingBottom: "10px",
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
            </div>
            <h4
              style={{
                marginTop: "40px",
                color: "##CD6600",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              $13.99/month
            </h4>
          </div>
        </NavLink>

        <NavLink to="" className="link-subscribes">
          <div
            style={{
              padding: "40px",
              backgroundColor: "#1d1d25",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
              width: "320px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#C0C0C0",
                borderBottom: "1px #36363f solid",
                paddingBottom: "10px",
              }}
            >
              Silver
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderBottom: "1px #36363f solid",
                paddingBottom: "10px",
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
            </div>
            <h4
              style={{
                marginTop: "40px",
                color: "#C0C0C0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              $16.99/month
            </h4>
          </div>
        </NavLink>

        <NavLink to="" className="link-subscribes">
          <div
            style={{
              padding: "40px",
              backgroundColor: "#1d1d25",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
              width: "320px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#DAA520",
                borderBottom: "1px #36363f solid",
                paddingBottom: "10px",
              }}
            >
              Gold
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderBottom: "1px #36363f solid",
                paddingBottom: "10px",
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
            </div>
            <h4
              style={{
                marginTop: "40px",
                color: "#DAA520",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              $19.99/month
            </h4>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default TypeOfSubscribe;
