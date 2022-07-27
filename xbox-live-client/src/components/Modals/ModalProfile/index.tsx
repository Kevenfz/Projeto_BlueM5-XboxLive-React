import React, { useEffect, useState } from "react";
import {
  profileService,
  findById,
  updateService,
  deleteService,
} from "../../../services/profileService";
import { BiX } from "react-icons/bi";
import Modal from "react-modal";
import swal from "sweetalert";
import "./style.css";

Modal.setAppElement("#root");

interface modalProps {
  isOpen: boolean; //modal aberto
  closeModal: any; //modal fechado
  onChanges: any; //função para verificar se é cadastro ou edição
  type: string; //createProfile editProfile
  title: string; // title = titulo do modal, criação ou edição
  btnName: string; // texto do botão
  id: string; // id do profile para edição
}

//TODO Atualizar o perfil sem informar um jogo
interface newProfile {
  imgUrl: string;
  title: string;
  game?: [];
}

export const ModalProfile = ({
  isOpen,
  closeModal,
  type,
  title,
  btnName,
  onChanges,
  id,
}: modalProps) => {
  const [createNewProfile, setCreateNewProfile] = useState<newProfile>({
    imgUrl: "",
    title: "",
  });

  useEffect(() => {
    type === "editProfiles" && isOpen ? getProfileById() : "";
    type === "createProfiles"
      ? setCreateNewProfile({
          imgUrl: "",
          title: "",
        })
      : "";
  }, [isOpen]);

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateNewProfile((values: newProfile) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const newProfileUser = async () => {
    const newProfile = await profileService.register(createNewProfile);
    if (newProfile.status === 201) {
      swal({
        title: "Perfil criado com sucesso!",
        icon: "success",
        timer: 7000,
      });
      onChanges(newProfile);
      closeModal();
    } else {
      swal({
        title: "Erro!",
        text: `${newProfile.data.message}`,
        icon: "error",
        timer: 7000,
      });
    }
  };

  const getProfileById = async () => {
    const response = await findById.IdProfile(id);
    setCreateNewProfile(response.data);
  };

  const editProfileUser = async () => {
    const editProfile = await updateService.updateProfile(createNewProfile, id);
    if (editProfile.status === 400) {
      swal({
        title: "Erro!",
        text: `${editProfile.data.message}`,
        icon: "error",
        timer: 7000,
      });
    } else {
      swal({
        title: "Sucesso!",
        text: "Perfil atualizado com sucesso!",
        icon: "success",
        timer: 7000,
      });
      onChanges(editProfile);
      closeModal();
    }
  };

  const deleteModalProfile = () => {
    swal({
      title: "Deseja apagar perfil?",
      icon: "error",
      buttons: ["Não", "Sim"],
    }).then((resp) => {
      if (resp) {
        deleteProfile();
      }
    });
  };

  const deleteProfile = async () => {
    const response = await deleteService.deleteProfiles(id);
    swal({
      text: "Perfil apagado com sucesso!",
      icon: 'success',
      timer: 7000
    })
    onChanges(response);
    closeModal();
  };

  const submitFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (type === "createProfiles") {
      newProfileUser();
    } 
    if (type === "editProfiles")  {
      editProfileUser();
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
        <form onSubmit={submitFunction} className="form-modal">
          <label className="label-modal" htmlFor="title">
            Nome do Perfil
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Nome do Perfil"
            onChange={handleChangesValues}
            defaultValue={createNewProfile.title}
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
            defaultValue={createNewProfile.imgUrl}
          />
          <button className="btn-modal" type="submit">
            {btnName}
          </button>
        </form>
        {type === "editProfiles" ? (
          <div className="delete-profile" onClick={deleteModalProfile}>
            <span>ou</span>
            <button>Apagar</button>
          </div>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};
