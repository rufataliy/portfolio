import React, { useState } from "react";
import { Pages } from "./components";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./theme";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fontColors.medium};
  height: 100%;
  width: 100%;
`;

function App() {
  const [lightMode, setLightMode] = useState(true);
  const getTheme = (lightMode: boolean) => {
    if (lightMode) {
      return LightTheme;
    }
    return DarkTheme;
  };
  return (
    <ThemeProvider theme={getTheme(lightMode)}>
      <Wrapper>
        <button onClick={() => setLightMode(!lightMode)}>togggle theme</button>
        <GlobalStyles />
        <Pages />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
