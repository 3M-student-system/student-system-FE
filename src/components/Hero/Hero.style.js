import styled from "styled-components";

export const HeroBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1em 2em;
  min-height: 100px;
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
  margin: 0 0 1em 0;
`;

export const HeroStatus = styled.div`
  margin: 0 0 1em 0;
  text-transform: uppercase;
`;

export const HeroInfo = styled.div`
  margin: 0;
`;
