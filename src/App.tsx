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
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fontColors.medium};
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    api(`${process.env.REACT_APP_API_URL}/counts`, setCounts);
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
      <ThemeProvider theme={getTheme(lightMode)}>
        <GlobalStyles />
        <Context.Provider value={{ ...counts }}>
          <Wrapper>
            <Header
              on={lightMode === "light"}
              toggle={() => handleModeChange()}
            />
            <Switch>
              <PageList />
            </Switch>
          </Wrapper>
        </Context.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
