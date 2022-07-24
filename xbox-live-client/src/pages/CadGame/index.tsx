import React, { useState } from "react";
import { gameService } from "../../services/gameService";
import * as S from "./style";
import "../../helpers/sweetAlert.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

interface GameObj {
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: {
    genero: string;
  };
}

export const CadGame = () => {
  const [values, setValues] = useState({
    title: "",
    imgUrl: "",
    description: "",
    year: "",
    score: 0,
    traillerYtUrl: "",
    GplayYtUrl: "",
    genero: {
      genero: "",
    },
  });
  const navigate = useNavigate();

  const handleChangesValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: GameObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const registerGame = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await gameService.register(values);
    if (response.status == 201) {
      swal({
        title: "Game criado com sucesso!",
        icon: "success",
        timer: 7000,
      });
      navigate("/admin-page");
    } else {
      swal({
        title: "Erro!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 7000,
      });
    }
  };

  const descriptionGame = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await gameService.register(values);
  }
  return (
    <S.MainSection className="CadGame-container">
      <h1>Cadastrar Game</h1>
      <S.CadModal>
        <S.LogoModal
          src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}
        />
        <S.headerModal>
          <S.ImgModal src={require("../../assets/icons/controleXbox.png")} />
          <span>Cadastrar Gênero</span>
        </S.headerModal>

        <S.MiddleForm onSubmit={registerGame}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Nome do Game"
            onChange={handleChangesValue}
          />

          <input
            type="text"
            name="year"
            id="year"
            placeholder="Ano de lançamento"
            onChange={handleChangesValue}
          />

          <input
            type="number"
            name="score"
            id="score"
            placeholder="IMDB Score"
            onChange={handleChangesValue}
          />

          <input
            type="text"
            name="genero"
            id="genero"
            placeholder="Genero do game"
            onChange={handleChangesValue}
          />

          <input
            type="url"
            name="traillerYtUrl"
            id="traillerYtUrl"
            placeholder="Trailer Url"
            onChange={handleChangesValue}
          />

          <input
            type="url"
            name="GplayYtUrl"
            id="GplayYtUrl"
            placeholder="Gameplay Url"
            onChange={handleChangesValue}
          />

          <input
            type="url"
            name="Profile-picture"
            id="Profile-picture"
            placeholder="Url da imagem"
            className="url-img"
            onChange={handleChangesValue}
          />

          <textarea
            name="description"
            id="description"
            placeholder="Descrição"
            // onChange={handleChangesValue}
          />
          <S.ButtonModal type="submit">Cadastrar</S.ButtonModal>
        </S.MiddleForm>
      </S.CadModal>
    </S.MainSection>
  );
};
