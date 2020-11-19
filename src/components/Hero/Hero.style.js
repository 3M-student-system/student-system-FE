import styled from "styled-components";

export const HeroBox = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
`;

export const HeroTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1rem;
`;

export const HeroStatus = styled.div`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const HeroInfo = styled.div`
  font-size: 1.2rem;
`;
