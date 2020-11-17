import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "normalize.css";
import GlobalStyle from "./global";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
