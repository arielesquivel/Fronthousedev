import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        { withCredentials: true }
      );
      console.log("Registro exitoso", response.data);
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <form className="login-form" onSubmit={handleRegister}>
            <h2 style={{ textAlign: "center" }}>Regístrate</h2>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Ingrese su email"
                onChange={handleInputChange}
                value={formData.email}
              />
              <br />
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={formData.name}
              />
              <br />
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                onChange={handleInputChange}
                value={formData.password}
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
