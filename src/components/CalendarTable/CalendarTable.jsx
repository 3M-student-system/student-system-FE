import React from "react";
import { CalendarCard } from "../../components";
import * as S from "./CalendarTable.style";

function CalendarTable({ days, month }) {
  return (
    <S.TableCont>
      <S.Month>{month}</S.Month>

      {days.map((item) => (
        <CalendarCard day={item.day} />
      ))}
    </S.TableCont>
  );
}

export default CalendarTable;
