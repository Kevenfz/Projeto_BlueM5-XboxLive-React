import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { userService } from "../../services/authService";
import React, { useState } from "react";
import swal from "sweetalert";
import "../../helpers/sweetAlert.css";

interface userObj {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  isAdmin: boolean;
}

export const CadUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    isAdmin: false,
  });

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const registerUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await userService.register(values);
    
    if (response.status == 201) {
      swal({
        title: "Usuário cadastrado com sucesso!",
        icon: "success",
        timer: 7000,
      });
      navigate("/login");
    } else {
      swal({
        title: "Erro!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 7000,
      });
    }
  };

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
          <S.FormCreate onSubmit={registerUser}>
            <label htmlFor="name">
              Nome
            </label>
            <input
              className="Input"
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu Nome"
              onChange={handleChangeValues}
            />

            <label htmlFor="email">
              E-mail
            </label>
            <input
              className="Input"
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu E-mail"
              onChange={handleChangeValues}
            />

            <label htmlFor="password">
              Senha
            </label>
            <input
              className="Input"
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onChange={handleChangeValues}
            />

            <label htmlFor="confirmPassword">
              Confirme sua Senha
            </label>
            <input
              className="Input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Digite novamente sua senha"
              onChange={handleChangeValues}
            />

            <label htmlFor="cpf">
              CPF
            </label>
            <input
              className="Input"
              type="text"
              name="cpf"
              id="cpf"
              placeholder="Digite seu CPF"
              onChange={handleChangeValues}
            />
            <S.btnCad type="submit">Cadastrar</S.btnCad>
          </S.FormCreate>
        </S.Modal>
      </S.MainSection>
    </section>
  );
};
