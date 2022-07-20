import { useEffect, useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { findAllService } from "../../services/profileService";
import { CardProfile } from "./CardProfile/index";
import * as S from "./style";
import "./style.css";
import swal from "sweetalert";

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

interface UserProfile {
  cpf: string;
  email: string;
  id: string;
  isAdmin: boolean;
  name: string;
}

export const UserProfiles = () => {
  const [allProfiles, setAllProfiles] = useState<ProfilesProps[]>([]);
  // const [userProfile, setUserProfile] = useState<UserProfile>({
  //   cpf: "",
  //   email: "",
  //   id: "",
  //   isAdmin: false,
  //   name: "",
  // });
  const [userProfileLogged, setUserProfileLogged] = useState<ProfilesProps[]>(
    []
  );
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const user = localStorage.getItem("user");

  useEffect(() => {
    // getProfileUser();
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
        console.log(allProfiles);
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
    console.log(profiles);
    if (profile) {
      setUserProfileLogged(profile);
    }
  };

  // const getProfileUser = () => {
  //   if (user) {
  //     const dataUser = JSON.parse(user);
  //     setUserProfile(dataUser);
  //   }
  // };

  return (
    <section className="Profiles-container">
      <S.MainSection>
        <S.Back>
          <RiLogoutCircleLine />
        </S.Back>
        {userProfileLogged.map((profile: ProfilesProps, index) => (
          <CardProfile profilesProps={profile} key={index} />
        ))}
        <BsPlusCircleDotted className="IconNewProfile" />
      </S.MainSection>
    </section>
  );
};
