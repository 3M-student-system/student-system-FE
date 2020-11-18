import React from "react";
import { Section, CalendarTable } from "../../components";

function View() {
  const daysarray = [{ day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }];
  const month = "November";
  return (
    <Section background="999" fullWidth={false}>
      <CalendarTable days={daysarray} month={month} />
    </Section>
  );
}

export default View;
