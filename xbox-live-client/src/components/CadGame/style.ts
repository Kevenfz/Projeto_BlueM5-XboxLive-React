import styled, { css } from "styled-components";

export const MainSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secundaryColor};
    font-family: ${theme.constants.newUserFontFamily};
    font-size: ${theme.constants.newUserFontSize};
    h1 {
      margin-bottom: 2rem;
    }
  `}
`;

export const CadModal = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.modalCreateGame}
  `}
`;

export const LogoModal = styled.img`
  width: 115px;
  height: 114px;
  margin-top: -3rem;
`;

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  input{
    margin-bottom: 20px;
    border: 1px dashed #DDD;
    background-size: cover;
    cursor: pointer;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MiddleForm = styled.form`
  ${({ theme }) => css`
    ${theme.mixins.InputCreateGameStyle}
    margin-top: 1rem;
    input {
      padding: 7px;
      border-radius: 5px;
      border: none;
      outline: none;
      font-size: 14px;
      color: ${theme.colors.secundaryColor};
      background: #3a3a3a9b;
      transition: all 0.6s;
    }
    input:focus {
      border: 0.7px solid;
      border-color: #0176018d;
      background-color: #01350149;
    }
    input::placeholder {
      color: rgb(128, 128, 128);
    }
    textarea {
      width: 393px;
      height: 100px;
      padding: 7px;
      border-radius: 5px;
      border: none;
      outline: none;
      font-size: 14px;
      color: ${theme.colors.secundaryColor};
      background: #3a3a3a9b;
      transition: all 0.6s;
    }
    textarea:focus {
      border: 0.7px solid;
      border-color: #0176018d;
      background-color: #01350149;
    }
    textarea::placeholder {
      color: rgb(128, 128, 128);
    }
  `}
`;

export const ButtonModal = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.btnOnStyle}
    margin-top: 1rem;
  `}
`;
