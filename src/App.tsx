import React, { useState, useEffect } from "react";
import { PageList, Header } from "./components";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./theme";
import styled from "styled-components";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { api } from "./util";
import { Context } from "./Context";

const history = createBrowserHistory();

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fontColors.medium};
  height: 100%;
  width: 100%;
`;

function App() {
  const [counts, setCounts] = useState({
    data: { attributes: { pages: 0, projects: 0 } },
  });

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}/api/count`, setCounts);
  }, []);

  const [lightMode, setLightMode] = useState(
    window.localStorage.getItem("mode")
  );

  const getTheme = (lightMode: string | null) => {
    if (lightMode === "light") {
      return LightTheme;
    }
    return DarkTheme;
  };

  const handleModeChange = () => {
    setLightMode((mode) => (mode === "light" ? "dark" : "light"));
    if (lightMode === "light") {
      window.localStorage.setItem("mode", "dark");
    } else {
      window.localStorage.setItem("mode", "light");
    }
  };

  return (
    <Router history={history}>
      <GlobalStyles />
      <ThemeProvider theme={getTheme(lightMode)}>
        <Context.Provider value={{ counts: counts.data.attributes }}>
          <Background>
            <Wrapper>
              <Header
                on={lightMode === "light"}
                toggle={() => handleModeChange()}
              />
              <Switch>
                <PageList />
              </Switch>
            </Wrapper>
          </Background>
        </Context.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
