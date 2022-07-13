import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./types/routes";
import { Home } from "./pages/Home/index";
import { Login } from "./pages/Login";
import { CadUser } from "./components/CadUser";
import { Profiles } from "./components/Profiles";
import { AdminPage } from "./components/HomeAdmin";
import { UserPage } from "./components/HomeUser";
import { CadGame } from "./components/CadGame";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.CADUSERS} element={<CadUser />} />
      <Route path={RoutePath.PROFILES} element={<Profiles />} />
      <Route path={RoutePath.ADMINPAGE} element={<AdminPage />} />
      <Route path={RoutePath.USERPAGE} element={<UserPage />} />
      <Route path={RoutePath.CADGAME} element={<CadGame />} />
    </Routes>
  );
};

export default Router;
