import React, { useState } from "react";
import axios from "axios";

function Register() {
  return (
    <>
      <div className="container">
        <div>
          <form className="login-form">
            <h2 text-aling="center">Registrate</h2>
            <div>
              <label>Email:</label>
              <br />
              <input type="email" name="email" placeholder="coloque su email" />
              <br />
              <label>Nombre:</label>
              <input type="text" name="name" placeholder="Nombre" />
              <br />
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                placeholder="Coloque su contraseña"
              />
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
