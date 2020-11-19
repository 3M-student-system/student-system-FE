import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  text-align: center;
  text-transform: uppercase;
`;

export const HeaderWrapper = styled.div`
  padding: 0 1em;
  max-width: 920px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 70px;
  font-size: 2em;
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
  font-size: 1.5em;
  text-decoration: none;
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &:hover {
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primaryHover.color
        : props.theme.secondaryHover.color};
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primaryHover.background
        : props.theme.secondaryHover.background};
  }

  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: calc(33.33% - 1rem);
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 1.5rem;
    }
  } ;
`;
