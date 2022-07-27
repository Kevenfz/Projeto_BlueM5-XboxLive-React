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
      margin-bottom: 3rem;
    }
  `}
`;

export const CadModal = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.modalCreateGame}
  `}
`;

export const LogoModal = styled.img`
  width: 90px;
  height: 90px;
  margin-top: -3rem;
`;

export const headerModal = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    .addGender {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all .4s;
      :hover {
        transform: scale(1.02);
        color: ${theme.colors.primaryColor};
      }
      .icon {
        margin-top: 4px;
      }
    }
  `}
`;

export const ImgModal = styled.img`
  width: 75px;
  height: 52px;
  margin-top: 1rem;
`;

export const MiddleForm = styled.form`
  ${({ theme }) => css`
    ${theme.mixins.InputCreateGameStyle}
    margin-top: 1rem;
    input {
      padding: 8px;
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
      font-family: ${theme.constants.gameFontFamily};
      font-weight: bold;
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
      font-family: ${theme.constants.gameFontFamily};
      font-weight: bold;
    }
    .url-img {
      padding: 8px;
    }
    .description {
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
      ::placeholder {
        position: absolute;
        top: .8rem;
      }
    }
  `}
`;

export const ButtonModal = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.btnOnStyle}/* margin-bottom: 2rem; */
  `}
`;
