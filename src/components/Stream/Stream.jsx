import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./stream.scss";
//Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

const Stream = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -600 });
  }, []);

  const [online, setOnline] = useState(false);

  const opts = {
    height: "510",
    width: "910",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <div className="streamContainer" id="stream">
      <div className="imgContainer" data-aos="fade-up-left">
        <img src="./assets/stream.png" alt="" />
      </div>
      {online ? (
        <div className="streamWrapper" data-aos="fade-up-right">
          <YouTube className="youtube" videoId="Yh5Lil03tpI" opts={opts} />
        </div>
      ) : (
        <div className="onlineStreamer" data-aos="fade-up-right">
          <img src="./assets/offline.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Stream;
