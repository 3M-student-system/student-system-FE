import React from "react";
import * as S from "./StudentListCard.style";

function StudentListCard({ dataofDay, listVisible, CloseList }) {
  return (
    <S.ListWrapp listVisible={listVisible}>
      <S.Head>
        <S.H3>{dataofDay.date}</S.H3>
      </S.Head>
      {dataofDay.studentList.map((student) => {
        return (
          <S.Line key={student.id}>
            <S.H4>
              {student.name} {student.surname}
            </S.H4>
            <S.H4>{student.attended === true ? "Yes" : "No"}</S.H4>
          </S.Line>
        );
      })}
      <S.ButtonCont>
        <S.StyledButton handleClick={CloseList}>Close</S.StyledButton>
      </S.ButtonCont>
    </S.ListWrapp>
  );
}

export default StudentListCard;
