import { storiesOf } from "@storybook/react";
import React from "react";
import CalendarCard from "./CalendarCard";

storiesOf("Calendar", module).add("Card", () => <CalendarCard day="02" />);
