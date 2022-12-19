import "./App.css";
import { useEffect, useRef, useState } from "react";
import ParallaxLayer from "./ParallaxLayer";

function App() {
  const targetRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log("scrolled");
    setScrollTop(window.pageYOffset);
  };

  const parallaxData = [
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax0.png",
      speed: 2,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax1.png",
      speed: -5,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax2.png",
      speed: -11,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax3.png",
      speed: -16,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax4.png",
      speed: -26,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax5.png",
      speed: -36,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax6.png",
      speed: -49,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax7.png",
      speed: -69,
    },
    {
      img: "http://www.firewatchgame.com/images/parallax/parallax8.png",
      speed: -100,
    },
  ];

  return (
    <div>
      <div className="keyart" id="parallax" ref={targetRef}>
        {parallaxData.map((p) => {
          return (
            <ParallaxLayer
              key={p.speed}
              img={p.img}
              speed={p.speed}
              scrollTop={scrollTop}
            ></ParallaxLayer>
          );
        })}
      </div>
      <div className="content"></div>
    </div>
  );
}

export default App;
