import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastName: "",
    contact: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
      console.log("Registro exitoso");
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div class="conteiner conteiner-register">
          <form className="register-form" onSubmit={handleRegister}>
            <div className="container_2">
              <h1>
                OF DEV.<p>Ingrese sus Datos...</p>
              </h1>
            </div>

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email"
              onChange={handleInputChange}
              value={formData.email}
              required
            />

            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleInputChange}
              value={formData.name}
            />

            <label>Apellido:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              onChange={handleInputChange}
              value={formData.lastName}
            />

            <label>Contacto:</label>
            <input
              type="text"
              name="contact"
              placeholder="Contacto"
              onChange={handleInputChange}
              value={formData.contact}
            />

            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              onChange={handleInputChange}
              value={formData.password}
            />

            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
