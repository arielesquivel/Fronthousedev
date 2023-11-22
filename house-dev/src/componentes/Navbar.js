import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul className="conteiner_navar">
        <li>
          {" "}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/register">Registrate</Link>
        </li>
        <li>
          <input type="text" placeholder="¿Que Buscas?"></input>
        </li>
        <li>
          {" "}
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
