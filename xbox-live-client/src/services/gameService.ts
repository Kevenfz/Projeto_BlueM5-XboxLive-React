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
    api.post('/game/create', values)
    .then((response: any) => response)
    .catch((error: any) => error.response)
  }

  export { gameService }