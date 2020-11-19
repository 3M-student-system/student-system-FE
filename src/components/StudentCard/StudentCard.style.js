import styled from "styled-components";

export const Card = styled.div`
         box-sizing: border-box;
         width: 100%;
         min-height: 120px;
         padding: 1rem;
         border-radius: 10px;
         display: flex;
         align-items: center;
         margin-bottom: 1.5rem;
         background: ${(props) =>
           props.color === "primary"
             ? props.theme.primary.background
             : props.theme.secondary.background};
         &:hover {
           cursor: pointer;
           -webkit-box-shadow: 0px 0px 8px 3px
             ${(props) => props.theme.primaryHover.background};
           box-shadow: 0px 0px 8px 3px
             ${(props) => props.theme.primaryHover.background};
         }
         &:active {
           cursor: pointer;
           -webkit-box-shadow: 0px 0px 8px 3px
             ${(props) => props.theme.primaryHover.color};
           box-shadow: 0px 0px 8px 3px
             ${(props) => props.theme.primaryHover.color};
         }

         @media only screen and (min-width: 576px) {
           display: block;
           margin-right: 10px;
           margin-left: 10px;
         }
         @media only screen and (min-width: 576px) and (max-width: 767px) {
           width: calc(50% - 10px);
           &:nth-child(odd) {
             margin-left: 0;
           }
           &:nth-child(even) {
             margin-right: 0;
           }
         }
         @media only screen and (min-width: 768px) and (max-width: 951px) {
           width: calc(33.33% - 13.33px);
           &:nth-child(3n + 1) {
             margin-left: 0;
           }
           &:nth-child(3n) {
             margin-right: 0;
           }
         }
         @media only screen and (min-width: 952px) {
           width: calc(25% - 15px);
           &:nth-child(4n + 1) {
             margin-left: 0px;
           }
           &:nth-child(4n) {
             margin-right: 0px;
           }
         }
       `;

export const ImgDiv = styled.div`
  display: none;
  @media only screen and (min-width: 375px) {
    display: block;
    box-sizing: border-box;
    width: calc(120px - 2rem);
    height: calc(120px - 2rem);
    margin: 0 2rem 0 0;
  }
  @media only screen and (min-width: 576px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;
export const Image = styled.img`
  box-sizing: border-box;
  vertical-align: top;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.primary.background};
`;

export const TextDiv = styled.div`
  @media only screen and (min-width: 576px) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const Name = styled.h3`
  margin: 0.5rem 0 1rem 0;
  @media only screen and (min-width: 576px) {
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    color: ${(props) => props.theme.primary.color};
  }
`;

export const Email = styled.p`
  display: none;
  @media only screen and (min-width: 576px) {
    display: inline;
    margin: 0;
    width: 100%;
    word-wrap: break-word;
    font-size: 0.8rem;
    color: ${(props) => props.theme.primary.color};
    opacity: 0.8;
  }
`;
