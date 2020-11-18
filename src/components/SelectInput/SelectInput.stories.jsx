import { storiesOf } from "@storybook/react";
import React from "react";
import SelectInput from "./SelectInput";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("Input", module).add("SelectInput", () => (
  <ThemeProvider theme={theme}>
    <SelectInput
      options={["Petro vakariniai", "Petro dieniniai"]}
      handleChange={(e) => console.log(e.target.value)}
    />
  </ThemeProvider>
));
