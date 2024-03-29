import api from "./api";

interface newProfile {
  imgUrl: string;
  title: string;
}

const findAllService = {
  allProfiles: () =>
    api
      .get("/perfil/find-all")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => error.response),
};

const findById = {
  IdProfile: (id: string) =>
    api
      .get(`/perfil/findById/${id}`)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

const profileService = {
  register: (values: newProfile) =>
    api
      .post("/perfil/create", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

const updateService = {
  updateProfile: (values: object, id: string) =>
  api.patch(`/perfil/updateById/${id}`, values)
  .then((response: any) => response)
  .catch((error: any) => error.response),
}

const deleteService = {
  deleteProfiles: (id: string) =>
  api.delete(`/perfil/delete/${id}`)
  .then((response: any) => response)
  .catch((error: any) => error.response)
}

export { findAllService, findById, profileService, updateService, deleteService };
