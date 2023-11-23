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
          <p>Nombre:</p>
          <p>Apellido:</p>
          <p>Contacto:</p>
          <p>Email:</p>
          <p>Contraseña:</p>
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
