import { useState } from "react";
import { profileService } from "../../../services/profileService";
import { BiX } from "react-icons/bi";
import Modal from "react-modal";
import swal from "sweetalert";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

interface modalProps {
  isOpen: boolean; //modal aberto
  closeModal: any; //modal fechado
  // onChange: any; //função para verificar se é cadastro ou edição
  type: string; //createProfile editProfile
  title: string; // title = titulo do modal, criação ou edição
  btnName: string; // texto do botão
  id: string; // id do profile para edição
}

interface newProfile {
  imgUrl: string;
  title: string;
}

export const ModalProfile = ({
  isOpen,
  closeModal,
  type,
  title,
  btnName,
  id,
}: modalProps) => {
  const [createNewProfile, setCreateNewProfile] = useState<newProfile>({
    imgUrl: "",
    title: "",
  });
  const navigate = useNavigate();

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateNewProfile((values: newProfile) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const newProfileUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await profileService.register(createNewProfile);
    console.log(response);
    
    if (response.status == 201) {
      swal({
        title: "Perfil criado com sucesso!",
        icon: "success",
        timer: 7000,
      });
      closeModal();
      navigate("/profiles")
    } else {
      swal({
        title: "Erro!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 7000,
      });
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="overlay-react-modal"
        className="content-react-modal"
      >
        <button
          type="button"
          onClick={closeModal}
          className="close-modal-button"
        >
          <BiX />
        </button>
        <h2 className="modal-title">{title}</h2>
        <form onSubmit={newProfileUser} className="form-modal">
          <label className="label-modal" htmlFor="title">
            Nome do Perfil
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Nome do Perfil"
            onChange={handleChangesValues}
          />
          <label className="label-modal" htmlFor="imgUrl">
            Url da Imagem
          </label>
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            placeholder="Url da imagem"
            onChange={handleChangesValues}
          />
          <button className="btn-modal" type="submit">
            {btnName}
          </button>
        </form>
      </Modal>
    </>
  );
};
