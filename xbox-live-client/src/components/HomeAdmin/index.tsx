import * as S from "./style";
import { games } from "../../mocks/games";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();
  const ProfilePage = () => {
    navigate("/profiles")
  }
  return (
    <section className="Admin-container">
      <S.SpaceAdmin>
        <S.ProfileImg src="https://m.extra.globo.com/incoming/24532417-e58-e59/w488h275-PROP/pateta-humano.jpg" />
        <S.InfoAdmin>
          <h1>User-Admin</h1>
          <span>ADMIN</span>
        </S.InfoAdmin>
        <S.IconBack>
          <RiLogoutCircleLine onClick={ProfilePage} />
        </S.IconBack>
      </S.SpaceAdmin>

      <S.IconsEditAdmin>
        <IoGameControllerOutline className="Create-Game" />
        <FaUserEdit className="Edit-User" />
        <img src={require("../../assets/icons/LogoXbox.png")} alt="Logo Xbox" />
        <p>23:58</p>
      </S.IconsEditAdmin>

      <S.GameSection>
        <h1>Favoritos</h1>
        {games.map((games) => (
          <S.AllGames>
            <S.ImgGame src={games.imgUrl} alt={`Capa do jogo ${games.title}`} />
            <h3>Score: ({games.score}) STARS </h3>
            {/* <S.IconFavWhite
              src={require("../../assets/icons/xbox-logoFaviritoBranco.png")}
            /> */}
          </S.AllGames>
        ))}
      </S.GameSection>

      {/* <span>FPS</span> */}
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
    </section>
  );
};
