import React from "react";
import "../App.css";
import "bootstrap";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul className="conteiner_navar">
        <li>
          <Link to="/">Star</Link>
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
          <Link to="/admin/agregar">Agregar</Link>
        </li>
        <li>
          <Link to="/propiedades">Propiedades</Link>
        </li>
        <li>
          <Link to="/usuarios">Mi Perfil</Link>
        </li>
        <li>
          <Link to="/buscador">Alquiler/Ventas</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
