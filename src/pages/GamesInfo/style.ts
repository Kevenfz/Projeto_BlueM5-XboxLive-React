import styled, { css } from "styled-components";
import theme from "../../assets/styles/theme";

export const GameInfoAll = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export const HeaderGameInfo = styled.header`
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 10px;
  gap: 15px;
  color: ${theme.colors.secundaryColor};
  font-size: 12px;
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

export const InfoAdmin = styled.nav`
  position: absolute;
  top: 1rem;
  left: 6rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  gap: 0.2rem;
  cursor: context-menu;
`;

export const ProfileImg = styled.img`
  position: absolute;
  top: 0.3rem;
  left: 1.7rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const IconBack = styled.aside`
  ${({ theme }) => css`
    position: absolute;
    font-size: 2rem;
    top: 1rem;
    left: 11.3rem;
    transition: all 0.5s;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
      color: #10c800;
    }
  `}
`;

export const IconsEditAdmin = styled.aside`
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
    .Edit-Game-Controler:hover {
      transform: scale(1.05);

      color: #10c800;
    }
    .Edit-Icon:hover {
      transform: scale(1.05);

      color: #10c800;
    }
  `}
`;

export const infoGamesMiddle = styled.section`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.616);
    border-radius: 2rem;
    width: 95rem;
    height: 51rem;
    display: flex;
    /* justify-content: center; */
    margin-top: 2rem;
    color: ${theme.colors.secundaryColor};
  `}
`;

export const infosGames = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  /* justify-content: center; */
  /* flex-direction: column; */
  gap: 1rem;
  padding: 2rem;
`;

export const infos = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 1.2rem;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 30%;
  margin-bottom: 1rem;
  .span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const infosData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  gap: 1rem;
  .span-title {
    font-size: 2rem;
    font-weight: bold;
    color: #008100;
  }
  .p-title {
    font-size: 2rem;
    font-weight: bold;
    color: #008100;
  }
  .b {
    font-size: 1.5rem;
    color: #fff;
  }
  .title-span {
    color: #fff;
    font-size: 1.5rem;
  }
`;
export const genderGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -1rem;
  width: 100%;
  gap: 1rem;
  .spanGame {
    font-weight: bold;
    font-size: 2rem;
    color: #008100;
  }
  .p-gender {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2rem;
  }
`;

export const gameImg = styled.img`
  width: 20rem;
  height: 26rem;
  border-radius: 1.1rem;
  margin-left: -1rem;
`;

export const infosMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  width: 80%;
`;

export const mediaGame = styled.iframe`
  width: 33rem;
  height: 23rem;
`;

export const framesGame = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const frameTrailler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .label-trailer {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const frameGameplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .label-gameplay {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const descriptionGame = styled.div`
  display: flex;
  font-size: 2.2rem;
  font-weight: bold;
  width: 100%;
  color: #008100;
  .p-description {
    font-size: 1.8rem;
    color: #fff;
    margin-top: 1rem;
  }
`;

export const playBtn = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.btnOnStyle}
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;
