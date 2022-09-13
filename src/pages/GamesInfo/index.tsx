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
  genero: [{
    genero: string;
  }];
}

export const GamesInfo = () => {
  const [allGames, setAllGames] = useState<Games>({
      id: "",
      title: "",
      imgUrl: "",
      description: "",
      year: "",
      score: 0,
      traillerYtUrl: "",
      GplayYtUrl: "",
      genero: [{
        genero: '',
      }],
    });
  
  const { id } = useParams();

  useEffect(() => {
    gameData();
  }, []);

  const gameData = async () => {
    if (id) {
      const gameData = await findById.IdGame(id);
      setAllGames(gameData.data);
    }
  };

  return (
    <div>
        <h1>{allGames.title}</h1>
        <h2>{allGames.description}</h2>
        <h3>{allGames.genero.map((gen) => (
          <h4>{gen.genero}</h4>
        ))}</h3>
        <img src={allGames.imgUrl} alt={allGames.title} />
    </div>
  );
};
