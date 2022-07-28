import styled, { css } from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Profiles = styled.section`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NamesProfiles = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.constants.modalFontFamily};
    font-size: ${theme.constants.modalFontSize};
    color: ${theme.colors.secundaryColor};
    text-align: center;
    margin-bottom: 15px;
    transition: all 0.4s;
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
  cursor: pointer;
  transition: all 0.5s;
  -webkit-box-shadow: -1px 10px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 10px 15px -3px rgba(0, 0, 0, 0.75);
  :hover {
    transform: scale(1.05);
  }
`;

export const Back = styled.aside`
  ${({ theme }) => css`
    ${theme.mixins.iconBack}
    
  `}
`;
