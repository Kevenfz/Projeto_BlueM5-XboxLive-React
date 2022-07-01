import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

export const Login = () => {
    return (
        <div className="Modal">
          <div className="logo">
          <img src={require("../../assets/icons/LogoHome.png")} alt="" />
          </div>
          <div className="modal">
            <img src={require("../../assets/icons/xbox-logoFavoritoVerde.png")} alt="Logo Xbox" />
            
            <form>
              <label className="Label" htmlFor="login">Login</label>
              <input className="Input" type="text" name="login" id="login" placeholder="Digite seu email"/>
              
              <label className="Label" htmlFor="senha">Senha</label>
              <input className="Input" type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
              <p>Não tem uma conta? <Link id="link" to={"/cadastro"}>cadastre-se</Link></p> 
              <button><b>Entrar</b></button>
            </form>
            
            <div className="Link-btn">
            </div>
          </div>
        </div>
        );
}
