import styled, { css } from "styled-components";

export const Main = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url(/src/assets/images/MainBackground2.jpg);
  `}
`;

export const XboxLogo = styled.img`
  ${() => css`
    width: 420px;
    height: 210px;
    margin-top: -40px;
    cursor: pointer;
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.modalLogin};
    font-family: ${theme.mixins.gameFontStyle};
    font-size: ${theme.mixins.modalFontStyle};
  `}
`;

export const Logo = styled.img`
  width: 118px;
  height: 117px;
  margin-top: -40px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  color: aliceblue;
  margin-top: 12px;
  width: 70%;
  height: 100%;
`;

export const InputLogin = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputStyle}
  `}
`;

export const PLogin = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  margin-left: 6px;
`;

export const LinkCad = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primaryColor};
  `}
`;

export const btnEnter = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.btnOnStyle}
    margin-top: 5px;
  `}
`;

export const Back = styled.aside`
 ${({ theme }) => css`
    ${theme.mixins.iconBack}
  `}
`