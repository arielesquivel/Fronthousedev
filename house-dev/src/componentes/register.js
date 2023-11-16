import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        fromData,
        { withCredentials: true }
      );
      console.log("registro exitoso, ");
    } catch (error) {
      setError("error al registrarse");
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <form className="login-form" onSubmit={handleRegister}>
            <h2 text-aling="center">Registrate</h2>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="coloque su email"
                onChange={handleInputChange}
                value={fromData.email}
              />
              <br />
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={fromData.name}
              />
              <br />
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                placeholder="Coloque su contraseña"
                onChange={handleInputChange}
                value={fromData.password}
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
