import React, { useState } from "react";
import { PageList, ModeToggle } from "./components";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./theme";
import styled from "styled-components";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fontColors.medium};
  height: 100%;
  width: 100%;
  overflow: auto;
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
        <ModeToggle on={lightMode} onClick={() => setLightMode(!lightMode)} />
        <GlobalStyles />
        <Router history={history}>
          <Switch>
            <PageList />
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
