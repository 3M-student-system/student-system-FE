import styled from 'styled-components';

export const InputDiv = styled.div`
  position: relative;
  margin-bottom: 40px;
  && input:focus ~ label {
    top: -25px;
    font-size: 15px;
  }
  && input:valid ~ label {
    top: -25px;
    font-size: 15px;
  }
  && textarea:focus ~ label {
    top: -25px;
    font-size: 15px;
  }
  && textarea:valid ~ label {
    top: -25px;
    font-size: 15px;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 18px;
  color: ${(props) => props.theme.primary.color};
  transition: all 0.5s ease-in-out;
  padding: 5px;
`;

export const InputField = styled.input`
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.secondary.background};
  width: 100%;
  padding: 10px 0 7px 0;
  font-size: 16px;
  color: #000;
  border-radius: 3px;
  &&:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.secondary.color};
  }
`;
export const TextArea = styled.textarea`
  border: 0;
  border-bottom: 2px solid rgba(145, 145, 145, 0.72);
  width: 100%;
  min-height: 100px;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #000;
  resize: none;
  &&:focus {
    outline: none;
    border-image-source: linear-gradient(
      227deg,
      rgba(133, 29, 203, 0.375770376509979) 7%,
      rgba(132, 32, 149, 0.7343137938769257) 32%,
      rgba(180, 103, 70, 0.9051821412158614) 77%
    );
    border-image-slice: 2;
  }
`;
