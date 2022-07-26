import api from "./api";

interface newGender {
  genero: string;
}

const findAllGender = {
  allGenders: () =>
    api
      .get("/genero/find-all")
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

const genderService = {
  register: (values: newGender) =>
  api.post("/genero/create", values)
  .then((response: any) => response)
  .catch((error: any) => error.response)
}
export { findAllGender, genderService };
