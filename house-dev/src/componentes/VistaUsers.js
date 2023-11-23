import React from "react";
import "../App";
import Navbar from "./Navbar";
function VistaUsers() {
  return (
    <>
      <Navbar />
      <div className="container_3">
        <div>
          <h1>Mi prefil</h1>
          <p>Nombre:folanito</p>
          <p>Apellido:Apellido</p>
          <p>Contacto:1214564897</p>
          <p>Email:fulanito@fulanito.com</p>
          <p>Contraseña:fulanito</p>
          <div>
            <img src="#" alt="#"></img>
            <br />
          </div>
        </div>
      </div>
      <div className="btn-md">
        <button>Cambiar</button>
        <button>Editar informacion</button>
      </div>
    </>
  );
}

export default VistaUsers;
