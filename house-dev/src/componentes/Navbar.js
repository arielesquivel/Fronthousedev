import React from "react";
import "../App.css";
import Login from "./Login";
function Navbar() {
  return (
    <>
      <ul className="conteiner_navar">
        <li>Login</li>
        <li>Register</li>
        <li>
          <input type="text" placeholder="¿Que Buscas?"></input>
        </li>
        <li>Home</li>
      </ul>
      <Login />
    </>
  );
}

export default Navbar;
