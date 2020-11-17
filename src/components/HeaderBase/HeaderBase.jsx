import React from "react";
import * as S from "./HeaderBase.style";
function HeaderBase({ color }) {
  return (
    <S.Header color={color}>
      <S.HeaderWrapper>
        <S.TitleBar>
          <S.Title color={color}>Student attendance system</S.Title>
        </S.TitleBar>
        <S.NavBar>
          <S.StyledLink color={color} to="/">
            Register
          </S.StyledLink>
          <S.StyledLink color={color} to="/about">
            View
          </S.StyledLink>
        </S.NavBar>
      </S.HeaderWrapper>
    </S.Header>
  );
}

export default HeaderBase;
