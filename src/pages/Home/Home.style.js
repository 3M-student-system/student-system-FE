import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Wrapper = styled.div`
  padding: 10px;
`;

const Label = styled.label`
  width: calc(25% - 20px);
  margin: 10px;
`;

const Input = styled.input`
  display: none;
`;

export const ErrorText = styled.h3`
  color: #fff;
  background-color: #ed7a6d;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  padding: 1em;
`;
export { Label, Input };
