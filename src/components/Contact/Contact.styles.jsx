import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  padding: 250px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1550px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Left = styled.div`
  width: 50%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1550px) {
    text-align: center;
    margin-bottom: 10%;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 50px;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10%;
  }
`;

export const Span = styled.span`
  color: white;
  font-size: 30px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Right = styled.div`
  width: 50%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1550px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;

  @media only screen and (max-width: 768px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Textarea = styled.textarea`
  width: 350px;
  height: 60%;
  padding: 20px;
  clip-path: polygon(0 0, 89% 0, 100% 25%, 100% 100%, 10% 100%, 0 80%);

  @media only screen and (max-width: 768px) {
    width: 250px;
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 20px;
  clip-path: polygon(0 0, 89% 0, 100% 30%, 100% 100%, 10% 100%, 0 76%);

  @media only screen and (max-width: 768px) {
    width: 130px;
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const SendButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  border: none;
  padding: 15px;
  font-size: 20px;
  position: relative;
  clip-path: polygon(0 0, 94% 0, 100% 40%, 100% 100%, 6% 100%, 0 60%);

  &:before {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: "";
    width: 0%;
    height: 100%;
    background: #0d1940;
    position: absolute;
    top: 0;
    left: 0;
  }

  span {
    color: white;
    mix-blend-mode: difference;
  }
  &:hover {
    &::before {
      background: #e6c837;
      width: 100%;
      clip-path: polygon(0 0, 94% 0, 100% 40%, 100% 100%, 6% 100%, 0 60%);
    }
  }
`;
