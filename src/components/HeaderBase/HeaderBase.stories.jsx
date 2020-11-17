import { storiesOf } from "@storybook/react";
import React from "react";
import HeaderBase from "./HeaderBase";
import StoryRouter from "storybook-react-router";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("HeaderBase", module)
  .addDecorator(StoryRouter())
  .add("HeaderBase | Primary color scheme", () => (
    <ThemeProvider theme={theme}>
      <HeaderBase color="primary" />
    </ThemeProvider>
  ))
  .add("HeaderBase | Secondary color scheme", () => (
    <ThemeProvider theme={theme}>
      <HeaderBase color="secondary" />
    </ThemeProvider>
  ));
