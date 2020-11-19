import styled from "styled-components";

export const FlexDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    max-width: calc(576px - 2rem);
  }
  @media only screen and (min-width: 768px) and (max-width: 951px) {
    max-width: calc(768px - 2rem);
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 1.5rem;
`;

export const ErrorText = styled.h3`
  color: #fff;
  background-color: #ed7a6d;
  margin: 0;
  text-align: center;
  border-radius: 10px;
  padding: 1em;
`;
