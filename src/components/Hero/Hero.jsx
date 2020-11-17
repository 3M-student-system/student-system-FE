import React from "react";
import * as S from "./Hero.style";

function Hero({ color, title, disabled, lectureDate, date }) {
  title = title || "Front-end course";

  const status = disabled
    ? "Registration disabled"
    : "Please register your attendance";
  const info = disabled ? `Upcoming lecture: ${lectureDate}` : `${date}`;

  return (
    <S.HeroBox color={color}>
      <S.HeroTitle>{title}</S.HeroTitle>
      <S.HeroStatus>{status}</S.HeroStatus>
      <S.HeroInfo>{info}</S.HeroInfo>
    </S.HeroBox>
  );
}

export default Hero;
