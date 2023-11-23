import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul className="conteiner_navar">
        <li>
          <Link to="/">star</Link>
        </li>
        <li>
          <input type="text" placeholder="¿Que Buscas?"></input>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Registrate</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/admin/agregar">agregar</Link>
        </li>
        <li>
          <Link to="/propiedades">Propiedades</Link>
        </li>
        <li>
          <Link to="/usuarios">Mi perfil</Link>
        </li>
        <li>
          <Link to="/buscador">buscar</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
