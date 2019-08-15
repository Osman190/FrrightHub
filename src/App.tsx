import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import Landing from "./Landing";
import Shipment from "./Shipment";
import { freightHubTheme } from "./styledComponents/Theme";
const history = createBrowserHistory();

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  transition: opacity 0.5s ease;
  flex-flow: column;
  opacity: 1
`;

const GlobalStyle: any = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  svg {
    box-sizing: content-box;
  }
  html, body, #root {
    height: 100%;
  }
  a {
    color: ${freightHubTheme.colors.main};
  }
`;

const App: React.FC<any> = (props: RouteComponentProps) => {
  return (
    <ThemeProvider theme={freightHubTheme}>
      <AppContainer>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
            <Route exact path="/" render={() => <Landing {...props}/>} />
          <Route exact path="/shipment" render={props => <Shipment {...props} />} />
        </Switch>
      </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
