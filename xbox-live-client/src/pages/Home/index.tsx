import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function loginPage() {
    navigate("/login");
  }

  return (
    <S.Home className="Home-container">
      <S.Logo
        src={require("../../assets/icons/LogoHome.png")}
        alt="Logo Xbox"
      />
      <S.div>
        <S.Info>
          <S.h1>
            Xbox Game Pass
          </S.h1>
          <p>
            Jogue novos jogos no primeiro dia. Além disso, jogue centenas de
            jogos de alta qualidade no console, PC ou nuvem. Com jogos
            adicionados o tempo inteiro, sempre há algo novo para jogar.
          </p>
        </S.Info>
        <S.Joystick
          src={require("../../assets/icons/controleXbox.png")}
          alt="Controle do console Xbox"
        />
      </S.div>
      <S.ButtonLogin type="submit" onClick={loginPage}>
        Faça Login
      </S.ButtonLogin>
    </S.Home>
  );
};
