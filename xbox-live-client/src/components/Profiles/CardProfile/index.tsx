import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "../style";

interface ProfilerProps {
  profilesProps: {
    id: string;
    title: string;
    imgUrl: string;
    user: {
      id: string;
      isAdmin: boolean;
      name: string;
    };
  };
}

interface UserProfile {
  cpf: string;
  email: string;
  id: string;
  isAdmin: boolean;
  name: string;
}

export const CardProfile = ({ profilesProps }: ProfilerProps) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    cpf: "",
    email: "",
    id: "",
    isAdmin: false,
    name: "",
  });
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const getProfileUser = () => {
    if (user) {
      const dataUser = JSON.parse(user);
      setUserProfile(dataUser);
      console.log(userProfile);
      
      if (userProfile.isAdmin === true) {
        navigate("/user-page");
      } else {
        navigate("/admin-page");
      }
    }
  };
  return (
    <S.Profiles>
      <S.Cards>
        <S.NamesProfiles onClick={getProfileUser}>
          {profilesProps.title}
        </S.NamesProfiles>
        <S.ImgProfiles onClick={getProfileUser} src={profilesProps.imgUrl} />
        <div>
          <FiEdit className="IconEdit" />
        </div>
      </S.Cards>
    </S.Profiles>
  );
};
