import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findById } from "../../services/gameService";
import { Games, ProfileOnly, ProfilesProps, userObj } from "../../types/types";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import * as S from "./style";
import { url } from "inspector";

export const GamesInfo = () => {
  const [allGames, setAllGames] = useState<Games>({
    id: "",
    title: "",
    imgUrl: "",
    description: "",
    year: "",
    score: 0,
    traillerYtUrl: "",
    GplayYtUrl: "",
    genero: [
      {
        genero: "",
      },
    ],
  });

  const [userData, setUserData] = useState<userObj>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    isAdmin: false,
  });

  const [userProfileLogged, setUserProfileLogged] = useState<ProfileOnly>({
    id: "",
    title: "",
    imgUrl: "",
  });

  const { id } = useParams();

  useEffect(() => {
    gameData();
    dataUsers();
    dataProfile();
  }, []);

  const gameData = async () => {
    if (id) {
      const gameData = await findById.IdGame(id);
      setAllGames(gameData.data);
    }
  };

  const dataUsers = () => {
    const data = JSON.stringify(localStorage.getItem("user"));
    const dataU = JSON.parse(data);
    const userData = JSON.parse(dataU);
    setUserData(userData);
  };

  const dataProfile = () => {
    const data = JSON.stringify(localStorage.getItem("profile"));
    const dataU = JSON.parse(data);
    const profileData = JSON.parse(dataU);
    setUserProfileLogged(profileData);
  };

  const returnButton = () => {
    window.history.back();
  };

  // const backgroundGameInfo = allGames.imgUrl;

  return (
    <S.GameInfoAll className="infoGame-container">
      <S.HeaderGameInfo>
        <S.ProfileImg
          src={userProfileLogged.imgUrl}
          alt={userProfileLogged.title}
        />

        <S.InfoAdmin>
          <h1>{userProfileLogged.title}</h1>
          <span>ADMIN</span>
        </S.InfoAdmin>

        <S.IconBack>
          <RiLogoutCircleLine onClick={returnButton} />
        </S.IconBack>
      </S.HeaderGameInfo>

      <S.IconsEditAdmin>
        <IoGameControllerOutline className="Edit-Game-Controler" />
        {/* <VscEdit className="Edit-Icon" /> */}
        <img src={require("../../assets/icons/LogoXbox.png")} alt="Logo Xbox" />
        <p>23:58</p>
      </S.IconsEditAdmin>

      <S.infoGamesMiddle>
        <S.infosGames>
          <S.infos>
            <S.gameImg src={allGames.imgUrl} alt={allGames.title} />
            <S.infosData>
              <span className="span-title">
                {" "}
                Game: <b className="b">{allGames.title}</b>
              </span>
              <p className="p-title">
                Avaliação: <span className="title-span">{allGames.score}</span>
              </p>
            </S.infosData>

            <S.genderGame>
              <span className="spanGame">Genero: </span>
              <p className="p-gender">
                {allGames.genero.map((gen) => (
                  <h4 className="genders">{gen.genero}</h4>
                ))}
              </p>
            </S.genderGame>
          </S.infos>

          <S.infosMedia>
            <S.framesGame>
              <S.frameTrailler>
                <label htmlFor="trailler" className="label-trailer">
                  Trailer
                </label>
                <S.mediaGame name="trailler" src={allGames.traillerYtUrl} />
              </S.frameTrailler>

              <S.frameGameplay>
                <label htmlFor="gameplay" className="label-gameplay">
                  Gameplay
                </label>
                <S.mediaGame name="gameplay" src={allGames.GplayYtUrl} />
              </S.frameGameplay>
            </S.framesGame>

            <S.descriptionGame>
              <p>
                Descrição:{" "}
                <p className="p-description">{allGames.description}</p>
              </p>
            </S.descriptionGame>
            <S.playBtn>JOGAR</S.playBtn>
          </S.infosMedia>
          
        </S.infosGames>
      </S.infoGamesMiddle>

    </S.GameInfoAll>
  );
};
