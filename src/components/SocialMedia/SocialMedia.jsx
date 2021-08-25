import React from "react";
import CountUp from "react-countup";
import "./socialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialMediaContainer">
      <div className="socialMediaBox">
        <CountUp
          className="count"
          start={0}
          end={3390000}
          delay={0}
          duration={3}
        />
        <h2>YOUTUBE ABONE SAYISI</h2>
      </div>
      <div className="socialMediaBox">
        <CountUp
          className="count"
          start={0}
          end={1165000000}
          delay={0}
          duration={3}
        />
        <h2 className="total">YOUTUBE İZLENME</h2>
      </div>
      <div className="socialMediaBox">
        <CountUp
          className="count"
          start={0}
          end={420000}
          delay={0}
          duration={3}
        />
        <h2>İNSTAGRAM TAKİPÇİ SAYISI</h2>
      </div>
    </div>
  );
};

export default SocialMedia;
