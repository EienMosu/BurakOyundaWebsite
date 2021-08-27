import React, { useEffect } from "react";
import { Container, Image, Wrapper } from "./Sponsors.styles";
import { sponsorLogo } from "../../data";
//Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: -600 });
  }, []);

  return (
    <Container id="referans">
      {sponsorLogo.map((data) => (
        <Wrapper data-aos="fade-right">
          <Image src={data.link} />
        </Wrapper>
      ))}
    </Container>
  );
};

export default Sponsors;
