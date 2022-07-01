import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import * as S from "./style";

export const Login = () => {
  const navigate = useNavigate();

  function CadPage() {
    navigate("/cadastro");
  }
  
  function HomePage() {
    navigate("/");
  }
  
  return (
    <S.Main>
      <S.XboxLogo onClick={HomePage} src={require("../../assets/icons/LogoHome.png")}
          alt="Logo Xbox"/>
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
            <S.LinkCad onClick={CadPage}>cadastre-se</S.LinkCad>
          </S.PLogin>
          <S.btnEnter type="submit">
            <b>Entrar</b>
          </S.btnEnter>
        </S.FormLogin>
      </S.Modal>
    </S.Main>

    // <div className="Modal">
    //   <div className="logo">
    //     <img src={require("../../assets/icons/LogoHome.png")} alt="" />
    //   </div>
    //   <div className="modal">
    //     <img
    //       src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}
    //       alt="Logo Xbox"
    //     />

    // <form>
    //   <label className="Label" htmlFor="login">
    //     Login
    //   </label>
    //   <input
    //     className="Input"
    //     type="text"
    //     name="login"
    //     id="login"
    //     placeholder="Digite seu email"
    //   />

    //   <label className="Label" htmlFor="senha">
    //     Senha
    //   </label>
    //   <input
    //     className="Input"
    //     type="password"
    //     name="senha"
    //     id="senha"
    //     placeholder="Digite sua senha"
    //   />
    //   <p >
    //     Não tem uma conta?
    //   </p>
    //   <span onClick={CadPage}>cadastre-se</span>
    //   <button>
    //     <b>Entrar</b>
    //   </button>
    // </form>

    //     <div className="Link-btn"></div>
    //   </div>
    // </div>
  );
};
