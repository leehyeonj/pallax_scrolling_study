import React from "react";

const ParallaxLayer = (props) => {
  return (
    <div
      style={{
        height: "1000px",
        width: "100%",
        backgroundPosition: "bottom center",
        backgroundSize: "auto 1038px",
        position: "fixed",
        backgroundImage: `url(${props.img})`,
        transform: `translate3d(0px ,${
          (props.scrollTop * props.speed) / 100
        }px , 0px)`,
      }}
    ></div>
  );
};

export default ParallaxLayer;
