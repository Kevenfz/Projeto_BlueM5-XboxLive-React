import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "../style";

interface ProfilerProps {
  profilesProps: Profiles;
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

export const CardProfile = ({ profilesProps }: ProfilerProps) => {
  const [userProfile, setUserProfile] = useState<Profiles>(profilesProps);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const getProfileUser = () => {
    if (user) {
      const dataUser = JSON.parse(user);
      setUserProfile(dataUser);

      if (userProfile.user.isAdmin === true) {
        navigate("/admin-page");
      } else {
        navigate("/user-page");
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
          <FaUserEdit className="IconEdit" />
        </div>
      </S.Cards>
    </S.Profiles>
  );
};
