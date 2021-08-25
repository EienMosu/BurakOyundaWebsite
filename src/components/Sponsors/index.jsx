import React from "react";
import { Container, Image, Wrapper } from "./Sponsors.styles";
import { sponsorLogo } from "../../data";

const Sponsors = () => {
  return (
    <Container>
      {sponsorLogo.map((data) => (
        <Wrapper>
          <Image src={data.link} />
        </Wrapper>
      ))}
    </Container>
  );
};

export default Sponsors;
