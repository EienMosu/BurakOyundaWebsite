import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -500 });
  }, []);

  return (
    <div className="aboutContainer">
      <div className="leftAbout" data-aos="fade-right">
        <h2>BURAK ŞAHİN</h2>
        <p className="aboutP">
          Merhaba, 2012 yılından beri dijital mecrada içerik üretiyor, reklam ve
          pazarlama stratejileri yaratıyorum. 2012'de kurduğum Burak Oyunda
          Youtube kanalım ile Türkiye'de ilk 1 ve 2 milyon aboneye ulaşan kanal
          oldum. Kanalım şuan 3 milyondan fazla abone ve 1 milyardan fazla
          izlenmeye sahip. Coca-Cola, LG, Frito-Lay, Eti, Garanti Bankası gibi
          bir çok marka ile reklam çalışmaları yaptım. Kadir Has Üniversitesi
          Yeni Medya Bölümü mezunuyum.
        </p>
      </div>
      <div className="rightAbout" data-aos="fade-left">
        <img src="./assets/aboutBurak.png" alt="" className="burakAboutImg" />
      </div>
    </div>
  );
};

export default About;
