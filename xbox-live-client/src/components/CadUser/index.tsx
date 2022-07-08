import { MainSection } from "./style";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";

export const CadUser = () => {
  const navigate = useNavigate();

  const LoginPage = () => {
    navigate("/login");
  };

  return (
    <section className="CadUser-container">
      <S.Back>
        <RiLogoutCircleLine onClick={LoginPage} />
      </S.Back>
      <S.MainSection>
        <S.Modal>
          <S.Title>Cadastrar Usuario</S.Title>
          <S.Logo
            src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}
          />
          <S.FormCreate>
            <label className="Label" htmlFor="login">
              Nome
            </label>
            <input
              className="Input"
              type="text"
              name="login"
              id="login"
              placeholder="Digite seu Nome"
            />

            <label className="Label" htmlFor="senha">
              E-mail
            </label>
            <input
              className="Input"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite seu E-mail"
            />

            <label className="Label" htmlFor="senha">
              Senha
            </label>
            <input
              className="Input"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
            />

            <label className="Label" htmlFor="senha">
              Confirme sua Senha
            </label>
            <input
              className="Input"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite novamente sua senha"
            />

            <label className="Label" htmlFor="senha">
              CPF
            </label>
            <input
              className="Input"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite seu CPF"
            />
            <S.btnCad type="submit">Cadastrar</S.btnCad>
          </S.FormCreate>
        </S.Modal>
      </S.MainSection>
    </section>
  );
};
