import React, { useState } from "react";
import { CalendarCard, StudentListCard } from "../../components";
import * as S from "./CalendarTable.style";

function CalendarTable({ days, month }) {
  const [clickedDay, setClickedDay] = useState();
  const [onOff, setOnOff] = useState(false);

  return (
    <S.TableCont>
      <S.Month>{month ? month.name : "All"}</S.Month>
      {clickedDay && (
        <S.ListCardCont>
          <StudentListCard
            dataofDay={clickedDay}
            listVisible={onOff}
            CloseList={() => setOnOff(false)}
          />
        </S.ListCardCont>
      )}
      {(days || []).map((day) => (
        <CalendarCard
          key={day.date}
          day={day.date.split("-")[2]}
          month={day.date.split("-")[1]}
          year={day.date.split("-")[0]}
          dayData={day}
          handleClick={() => {
            setClickedDay(day);
            setOnOff(!onOff);
            //console.log(day);
          }}
        />
      ))}
    </S.TableCont>
  );
}

export default CalendarTable;
