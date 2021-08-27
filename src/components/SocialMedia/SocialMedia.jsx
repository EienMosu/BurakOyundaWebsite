import React, { useEffect } from "react";
import CountUp from "react-countup";
import "./socialMedia.scss";
//Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";






const SocialMedia = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -600 });
  }, []);

  return (
    <div className="socialMediaContainer" data-aos="fade-up">
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
      <div className="socialMediaBox" data-aos="fade-up">
        <CountUp
          className="count"
          start={0}
          end={1165000000}
          delay={0}
          duration={3}
        />
        <h2 className="total">YOUTUBE İZLENME</h2>
      </div>
      <div className="socialMediaBox" data-aos="fade-up">
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
