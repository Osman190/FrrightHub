import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppContainer } from "./styledComponents/Elements";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import { AppProvider } from "./AppProvider";
import Landing from "./Landing";
import SingleShipment from "./SingleShipment";
import { freightHubTheme } from "./styledComponents/Theme";
const history = createBrowserHistory();


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
          <AppProvider>
            <Switch>
              <Route exact path="/" render={props => <Landing {...props} />} />
              <Route exact path="/shipment/:id" render={props => <SingleShipment {...props} />} />
          </Switch>
          </AppProvider>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
