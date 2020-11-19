import styled from "styled-components";
import { Button } from "../../components";

export const ListWrapp = styled.div`
  width: 100%;
  display: ${(prop) => (prop.listVisible === true ? "block" : "none")};
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 5px 5px 15px 5px #919191;
`;
export const Head = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  padding: 10px 0;
  justify-content: space-between;
`;
export const H3 = styled.h1`
  margin: 5px 0;
`;
export const H4 = styled.h4`
  margin: 3px;
`;
export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
export const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonCont = styled.div`
  margin-top: 15px;
`;
