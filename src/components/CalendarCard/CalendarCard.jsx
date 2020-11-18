import React from "react";
import * as S from "./CalendarCard.style";

function CalendarCard({ day, dayData, handlechange }) {
  return (
    <S.Wrapper onClick={handlechange}>
      <S.Data>
        <S.Day>{day}</S.Day>
        <span>18:00</span>
        <span>22:00</span>
      </S.Data>
      <S.MidCont>
        <S.Title>Lecture Title</S.Title>
        <S.Subtitle>Lecture subtitle</S.Subtitle>
      </S.MidCont>
      <S.RightCont>
        <S.Percent>{dayData.attendedPercent}%</S.Percent>
        <S.StudentWrap>
          <S.StudentOn>{dayData.attendedCount}</S.StudentOn>
          <S.StudentOff>{dayData.notAttendedCount}</S.StudentOff>
        </S.StudentWrap>
      </S.RightCont>
    </S.Wrapper>
  );
}

export default CalendarCard;
