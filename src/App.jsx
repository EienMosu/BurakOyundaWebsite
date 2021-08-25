import React from "react";
//components
import Enter from "./components/Enter/Enter";
import styled from "styled-components";
import MainPage from "./components/MainPage/MainPage";

const Container = styled.div`
  height: auto;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

const App = () => {
  return (
    <>
      <Enter />
      <Container>
        <MainPage />
      </Container>
    </>
  );
};

export default App;
