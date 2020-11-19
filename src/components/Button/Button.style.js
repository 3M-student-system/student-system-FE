import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  &:hover {
    outline: none;
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
    outline: none;
  }
`;
