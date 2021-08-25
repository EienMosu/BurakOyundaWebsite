import React, { useState } from "react";
import "./slider.scss";
import YouTube from "react-youtube";
import { worksData } from "../../data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const opts = {
    height: "510",
    width: "910",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : worksData.length - 1
        )
      : setCurrentSlide(
          currentSlide < worksData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="mainContainer">
      <div className="navbarContainer">
        <div className="Wrapper">
          <ul>
            <li>ANA SAYFA</li>
            <li>CANLI YAYIN</li>
            <img src="./assets/logo.png" alt="" />
            <li>REFERANSLAR</li>
            <li>İLETIŞİM</li>
          </ul>
        </div>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {worksData.map((data) => (
          <div className="container">
            <div className="item">
              <YouTube className="youtube" videoId={data.link} opts={opts} />
            </div>
          </div>
        ))}
      </div>
      <div
        className="logoContainer"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {worksData.map((data) => (
          <div className="logo">
            <div className="imgItem">
              <img src={data.logo} alt="" />
            </div>
          </div>
        ))}
      </div>
      <img
        src="./assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="./assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Slider;
