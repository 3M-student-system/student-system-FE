import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-width: 250px;
  max-width: 100%;
  padding: 15px;
  margin: 10px;
  background-color: white;
  //border: 1px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;

  @media (min-width: 980px) {
    width: calc(25% - 20px);
  }
  @media (min-width: 650px) {
    width: calc(50% -10px);
  }
`;
export const Data = styled.div`
  background-color: #ffc857;
  display: flex;
  flex-direction: column;
  margin: -15px;
  border-radius: 5px 0 0 5px;
  padding: 10px;
  justify-content: space-between;
  color: #412234;
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
  justify-content: space-around;
`;
export const Title = styled.span`
  font-size: 1.2em;
`;
export const Subtitle = styled.span`
  font-size: 1em;
`;
export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  justify-content: space-around;
`;
export const Percent = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`;
export const StudentWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StudentOn = styled.span`
  color: green;
  margin-right: 3px;
`;
export const StudentOff = styled.span`
  color: red;
`;
