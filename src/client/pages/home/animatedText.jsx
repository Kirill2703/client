import React from "react";
import { useTrail, animated } from "@react-spring/web";

const AnimatedText = ({ children }) => {
  const textItems = React.Children.toArray(children);

  const trail = useTrail(textItems.length, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 800, 
  });

  return (
    <>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {textItems[index]}
        </animated.div>
      ))}
    </>
  );
};

const AnimatedButton = ({ children }) => {
  const buttonItems = React.Children.toArray(children);

  const trail = useTrail(buttonItems.length, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 1200, 
  });

  return (
    <>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {buttonItems[index]}
        </animated.div>
      ))}
    </>
  );
};


export { AnimatedText, AnimatedButton };
