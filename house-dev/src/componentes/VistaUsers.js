import React from "react";
import "../App";
import Navbar from "./Navbar";
function VistaUsers() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="vistaUsers">
          <h1>Mi prefil</h1>
          <div className="img-usersperfil">
            <img src="#" alt="#"></img>
            <button>Cambiar</button>
          </div>
          <p>Nombre:folanito</p>
          <p>Apellido:Apellido</p>
          <p>Contacto:1214564897</p>
          <p>Email:fulanito@fulanito.com</p>
          <p>Contraseña:fulanito</p>
          <div className="btn-md">
            <button>Editar informacion</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaUsers;
