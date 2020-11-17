import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  //border: 1px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;
`;
export const ColorBlock = styled.div`
  background-color: yellow;
  width: 20px;
  margin: -16px;
  border-radius: 5px 0 0 5px;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  justify-content: space-between;
`;
export const Day = styled.span`
  width: 100%;
  font-size: 2em;
  font-weight: bold;
`;
export const MidCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const Title = styled.span`
  font-size: 2em;
`;
export const Subtitle = styled.span`
  font-size: 1em;
`;
export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
`;
export const Percent = styled.span`
  font-size: 2em;
`;
export const StudentWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StudentOn = styled.span`
  color: green;
`;
export const StudentOff = styled.span`
  color: red;
`;
