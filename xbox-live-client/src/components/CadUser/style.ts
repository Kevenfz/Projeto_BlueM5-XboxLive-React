import styled, { css } from "styled-components";

export const MainSection = styled.section`
  ${({ theme }) => css`
    min-width: 100%;
    height: 100%;
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secundaryColor};
    font-family: ${theme.mixins.gameFontStyle};
    font-size: ${theme.mixins.modalFontStyle};
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.modalCreateUser};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 60px;
  `}
`;

export const FormCreate = styled.form`
  ${({ theme }) => css`
    ${theme.mixins.inputStyle}
    margin-bottom: 25px;
    margin-top: -25px;
  `}
`;

export const Logo = styled.img`
  width: 115px;
  height: 114px;
`;

export const btnCad = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.btnOnStyle}
    margin-bottom: 50px;
    margin-top: 10px;
  `}
`;
export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-left: -3rem;
  font-size: 3rem;
`;

export const Joystick = styled.img`
  ${() => css`
    width: 300px;
    height: 200px;
  `}
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.constants.titleModalFontFamily}
  `}
`;

export const Back = styled.aside`
 ${({ theme }) => css`
    ${theme.mixins.iconBack}
  `}
`