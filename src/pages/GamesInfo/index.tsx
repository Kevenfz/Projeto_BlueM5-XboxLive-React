import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findById } from "../../services/gameService";

interface Games {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  year: string;
  score: number;
  traillerYtUrl: string;
  GplayYtUrl: string;
  genero: string[];
}

export const GamesInfo = () => {
  const [allGames, setAllGames] = useState<Games[]>([
    {
      id: "",
      title: "",
      imgUrl: "",
      description: "",
      year: "",
      score: 0,
      traillerYtUrl: "",
      GplayYtUrl: "",
      genero: [],
    },
  ]);
  const { id } = useParams();

  useEffect(() => {
    gameData();
  }, []);

  const gameData = async () => {
    if (id) {
      const gameData = await findById.IdGame(id);
      const gameInfo = {
        id: gameData.data.id,
        title: gameData.data.title,
        imgUrl: gameData.data.imgUrl,
        description: gameData.data.description,
        year: gameData.data.year,
        score: gameData.data.score,
        traillerYtUrl: gameData.data.traillerYtUrl,
        GplayYtUrl: gameData.data.GplayYtUrl,
        genero: [],
      };
      setAllGames({
        ...allGames,
        ...gameInfo,
      });
    }
  };

  return (
    <div>
      {allGames.map((games) => (
        <h1>{games.title}</h1>
      ))}
    </div>
  );
};
