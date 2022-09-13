import { useState } from "react";
import { BiX } from "react-icons/bi";
import { genderService } from "../../../services/genderService";
import Modal from "react-modal";
import swal from "sweetalert";
import "./style.css";

interface modalProps {
  isOpen: boolean; //modal aberto
  closeModal: any; //modal fechado
  type: string; //createProfile editProfile
  title: string; // title = titulo do modal, criação ou edição
  btnName: string; // texto do botão
  id: string; // id do profile para edição
}

interface newGender {
  genero: string;
}

export const ModalGender = ({
  isOpen,
  closeModal,
  type,
  title,
  btnName,
  id,
}: modalProps) => {
  const [createNewGender, setCreateNewGender] = useState<newGender>({
    genero: "",
  });

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateNewGender((values: newGender) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const newGenderGame = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await genderService.register(createNewGender);

    if (response.status == 201) {
      swal({
        title: "Gênero criado com sucesso!",
        icon: "success",
        timer: 7000,
      });
      closeModal();
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
        <form onSubmit={newGenderGame} className="form-modal">
          <label className="label-modal" htmlFor="genero">
            Gênero do Game
          </label>
          <input
            type="text"
            name="genero"
            id="genero"
            placeholder="Nome do Gênero"
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
