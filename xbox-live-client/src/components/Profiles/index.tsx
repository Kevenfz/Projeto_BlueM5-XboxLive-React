import React from "react";
import { Perfis } from "../../mocks/profiles";
import { BsPlusCircleDotted } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";

import * as S from "./style";
import "./style.css";

export const Profiles = () => {

  // const getAllCharacters = async () => {

  // }

  return (
    <section className="Profiles-container">
      <S.MainSection>
        <S.Back>
          <RiLogoutCircleLine />
        </S.Back>
        <S.Profiles>
          {Perfis.map((perfis) => (
            <div>
              <S.NameProfiles>{perfis.title}</S.NameProfiles>
              <S.ImgProfiles src={perfis.imgUrl} />
              <div>
                <FiEdit className="IconEdit" />
              </div>
            </div>
          ))}
          <BsPlusCircleDotted className="IconNewProfile" />
        </S.Profiles>
      </S.MainSection>  
    </section>
  );
};
