import styled, { css } from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Profiles = styled.div`
  width: 100%;
  /* margin: 0rem auto 0rem 10rem; */
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

export const NameProfiles = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.constants.modalFontFamily};
    font-size: ${theme.constants.modalFontSize};
    color: ${theme.colors.secundaryColor};
    text-align: center;
    margin-bottom: 15px;
    transition: all .4s;
    cursor: context-menu;
    :hover {
      color: #10c800;
      transform: scale(1.1);
    }
  `}
`;

export const ImgProfiles = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
`;

export const Back = styled.aside`
  ${({ theme }) => css`
    ${theme.mixins.iconBack}
  `}
`;
