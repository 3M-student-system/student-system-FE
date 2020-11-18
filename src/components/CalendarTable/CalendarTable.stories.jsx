import { storiesOf } from "@storybook/react";
import React from "react";
import CalendarTable from "./CalendarTable";

const daysarray = [{ day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }];

storiesOf("Calendar", module).add("Table", () => (
  <CalendarTable days={daysarray} month="No" />
));
