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
            <label className="Label" htmlFor="nome">
              Nome
            </label>
            <input
              className="Input"
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu Nome"
            />

            <label className="Label" htmlFor="email">
              E-mail
            </label>
            <input
              className="Input"
              type="email"
              name="email"
              id="email"
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

            <label className="Label" htmlFor="confirmSenha">
              Confirme sua Senha
            </label>
            <input
              className="Input"
              type="password"
              name="confirmSenha"
              id="confirmSenha"
              placeholder="Digite novamente sua senha"
            />

            <label className="Label" htmlFor="CPF">
              CPF
            </label>
            <input
              className="Input"
              type="password"
              name="CPF"
              id="CPF"
              placeholder="Digite seu CPF"
            />
            <S.btnCad type="submit">Cadastrar</S.btnCad>
          </S.FormCreate>
        </S.Modal>
      </S.MainSection>
    </section>
  );
};
