import api from "./api";

interface userLogin {
  email: string;
  password: string;
}

interface userObj {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  isAdmin: boolean;
}

const loginService = {
  login: (values: userLogin) =>
    api
      .post("/auth/login", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

const userService = {
  register: (values: userObj) =>
    api
      .post("/user/create", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export { loginService, userService };
