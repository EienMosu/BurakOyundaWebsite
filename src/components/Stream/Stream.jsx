import React, { useState } from "react";
import YouTube from "react-youtube";
import "./stream.scss";

const Stream = () => {
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
    <div className="streamContainer">
      <div className="imgContainer">
        <img src="./assets/stream.png" alt="" />
      </div>
      {online ? (
        <div className="streamWrapper">
          <YouTube className="youtube" videoId="Yh5Lil03tpI" opts={opts} />
        </div>
      ) : (
        <div className="onlineStreamer">
          <img src="./assets/offline.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Stream;
