import { RiLogoutCircleLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { allGamesService } from "../../services/gameService";
import { useEffect, useState } from "react";
import { findById } from "../../services/profileService";
import * as S from "./style";
import "./style.css";
import swal from "sweetalert";

interface Games {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: string[];
}

interface ProfileProps {
  id: string;
  title: string;
  imgUrl: string;
  user: {
    id: string;
    isAdmin: boolean;
    name: string;
  };
  game: [
    {
      id: string;
      title: string;
      imgUrl: string;
      description: string;
      year: string;
      score: number;
      traillerYtUrl: string;
      GplayYtUrl: string;
      genero: string[];
    }
  ];
}

export const AdminPage = () => {
  const [allGames, setAllGames] = useState<Games[]>([
    {
      id: "",
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
  const [profiles, setProfiles] = useState<ProfileProps>({
    id: "",
    title: "",
    imgUrl: "",
    user: {
      id: "",
      isAdmin: false,
      name: "",
    },
    game: [
      {
        id: "",
        title: "",
        imgUrl: "",
        description: "",
        year: "",
        score: 0,
        traillerYtUrl: "",
        GplayYtUrl: "",
        genero: [],
      },
    ],
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
        text: "Faça login antes de entrar na pagina principal.",
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
      const profileInfo: ProfileProps = {
        id: dataProfile?.data.id,
        title: dataProfile.data.title,
        imgUrl: dataProfile.data.imgUrl,
        user: {
          id: dataProfile.data.user.id,
          isAdmin: dataProfile.data.user.isAdmin,
          name: dataProfile.data.user.name,
        },
        game: [
          {
            id: dataProfile.data.game.id,
            title: dataProfile.data.game.title,
            imgUrl: dataProfile.data.game.imgUrl,
            description: dataProfile.data.game.description,
            year: dataProfile.data.game.year,
            score: dataProfile.data.game.score,
            traillerYtUrl: dataProfile.data.game.traillerYtUrl,
            GplayYtUrl: dataProfile.data.game.GplayYtUrl,
            genero: [],
          },
        ],
      };
      setProfiles({
        ...profiles,
        ...profileInfo,
      });
    }
    console.log("profiles", profiles);
  };

  const createGame = () => {
    navigate("/cad-games");
  };

  const ProfilePage = () => {
    navigate("/profiles");
  };

  return (
    <section className="Admin-container">
      <S.SpaceAdmin>
        <S.ProfileImg src={profiles.imgUrl} />
        <S.InfoAdmin>
          <h1>{profiles.title}</h1>
          <span>ADMIN</span>
          {profiles.game.map((game) => (
            <h4>{game.title}</h4>
          ))}
        </S.InfoAdmin>
        <S.IconBack>
          <RiLogoutCircleLine onClick={ProfilePage} />
        </S.IconBack>
      </S.SpaceAdmin>

      <S.IconsEditAdmin>
        <IoGameControllerOutline className="Create-Game" onClick={createGame} />
        <FaUserEdit className="Edit-User" />
        <img src={require("../../assets/icons/LogoXbox.png")} alt="Logo Xbox" />
        <p>23:58</p>
      </S.IconsEditAdmin>

      <S.InfosGames>
        <S.GameSection>
          {allGames.map((games, index) => (
            <S.AllGames key={index}>
              <S.ImgGame
                src={games.imgUrl}
                alt={`Capa do jogo ${games.title}`}
                onClick={() => navigate(`/info-games/${games.id}`)}
              />
              <h2>{games.score}</h2>
              {/* <p>{games.genero}</p> */}
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

const LoginPage = () => {
  return (
    <section>
      <section className="card-login">
        <form >
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email"/>
          
          <label htmlFor="password">Senha</label>
          <input type="text" name="password"/>

          <button type="submit">Entrar</button>
        </form>
        
      </section>

      {/* <section className="img-login">
        <img src="" alt="Logo CR Coluna Reta" />
        <img src={require("../assets/img/computer-login-rafiki.svg")} alt="Ilustração de um usuario fazendo login na aplicação"/>
      </section> */}
    </section>
  );
};