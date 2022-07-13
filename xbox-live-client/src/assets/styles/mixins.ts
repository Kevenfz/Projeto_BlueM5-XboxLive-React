import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const modalLogin = () => css`
  background-color: ${colors.modalColor};
  width: 454px;
  height: 425px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const modalCreateUser = () => css`
  background-color: ${colors.modalColor};
  width: 450px;
  height: 660px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const modalCreateProfile = () => css`
  background-color: ${colors.modalColor};
  width: 508px;
  height: 473px;
  margin-top: 20px;
  border-radius: 15px;
`;

//TODO Colocar as configuarações que fizer lá no style e jogar tudo aqui, e passar apenas esse thema já do jeito certo sem bugar
const modalCreateGame = () => css`
  background-color: ${colors.modalColor};
  width: 508px;
  height: 473px;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const modalCreateGender = () => css`
  background-color: ${colors.modalColor};
  width: 508px;
  height: 206px;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-top: 8%;
`;

const modalUpdateGame = () => css`
  background-color: ${colors.modalColor};
  width: 508px;
  height: 473px;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-top: 8%;
`;

const modalUpdateUsers = () => css`
  background-color: ${colors.modalColor};
  width: 508px;
  height: 496px;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-top: 8%;
`;

const gameFontStyle = () => css`
  font-family: ${constants.gameFontFamily};
  font-size: ${constants.gameFontSize};
  line-height: ${constants.gameLineHeight};
`;

const modalFontStyle = () => css`
  font-family: ${constants.modalFontFamily};
  font-size: ${constants.modalFontSize};
  line-height: ${constants.modalLineHeight};
`;

const inputStyle = () => css`
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 362px;
  font-size: 14px;
  color: ${colors.secundaryColor};
  transition: all 0.6s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

const InputCreateGameStyle = () => css`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const homeBackground = () => css`
  background: url(/src/assets/images/backgroundHomePage.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: bottom;
`;

const profilesBackground = () => css`
  background: url(/src/assets/images/MainBackground1.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: bottom;
`;

const appBackground = () => css`
  background: url(/src/assets/images/MainBackground2.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: bottom;
`;

const gameAdminBackground = () => css`
  background: url(/src/assets/images/XboxBackgroundAdmin.png) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: bottom;
`;

const gameUserBackground = () => css`
  background: url(/src/assets/images/xboxBackgroundUser.jpg) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: bottom;
`;

const infoGameBackground = () => css`
  background: ${colors.backgroundFilter};
  background-blend-mode: darken;
`;

const logoModal = () => css`
  width: 118px;
  height: 117px;
`;

const btnOnStyle = () => css`
  width: 180px;
  padding: 13px;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  background-color: ${colors.buttonColor};
  border: none;
  cursor: pointer;
  transition: all 0.6s;
  font-family: ${constants.gameFontFamily};
  font-weight: bold;
  font-size: 25px;
  :hover {
    transform: scale(1.02);
    background-color: #10c800;
    color: aliceblue;
  }
`;

const btnOffStyle = () => css`
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  background-color: ${colors.buttonNoColor};
  border: none;
  cursor: pointer;
  transition: all 0.6s;
  font-size: 20px;
`;

const btnSearchImg = () => css`
  width: 142px;
  height: 45px;
  padding: 15px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  background-color: ${colors.buttonNoColor};
  border: none;
  cursor: pointer;
  transition: all 0.6s;
  font-size: 20px;
`;

const iconBack = () => css`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: #fff;
  /* background-color: #009D00; */
  padding: 0.3rem;
  font-size: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s all;
  :hover {
    color: #009d00;
    transform: scale(0.9);
  }
`;

export const mixins = {
  modalLogin,
  modalCreateUser,
  modalCreateProfile,
  modalCreateGame,
  modalCreateGender,
  modalUpdateGame,
  modalUpdateUsers,
  modalFontStyle,
  gameFontStyle,
  inputStyle,
  homeBackground,
  profilesBackground,
  gameAdminBackground,
  gameUserBackground,
  infoGameBackground,
  logoModal,
  btnOnStyle,
  btnOffStyle,
  btnSearchImg,
  iconBack,
  appBackground,
  InputCreateGameStyle,
};
