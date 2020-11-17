import styled from 'styled-components';

export const Card = styled.div`
  width: calc(25% - 20px);
  padding: 1em;
  border-radius: 10px;
  height: 300px;
  box-sizing: border-box;
  background-color: #ffffff;
  margin: 10px;
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
  height: 50%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.primary.background};
`;

export const Name = styled.h3`
  text-align: center;
  font-size: 1.1em;
  padding: 1em;
  color: ${(props) => props.theme.primary.color};

  &&:hover {
    text-decoration: underline;
  }
`;
