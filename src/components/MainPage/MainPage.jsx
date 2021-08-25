import React from "react";
import "./mainPage.scss";
//Components
import Slider from "../Slider/Slider";
import About from "../About/About";
import Stream from "../Stream/Stream";
import SocialMedia from "../SocialMedia/SocialMedia";
import SponsorVideos from "../SponsorVideos/SponsorVideos";
import Container from "../Contact";
import Sponsors from "../Sponsors";
import Footer from "../Footer";

const MainPage = () => {

return (
    <div className="mainPage" id="mainPage">
        <Slider />
        <About />
        <Stream />
        <SocialMedia />
        <SponsorVideos />
        <Container />
        <Sponsors />
        <Footer />
    </div>
  );
};

export default MainPage;
