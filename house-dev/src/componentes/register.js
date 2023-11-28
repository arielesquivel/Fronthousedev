import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      console.log("Registro exitoso", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
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
    </>
  );
}

export default Register;
