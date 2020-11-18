import React from "react";
import { CalendarCard } from "../../components";
import * as S from "./CalendarTable.style.js";

function CalendarTable({ days, month }) {
  return (
    <S.TableWrapper>
      <h1>{month}</h1>

      {days.map((item) => (
        <CalendarCard day={item.day} />
      ))}
    </S.TableWrapper>
  );
}

export default CalendarTable;
