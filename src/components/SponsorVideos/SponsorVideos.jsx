import React from "react";
import "./sponsorVideos.scss"
import { sponsorData } from "../../data";
import YouTube from "react-youtube";

const SponsorVideos = () => {
  const opts = {
    height: "250",
    width: "450",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <div className="sponsorVideoContainer">
      {sponsorData.map((data) => (
        <div className="sponsorVideoWrapper">
          <YouTube className="youtube" videoId={data.link} opts={opts} />
          <div className="sponsorVideoTitle">
            <span>{data.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorVideos;
