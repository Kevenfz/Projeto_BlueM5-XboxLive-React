import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import * as S from "./style";
import { RiLogoutCircleLine } from "react-icons/ri";

export const Login = () => {
  const navigate = useNavigate();

  function CadPage() {
    navigate("/cad");
  }

  function HomePage() {
    navigate("/");
  }

  return (
    <section className="Login-container">
      <S.Back >
        <RiLogoutCircleLine onClick={HomePage}/>
      </S.Back>
      <S.Main>
        <S.Modal>
          <S.Logo
            src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}
            alt="Logo Xbox"
          />
          <S.FormLogin>
            <label className="Label" htmlFor="login">
              Login
            </label>
            <input
              className="Input"
              type="text"
              name="login"
              id="login"
              placeholder="Digite seu email"
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
            <S.PLogin>
              <p>Não tem uma conta?</p>
              <S.LinkCad onClick={CadPage}>Cadastre-se</S.LinkCad>
            </S.PLogin>
            <S.btnEnter type="submit">
              <b>Entrar</b>
            </S.btnEnter>
          </S.FormLogin>
        </S.Modal>
      </S.Main>
    </section>
  );
};
