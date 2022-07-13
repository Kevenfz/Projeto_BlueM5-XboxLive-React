import React from "react";
import * as S from "./style";

export const CadGame = () => {
  return (
    <S.MainSection className="CadGame-container">
      <h1>Cadastrar Game</h1>
      <S.CadModal>
        <S.LogoModal src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}/>
        <S.HeaderModal>
          <input type="file" name="Profile-picture" id="Profile-picture" />
        </S.HeaderModal>

        <S.MiddleForm>
          <input type="text" name="GameName" id="GameName" placeholder="Nome do Game..."/>

          <input type="text" name="DateGame" id="DateGame" placeholder="Ano de lançamento..."/>

          <input type="text" name="ScoreGame" id="ScoreGame" placeholder="IMDB Score..."/>

          <input type="text" name="GenderGame" id="GenderGame" placeholder="Genero do game..."/>

          <input type="text" name="TrailerGame" id="TrailerGame" placeholder="Trailer Url..."/>

          <input type="text" name="Gameplay" id="Gameplay" placeholder="Gameplay Url..."/>

          <textarea name="DescriptionGame" id="DescriptionGame" placeholder="Descrição..."/>
        </S.MiddleForm>
        <S.ButtonModal type="submit">Cadastrar</S.ButtonModal>
      </S.CadModal>
    </S.MainSection>
  );
};
