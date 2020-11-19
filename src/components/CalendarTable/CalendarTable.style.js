import styled from "styled-components";

export const TableCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;
export const Month = styled.h1`
  text-align: center;
  font-weight: bold;
  width: 100%;
`;
export const ListCardCont = styled.div`
  position: absolute;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
