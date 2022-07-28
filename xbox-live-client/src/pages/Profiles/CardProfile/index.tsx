import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalProfile } from "../../../components/Modals/ModalProfile";
import { AdminPage } from "../../HomeAdmin";
import * as S from "../style";
import { UserProfiles } from "..";

interface ProfilerProps {
  profilesProps: Profiles;
  updateProfiles: (arg: boolean) => void;
  userLogged: User;
}

interface Profiles {
  id: string;
  title: string;
  imgUrl: string;
  user: User;
}

interface User {
  id: string;
  isAdmin: boolean;
  name: string;
}


export const CardProfile = ({
  profilesProps,
  updateProfiles,
}: ProfilerProps) => {
  const [userProfile, setUserProfile] = useState<Profiles>(profilesProps);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const getProfileUser = () => {
    if (user) {
      const dataUser = JSON.parse(user);
      setUserProfile(dataUser);

      if (userProfile.user.isAdmin === true) {
        navigate(`admin-page/${profilesProps.id}`);
      } else {
        navigate(`user-page/${profilesProps.id}`);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  function onEdit() {
    updateProfiles(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <S.Profiles>
      <S.Cards>
        <S.NamesProfiles onClick={getProfileUser}>
          {profilesProps.title}
        </S.NamesProfiles>
        <S.ImgProfiles
          onClick={getProfileUser}
          src={profilesProps.imgUrl}
        />
        <div>
          <FaUserEdit onClick={openModal} className="IconEdit" />
          <ModalProfile
            isOpen={isModalOpen}
            closeModal={closeModal}
            type="editProfiles"
            title="Editar Perfil"
            btnName="Atualizar"
            onChanges={onEdit}
            id={profilesProps.id}
          />
        </div>
      </S.Cards>
    </S.Profiles>
  );
};
