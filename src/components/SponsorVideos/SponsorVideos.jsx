import React, { useEffect } from "react";
import "./sponsorVideos.scss"
import { sponsorData } from "../../data";
import YouTube from "react-youtube";
//Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";



const SponsorVideos = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -500 });
  }, []);

  const opts = {
    height: "250",
    width: "450",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <div className="sponsorVideoContainer" id="sponsors">
      {sponsorData.map((data) => (
        <div className="sponsorVideoWrapper" data-aos="zoom-in">
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
