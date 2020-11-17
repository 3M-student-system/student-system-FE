import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  text-align: center;
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
`;

export const HeaderWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const TitleBar = styled.div`
  width: 100%;
  height: 70px;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 70px;
  font-size: 2em;
  text-transform: uppercase;
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 50px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 50%;
  line-height: 50px;
  font-size: 1.5em;
  text-transform: uppercase;
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
  &:focus {
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primaryHover.color
        : props.theme.secondaryHover.color};
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primaryHover.background
        : props.theme.secondaryHover.background};
  }
`;
