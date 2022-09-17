import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { loginService } from "../../services/authService";
import * as S from "./style";
import swal from "sweetalert";
import "./style.css";
import "../../helpers/sweetAlert.css";
import { STATUS_CODES } from "http";

interface UserLogin {
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
    setValues((values: UserLogin) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const LoginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values);
    const jwt = response.data.token;
    const user = response.data.user;
    const userId = response.data.user.id;

    if (response.status === 401) {
      swal({
        title: "ERRO!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 5000,
      });
    } else {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", userId);
      swal({
        title: "Seja bem vindo!",
        icon: "success",
        timer: 5000,
      });
      navigate("/profiles");
      console.log(response.data);
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
          <S.FormLogin onSubmit={LoginUser}>
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
              autoComplete="off"
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
              autoComplete="off"
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
