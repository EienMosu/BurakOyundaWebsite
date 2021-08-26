import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="leftAbout">
        <h2>BURAK ŞAHİN</h2>
        <p className="aboutP" >
          Merhaba, 2012 yılından beri dijital mecrada içerik üretiyor, reklam ve
          pazarlama stratejileri yaratıyorum. 2012'de kurduğum Burak Oyunda
          Youtube kanalım ile Türkiye'de ilk 1 ve 2 milyon aboneye ulaşan kanal
          oldum. Kanalım şuan 3 milyondan fazla abone ve 1 milyardan fazla
          izlenmeye sahip. Coca-Cola, LG, Frito-Lay, Eti, Garanti Bankası gibi
          bir çok marka ile reklam çalışmaları yaptım. Kadir Has Üniversitesi
          Yeni Medya Bölümü mezunuyum.
        </p>
      </div>
      <div className="rightAbout">
        <img src="./assets/aboutBurak.png" alt="" className="burakAboutImg" />
      </div>
    </div>
  );
};

export default About;
