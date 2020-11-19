import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  text-align: center;
  text-transform: uppercase;
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
`;

export const HeaderWrapper = styled.div`
  padding: 0 1em;
  @media only screen and (min-width: 1024px) {
    max-width: 992px;
    margin: 0 auto;
  } ;
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
  line-height: 50px;
  font-size: 1.5em;
  text-decoration: none;
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
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
    width: 50%;
  } ;
`;
