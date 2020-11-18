import React, { useState } from "react";
import { Section, CalendarTable, SelectInput } from "../../components";
import * as S from "./View.style";

function View() {
  const [selectedMonth, setSelectedMonth] = useState("All months");

  const daysArr = [
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
  ];
  const monthArr = ["November", "December"];
  const classArr = ["Petro vakariniai", "Petro dieniniai"];

  return (
    <Section background="999" fullWidth={false}>
      <S.InputCont>
        <S.InputWrapp>
          <S.InputLabel>Class</S.InputLabel>
          <SelectInput options={classArr} />
        </S.InputWrapp>
        <S.InputWrapp>
          <S.InputLabel>Month</S.InputLabel>
          <SelectInput
            options={monthArr}
            handleChange={(e) => setSelectedMonth(e.target.value)}
          />
        </S.InputWrapp>
      </S.InputCont>
      <CalendarTable days={daysArr} month={selectedMonth} />
    </Section>
  );
}

export default View;
