import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-width: 250px;
  padding: 15px;
  margin: 10px;
  background-color: ${(props) => props.theme.secondary.background};
  //border: 1px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  justify-content: space-between;

  @media (max-width: 920px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 580px) {
    width: calc(100% - 20px);
  }
  @media (min-width: 920px) {
    width: calc(25% -20px);
  }
`;
export const Data = styled.div`
  background-color: ${(props) => props.theme.primaryHover.background};
  display: flex;
  flex-direction: column;
  margin: -15px;
  border-radius: 5px 0 0 5px;
  padding: 10px;
  justify-content: space-between;
  color: ${(props) => props.theme.primary.color};
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
