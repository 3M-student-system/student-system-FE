import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5em;
  height: 40px;
  font-size: 1.2em;
  border-radius: 5px;
  border: 1px solid #412234;
  &:focus {
    border: 1px solid #6b3856;
    outline: none;
  }
`;
