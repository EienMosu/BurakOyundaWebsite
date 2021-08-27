import React from "react";
import styled from "styled-components";
//components
import Enter from "./components/Enter/Enter";
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Stream from "./components/Stream/Stream";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import SponsorVideos from "./components/SponsorVideos/SponsorVideos";
import Contact from "./components/Contact";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

const Container = styled.div`
  top: 0;
  overflow: hidden;
  background: url("./assets/background.png");
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const TopContainer = styled.div`
  top: 0;
  overflow: hidden;
  background: url("./assets/mainBackground.png");
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const HalfContainer = styled.div`
  top: 0;
  background: url("./assets/background.png");
  height: 70vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const BottomContainer = styled.div`
  top: 0;
  background: url("./assets/background.png");
  height: 50vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const App = () => {
  return (
    <>
      <Enter />
      <Container>
        <TopContainer>
          <Slider />
        </TopContainer>
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Stream />
      </Container>
      <HalfContainer>
        <SocialMedia />
      </HalfContainer>
      <HalfContainer>
        <SponsorVideos />
      </HalfContainer>
      <Container>
        <Contact />
      </Container>
      <BottomContainer>
        <Sponsors />
        <Footer />
      </BottomContainer>
    </>
  );
};

export default App;
