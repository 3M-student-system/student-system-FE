import React from "react";
import * as S from "./SelectInput.style";

function SelectInput({ options, handleChange }) {
  return (
    <S.Select onChange={handleChange} defaultValue>
      <option value="all">All</option>
      {options &&
        options
          // .map((car) => car.brand)
          // .filter((v, i, a) => a.indexOf(v) === i)
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
    </S.Select>
  );
}

export default SelectInput;
