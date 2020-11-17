import { storiesOf } from "@storybook/react";
import React from "react";
import Hero from "./Hero";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("Hero", module)
  .add("Hero | Active registration | Primary color scheme", () => (
    <ThemeProvider theme={theme}>
      <Hero color="primary" />
    </ThemeProvider>
  ))
  .add("Hero | Active registration | Secondary color scheme", () => (
    <ThemeProvider theme={theme}>
      <Hero color="secondary" />
    </ThemeProvider>
  ))
  .add("Hero | Registration disabled | Primary color scheme", () => (
    <ThemeProvider theme={theme}>
      <Hero color="primary" disabled />
    </ThemeProvider>
  ))
  .add("Hero | Registration disabled | Secondary color scheme", () => (
    <ThemeProvider theme={theme}>
      <Hero color="secondary" disabled />
    </ThemeProvider>
  ));
