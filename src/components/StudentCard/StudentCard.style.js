import styled from 'styled-components';

export const Card = styled.div`
  width: 25%;
  padding: 1em;
  border-radius: 10px;
  height: 400px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 8px 3px
      ${(props) => props.theme.primaryHover.color};
    box-shadow: 0px 0px 8px 3px ${(props) => props.theme.primaryHover.color};
  }
`;

export const ImgDiv = styled.div`
  width: 60%;
  padding: 1em;
  margin: 0 auto;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.primary.background};
`;

export const Name = styled.h3`
  text-align: center;
  font-size: 1.5em;
  padding: 1em;
  color: ${(props) => props.theme.primary.color};

  &&:hover {
    text-decoration: underline;
  }
`;
