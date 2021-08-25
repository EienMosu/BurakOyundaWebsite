import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3990px;
  height: 100px;
  width: 100vw;
  display: flex;
  position: absolute;

  @media only screen and (max-width: 768px) {
    margin-top: 3700px;
  }

  @media only screen and (max-width: 568px) {
    margin-top: 3600px;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 14px;
  color: white;
`;
