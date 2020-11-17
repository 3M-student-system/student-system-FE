import React from 'react';
import * as S from './StudentCard.style';
function StudentCard({ image, name, surname, email, handleClick }) {
  const fullName = name + ' ' + surname;
  return (
    <S.Card onClick={handleClick}>
      <S.ImgDiv>
        <S.Image src={image} alt={fullName} />
      </S.ImgDiv>
      <S.TextDiv>
        <S.Name>{fullName}</S.Name>
        <S.Email>{email}</S.Email>
      </S.TextDiv>
    </S.Card>
  );
}

export default StudentCard;
