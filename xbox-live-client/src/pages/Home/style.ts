import styled, { css } from "styled-components";
import { mixins } from "../../assets/styles/mixins";

export const Home = styled.section`
  ${({ theme }) => css`
    min-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    color: ${theme.colors.secundaryColor};
    overflow-x: hidden;
    /* background: ${mixins.gameAdminBackground}; */
  `}
`;

export const div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -20px
`

export const Logo = styled.img`
  ${() => css`
    width: 620px;
    height: 310px;
    margin-top: -40px;
  `}
`;
export const Joystick = styled.img`
  ${() => css`
    width: 300px;
    height: 200px;
    margin-top: 45px;
  `}
`;

export const Info = styled.p`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: ${theme.constants.modalFontFamily};
    font-size: ${theme.constants.modalFontSize};
    line-height: ${theme.constants.modalLineHeight};
  `}
`;

export const h1 = styled.h1`
  ${({ theme }) => css`
    margin-bottom: -20px;
    font-family: ${theme.constants.modalFontFamily};
    font-size: ${theme.constants.modalFontSize};
  `}
`;

export const ButtonLogin = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.btnOnStyle}
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 25px;
    margin-top: 50px
    width: 100%
  `}
`