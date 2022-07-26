import React, { useEffect, useState } from "react";
import { gameService } from "../../services/gameService";
import { useNavigate } from "react-router-dom";
import { findAllGender } from "../../services/genderService";
import { ModalGender } from "../../components/Modals/ModalGender";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import swal from "sweetalert";
import Select from "react-select";
import * as S from "./style";
import "../../helpers/sweetAlert.css";

interface GameObj {
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: string[];
}

interface GenderObj {
  value: string;
  label: string;
}

export const CadGame = () => {
  const [values, setValues] = useState<GameObj>({
    title: "",
    imgUrl: "",
    description: "",
    year: "",
    score: 0,
    traillerYtUrl: "",
    GplayYtUrl: "",
    genero: [],
  });
  const [dataGender, setDataGender] = useState<string[]>([]);
  const [genderOptions, setGenderOptions] = useState<GenderObj[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  // const styles = {
  //   control: styles => ({...styles, backgroundColor: "#3a3a3a9b"}),
  //   option: (styles, {data, isDisable, isFocused, isSelected}) => {
  //     const color = chroma(data.color);
  //   return {
  //     ...styles,
  //     backgroundColor: isDisable ? 'red' : 'blue',
  //     color: '#FFF',
  //     cursor: isDisable ? 'not-allowed' : 'default',
  //     ...
  //   };
  // },
  // ...
  //   }
  // };

  useEffect(() => {
    getGenders();
  }, []);

  const handleChangesValue = (event: React.ChangeEvent<any>) => {
    if (event.target.name === "score") {
      setValues((values: GameObj) => ({
        ...values,
        [event.target.name]: parseInt(event.target.value),
      }));
    } else {
      setValues((values: GameObj) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleChangesGender = (genders: any) => {
    const genderIds = genders.map((gender: any) => gender.value);
    setDataGender(genderIds);
  };

  const registerGame = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const game = {
      ...values,
      genero: dataGender,
    };
    const response = await gameService.register(game);

    if (response.status === 201) {
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

  const getGenders = async () => {
    if (!jwt) {
      swal({
        title: "ERRO!",
        text: "Faça login antes para acessar esta sessão.",
        icon: "error",
        timer: 7000,
      });
      navigate("/login");
    } else {
      const response = await findAllGender.allGenders();
      if (response.data) {
        const genderOptions = response.data.map((gender: any) => {
          return {
            value: gender.id,
            label: gender.genero,
          };
        });
        setGenderOptions(genderOptions);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.MainSection className="CadGame-container">
      <h1>Cadastrar Game</h1>
      <S.CadModal>
        <S.LogoModal
          src={require("../../assets/icons/xbox-logoFavoritoVerde.png")}
        />
        <S.headerModal>
          <S.ImgModal src={require("../../assets/icons/controleXbox.png")} />
          <div className="addGender">
            <span onClick={openModal}>Novo Gênero</span>
            <span onClick={openModal} className="icon">
              <MdOutlineBookmarkAdd />
            </span>
          </div>
          <ModalGender
            isOpen={isModalOpen}
            closeModal={closeModal}
            type="createGender"
            title="Criar Gênero"
            btnName="Criar"
            id=""
          />
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
            placeholder="Lançamento, ex: 01/01/2010"
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
            name="imgUrl"
            id="imgUrl"
            placeholder="Url da imagem"
            className="url-img"
            onChange={handleChangesValue}
          />

          <textarea
            name="description"
            id="description"
            placeholder="Descrição"
            onChange={handleChangesValue}
          />

          <Select
            name="genero"
            options={genderOptions}
            onChange={handleChangesGender}
            placeholder={"Selecione um gênero..."}
            isMulti
            
            // styles={styles}
          />
          <S.ButtonModal type="submit">Cadastrar</S.ButtonModal>
        </S.MiddleForm>
      </S.CadModal>
    </S.MainSection>
  );
};
