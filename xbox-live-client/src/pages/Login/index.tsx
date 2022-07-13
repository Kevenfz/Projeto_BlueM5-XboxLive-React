import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import * as S from "./style";
import { RiLogoutCircleLine } from "react-icons/ri";
import swal from "sweetalert";
import { loginService } from "../../services/authService";

interface userLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLogin) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await loginService.login(values);
    const jwt = response.data.token;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      swal({
        title: "Seja bem vindo!",
        icon: "success",
        timer: 3000,
      });
      navigate("/profiles");
    }
  };

  function CadPage() {
    navigate("/cad-users");
  }

  function HomePage() {
    navigate("/");
  }

  return (
    <section className="Login-container">
      <S.Back>
        <RiLogoutCircleLine onClick={HomePage} />
      </S.Back>
      <S.Main>
        <S.Modal>
          <S.Logo
            src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}
            alt="Logo Xbox"
          />
          <S.FormLogin onSubmit={loginUser}>
            <label className="Label" htmlFor="email">
              Login
            </label>
            <input
              className="Input"
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email"
              onChange={handleChangesValues}
            />

            <label className="Label" htmlFor="password">
              Senha
            </label>
            <input
              className="Input"
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onChange={handleChangesValues}
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
