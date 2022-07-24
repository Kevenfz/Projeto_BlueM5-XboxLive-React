import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { findAllService } from "../../services/profileService";
import { CardProfile } from "./CardProfile/index";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ModalProfile } from "../../components/Modals/ModalProfile";
import { TiUserAdd } from "react-icons/ti";
import swal from "sweetalert";
import * as S from "./style";
import "./style.css";

interface ProfilesProps {
  id: string;
  title: string;
  imgUrl: string;
  user: {
    id: string;
    isAdmin: boolean;
    name: string;
  };
}

export const UserProfiles = () => {
  const [allProfiles, setAllProfiles] = useState<ProfilesProps[]>([]);
  const [userProfileLogged, setUserProfileLogged] = useState<ProfilesProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [refreshProfile, setRefreshProfile] = useState(false)
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const updateProfiles = (refreshProf: boolean) => {
    setRefreshProfile(refreshProf);
    setTimeout(() => {
      setRefreshProfile(false);
    }, 100)
  }

  useEffect(() => {
    getAllProfiles();
  }, []);

  const getAllProfiles = async () => {
    if (!jwt) {
      swal({
        title: "ERRO!",
        text: "Faça login antes de entrar na pagina de perfis.",
        icon: "error",
        timer: 7000,
      });
      navigate("/login");
    } else {
      const response = await findAllService.allProfiles();
      setAllProfiles(response.data);

      if (allProfiles) {
        findProfiles(response.data);
      }

      if (response.status === 204) {
        swal({
          title: "Info",
          text: "Ainda não existe nenhum perfil na sua conta.",
          icon: "info",
          timer: 7000,
        });
      } else {
        console.log("Perfis exibidos", response);
      }
    }
  };

  const findProfiles = (profiles: ProfilesProps[]) => {
    const userId = localStorage.getItem("userId");
    const profile = profiles.filter((profile) => profile.user.id === userId);
    if (profile) {
      setUserProfileLogged(profile);
    }
  };
  
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="Profiles-container">
      <S.MainSection>
        <S.Back>
          <RiLogoutCircleLine onClick={logout}/>
        </S.Back>
        {userProfileLogged.map((profile: ProfilesProps, index) => (
          <CardProfile profilesProps={profile} key={index} />
        ))}
        <TiUserAdd onClick={openModal} className="IconNewProfile" />
        <ModalProfile
          isOpen={isModalOpen}
          closeModal={closeModal}
          type="createProfile"
          title="Criar Perfil"
          btnName="Criar"
          id=""
          // inputChanges={} //TODO mandar as props do profile para cá com as funções handleChanges etc
          // newProfile
        />
      </S.MainSection>
    </section>
  );
};
