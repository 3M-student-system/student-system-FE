import React from 'react';
import * as S from './HeaderBase.style';

function HeaderBase({ color }) {
  return (
    <S.Header color={color}>
      <S.HeaderWrapper>
        <S.Title color={color}>Student attendance system</S.Title>
        <S.StyledLink color={color} to="/">
          Register
        </S.StyledLink>
        <S.StyledLink color={color} to="/view">
          View Attendance
        </S.StyledLink>
        <S.StyledLink color={color} to="/add-student">
          Add Student
        </S.StyledLink>
      </S.HeaderWrapper>
    </S.Header>
  );
}

export default HeaderBase;
