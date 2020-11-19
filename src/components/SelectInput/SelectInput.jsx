import React from "react";
import * as S from "./SelectInput.style";

function SelectInput({ options, handleChange }) {
  return (
    <S.Select onChange={handleChange} defaultValue>
      {options &&
        options
          // .map((car) => car.brand)
          // .filter((v, i, a) => a.indexOf(v) === i)
          .map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
    </S.Select>
  );
}

export default SelectInput;
