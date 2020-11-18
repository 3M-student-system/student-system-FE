import React from "react";
import { CalendarCard } from "../../components";
import * as S from "./CalendarTable.style";

function CalendarTable({ days, month }) {
  return (
    <S.TableCont>
      <S.Month>{month ? month.name : "All"}</S.Month>

      {(days || []).map((day) => (
        <CalendarCard
          key={day.date}
          day={day.date.split("-")[2]}
          month={day.date.split("-")[1]}
          year={day.date.split("-")[0]}
          attendance={day.attendance}
        />
      ))}
    </S.TableCont>
  );
}

export default CalendarTable;
