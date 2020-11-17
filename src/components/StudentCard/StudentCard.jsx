import React from 'react';
import * as S from './StudentCard.style';
function StudentCard({ image, name, surname, handleClick }) {
  const fullName = name + ' ' + surname;
  return (
    <S.Card onClick={handleClick}>
      <S.ImgDiv>
        <S.Image src={image} alt={fullName} />
      </S.ImgDiv>
      <div>
        <S.Name>{fullName}</S.Name>
      </div>
    </S.Card>
  );
}

export default StudentCard;
