import React from 'react';
import * as S from './InputField.style';

function InputField({ label, name, handleChange, defaultValue, type }) {
  switch (type) {
    case 'longtext':
      return (
        <S.InputDiv>
          <S.TextArea id="textarea" required onChange={handleChange}>
            {defaultValue}
          </S.TextArea>
          <S.Label htmlFor="textarea">{label}</S.Label>
        </S.InputDiv>
      );
    case 'email':
      return (
        <S.InputDiv>
          <S.InputField
            onChange={handleChange}
            id="input"
            name={name}
            type="email"
            required
          />
          <S.Label htmlFor="input">{label}</S.Label>
        </S.InputDiv>
      );
    case 'password':
      return (
        <S.InputDiv>
          <S.InputField
            onChange={handleChange}
            id="input"
            name={name}
            type="password"
            required
          />
          <S.Label htmlFor="input">{label}</S.Label>
        </S.InputDiv>
      );
    default:
      return (
        <S.InputDiv>
          <S.InputField
            onChange={handleChange}
            id="input"
            name={name}
            type="text"
            required
          />
          <S.Label htmlFor="input">{label}</S.Label>
        </S.InputDiv>
      );
  }
}

export default InputField;
