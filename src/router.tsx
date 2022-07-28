import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./types/routes";
import { Home } from "./pages/Home/index";
import { Login } from "./pages/Login";
import { CadUser } from "./pages/CadUser";
import { UserProfiles } from "./pages/Profiles";
import { AdminPage } from "./pages/HomeAdmin";
import { UserPage } from "./pages/HomeUser";
import { CadGame } from "./pages/CadGame";
import { GamesInfo } from "./pages/GamesInfo";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.CADUSERS} element={<CadUser />} />
      <Route path={RoutePath.PROFILES} element={<UserProfiles />} />
      <Route path={RoutePath.ADMINPAGE} element={<AdminPage />} />
      <Route path={RoutePath.USERPAGE} element={<UserPage />} />
      <Route path={RoutePath.CADGAME} element={<CadGame />} />
      <Route path={RoutePath.INFOSGAME} element={<GamesInfo />} />
    </Routes>
  );
};

export default Router;
