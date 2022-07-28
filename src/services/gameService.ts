import api from "./api";

interface GameObj {
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: string[];
}

const gameService = {
  register: (values: GameObj) =>
    api
      .post("/game/create", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

const allGamesService = {
  allGames: () =>
    api
      .get("/game/find-all")
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

const findById = {
  IdGame: (id: string) =>
    api
      .get(`/game/findById/${id}`)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export { gameService, allGamesService, findById };
