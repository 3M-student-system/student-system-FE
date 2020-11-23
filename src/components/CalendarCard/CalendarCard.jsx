import React from "react";
import * as S from "./CalendarCard.style";

function CalendarCard({ day, month, dayData, handleClick }) {
  return (
    <S.Wrapper onClick={handleClick}>
      <S.Data>
        <S.Day>{day}</S.Day>
        <S.Day>{month}</S.Day>
      </S.Data>
      <S.MidCont>
        <S.Title>Lecture Title</S.Title>
        <S.StudentWrap>
          <S.StudentOn>{dayData.attendedCount}</S.StudentOn>
          <S.StudentOff>{dayData.notAttendedCount}</S.StudentOff>
          <S.Percent>{dayData.attendedPercent}%</S.Percent>
        </S.StudentWrap>
      </S.MidCont>
    </S.Wrapper>
  );
}

export default CalendarCard;
