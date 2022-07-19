import api from "./api";

const findAllService = {
  allProfiles: () =>
    api
      .get("/perfil/find-all")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};

const findById = {
  IdProfile: (id: string) => {
    api
      .get(`/perfil/findById/${id}`)
      .then((response: any) => response)
      .catch((error: any) => error.response );
  },
};

export { findAllService, findById };
