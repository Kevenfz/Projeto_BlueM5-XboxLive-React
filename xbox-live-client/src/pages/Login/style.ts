import styled, { css } from "styled-components";

export const Main = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: -40px;
    /* transition-timing-function: ease-in;
    transition-duration: 2s;
    transition-delay: 1s;
    transition-property: all; */
  `}
`;

export const XboxLogo = styled.img`
  ${() => css`
    width: 420px;
    height: 210px;
    /* margin-top: -40px; */
    cursor: pointer;
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.modalLogin};
    font-family: ${theme.mixins.modalFontStyle};
    font-size: ${theme.mixins.modalFontStyle};
    margin-top: 80px;
  `}
`;
export const Logo = styled.img`
  width: 118px;
  height: 117px;
  margin-top: -30px;
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
  justify-content: center;
  gap: 7px;
  margin-top: -12px;
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
    margin-top: -5px;
  `}
`;
