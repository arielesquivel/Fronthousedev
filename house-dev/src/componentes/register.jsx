import React from "react";
import { App } from "../App.css";
import React, { useState } from "react";
function Register() {
  const [register, setRegister] = useState[{}];
  const registerHandle = function (form) {
    form.preventDefault();
    const data = form.target;
    axios
      .post("//localhost:3000/register", data)
      .then(new alert("se registro con exito"))
      .catch(new alert("hubo un problema, por favor intente devuelta"));
  };
  return (
    <>
      <div className="image-with-background"></div>
      <div className="register">
        <div>
          <form onSubmit={registerHandle}>
            <h2>Registrate</h2>
            <div>
              <label>Email</label>
              <input type="email" name="email" />
              <label>Nombre</label>
              <input type="text" name="name" />
              <label>Contraseña</label>
              <input type="password" name="password" />
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
