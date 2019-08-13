import React, { useState, useReducer, useEffect, useContext } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, RouteComponentProps } from "react-router-dom";
const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
