import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const InfosGames = styled.section`
  /* width: 100%; */
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
`;

export const GameSection = styled.section`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secundaryColor};
    margin: 0;
  `}
`;

export const AllGames = styled.section`
  width: 27%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  h3 {
    text-align: center;
  }
`;

export const ImgGame = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 15px;
  object-fit: cover;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const SpaceAdmin = styled.header`
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 10px;
  gap: 15px;
  color: ${theme.colors.secundaryColor};
  font-size: 12px;
`;

export const InfoUser = styled.nav`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  cursor: context-menu;
`;

export const IconBack = styled.aside`
  ${({ theme }) => css`
    position: absolute;
    font-size: 2rem;
    left: 11.3rem;
    top: 1.5rem;
    transition: all 0.5s;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
      color: #10c800;
    }
  `}
`;

export const IconsUser = styled.aside`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 10px;
    right: 2rem;
    top: 1.5rem;
    font-size: 2rem;
    color: ${theme.colors.secundaryColor};
    transition: all 0.5s;
    cursor: pointer;
    img {
      width: 70px;
      height: 23px;
      cursor: context-menu;
    }
    p {
      font-size: 20px;
      color: ${theme.colors.secundaryColor};
      cursor: context-menu;
    }
    .Create-Game:hover {
      transform: scale(1.05);

      color: #10c800;
    }
    .Edit-User:hover {
      transform: scale(1.05);

      color: #10c800;
    }
  `}
`;

export const Generos = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    gap: 2rem;
    color: ${theme.colors.secundaryColor};
    font-family: ${theme.constants.gameFontFamily};
    font-size: 2rem;
    cursor: pointer;
    h2:hover {
      color: #10c800;
    }
  `}
`;

export const TitleGeneros = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  span {
    position: absolute;
    top: 2.5rem;
    font-weight: bold;
    font-size: 3.5rem;
  }
  :hover {
    color: #10c800;
    transform: scale(1.05);
  }
`;

export const imgGeneros = styled.img`
  object-fit: cover;
  height: 150px;
  border-radius: 10px;
  filter: brightness(0.5);
  cursor: pointer;
`;
