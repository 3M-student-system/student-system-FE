import styled from "styled-components";

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background: ${(props) => props.theme.primary.background};
  padding: 1em;
`;
