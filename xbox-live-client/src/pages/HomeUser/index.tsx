import * as S from "./style";
import "./style.css";
import { games } from "../../mocks/games";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findById } from "../../services/profileService";
import { allGamesService } from "../../services/gameService";
import swal from "sweetalert";

interface Profiles {
  id: string;
  title: string;
  imgUrl: string;
}

interface Games {
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: string[];
}

interface ProfilesProps {
  id: string;
  title: string;
  imgUrl: string;
  user: {
    id: string;
    isAdmin: boolean;
    name: string;
  };
}

export const UserPage = () => {
  const [allGames, setAllGames] = useState<Games[]>([
    {
      title: "",
      imgUrl: "",
      description: "",
      year: "",
      score: 0,
      traillerYtUrl: "",
      GplayYtUrl: "",
      genero: [],
    },
  ]);
  
  const [profiles, setProfiles] = useState<ProfilesProps>({
    id: "",
    title: "",
    imgUrl: "",
    user: {
      id: "",
      isAdmin: false,
      name: "",
    },
  });
  const { id } = useParams();
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    getAllGames();
    profilesData();
  }, []);

  const getAllGames = async () => {
    if (!jwt) {
      swal({
        title: "ERRO!",
        text: "Faça login antes de entrar na pagina de perfis.",
        icon: "error",
        timer: 7000,
      });
      navigate("/login");
    } else {
      const games = await allGamesService.allGames();
      console.log("Games exibidos", games);
      setAllGames(games.data);
    }
  };

  const profilesData = async () => {
    if (id) {
      const dataProfile = await findById.IdProfile(id);

      const profileInfo = {
        id: dataProfile?.data.id,
        title: dataProfile.data.title,
        imgUrl: dataProfile.data.imgUrl,
        user: {
          id: dataProfile.data.user.id,
          isAdmin: dataProfile.data.user.isAdmin,
          name: dataProfile.data.user.name,
        },
      };

      setProfiles({
        ...profiles,
        ...profileInfo,
      })
    }
  };
  
  const ProfilePage = () => {
    navigate("/profiles");
  };

  return (
    <section className="User-container">
      <S.SpaceAdmin>
        <S.ProfileImg src={profiles.imgUrl} />
        <S.InfoUser>
          <h1>{profiles.title}</h1>
          <span>536(C)</span>
        </S.InfoUser>
        <S.IconBack>
          <RiLogoutCircleLine onClick={ProfilePage} />
        </S.IconBack>
      </S.SpaceAdmin>

      <S.IconsUser>
        <img src={require("../../assets/icons/LogoXbox.png")} alt="Logo Xbox" />
        <p>23:58</p>
      </S.IconsUser>

      <S.InfosGames>
        <S.GameSection>
        {allGames.map((games, index) => (
            <S.AllGames key={index}>
              <S.ImgGame
                src={games.imgUrl}
                alt={`Capa do jogo ${games.title}`}
              />
              <h2>{games.score}</h2>
              {/* <S.IconFavWhite
              src={require("../../assets/icons/xbox-logoFaviritoBranco.png")}
            /> */}
            </S.AllGames>
          ))}
        </S.GameSection>

        <S.Generos>
          <h2>Generos</h2>
          <S.TitleGeneros>
            <S.imgGeneros
              src="https://compass-ssl.xbox.com/assets/7f/22/7f223c75-56e3-45d3-8389-96ed6687f62c.jpg?n=299441_GLP-Page-Hero-0_1083x609.jpg"
              alt="Genero FPS"
            />
            <span className="FPS">FPS</span>
          </S.TitleGeneros>
          <S.TitleGeneros>
            <S.imgGeneros
              src="https://psxbrasil.com.br/wp-content/uploads/2021/07/NBA-2K22.jpg"
              alt="Genero Esportes"
            />
            <span className="Esportes">ESPORTES</span>
          </S.TitleGeneros>
          <S.TitleGeneros>
            <S.imgGeneros
              src="https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/11/10173214/Assassins-Creed-Valhalla-Capa.jpg?fit=1280%2C720&ssl=1"
              alt="Genero Aventura"
            />
            <span className="Aventura">AVENTURA</span>
          </S.TitleGeneros>
          <S.TitleGeneros>
            <S.imgGeneros
              src="https://1.bp.blogspot.com/-8kpUDTGJNKU/YEfzpl474SI/AAAAAAAA6Ng/7Oa1nXFfCKYd3wDm8_3xm8u6h3XdHRWAwCLcBGAsYHQ/s1920/FH4%2BCapa.jpg"
              alt="Genero Corrida"
            />
            <span className="Corrida">CORRIDA</span>
          </S.TitleGeneros>
        </S.Generos>
      </S.InfosGames>
    </section>
  );
};
