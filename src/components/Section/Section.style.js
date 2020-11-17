import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background: ${(props) => props.theme.primary.background};
  padding: 1em 2em;
`;
