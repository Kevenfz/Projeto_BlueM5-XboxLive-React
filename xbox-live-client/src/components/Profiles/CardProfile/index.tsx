import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
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

export const CardProfile = ({ profilesProps }: ProfilerProps) => {
  return (
    <S.Profiles>
      <S.Cards>
        <Link to={"/admin-page"} className="link">
          <S.NamesProfiles>{profilesProps.title}</S.NamesProfiles>
          <S.ImgProfiles src={profilesProps.imgUrl} />
        </Link>
        <div>
          <FiEdit className="IconEdit" />
        </div>
      </S.Cards>
    </S.Profiles>
  );
};
