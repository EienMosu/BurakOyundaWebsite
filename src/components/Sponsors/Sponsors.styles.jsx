import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 958px) {
    padding: 40px;
  }

  @media only screen and (max-width: 858px) {
    padding: 30px;
  }

  @media only screen and (max-width: 758px) {
    padding: 20px;
  }

  @media only screen and (max-width: 658px) {
    padding: 10px;
  }
`;

export const Image = styled.img`
  width: 150px;

  @media only screen and (max-width: 1500px) {
    width: 100px;
  }

  @media only screen and (max-width: 1100px) {
    width: 70px;
  }

  @media only screen and (max-width: 958px) {
    width: 50px;
  }

  @media only screen and (max-width: 858px) {
    width: 40px;
  }

  @media only screen and (max-width: 758px) {
    width: 30px;
  }

  @media only screen and (max-width: 658px) {
    width: 20px;
  }
`;
