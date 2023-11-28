import React from "react";
import "../App.css";
import "bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Realiza la solicitud de cierre de sesión al servidor
      await axios.post("http://localhost:5000/api/logout", null, {
        withCredentials: true,
      });

      // Después de cerrar sesión, redirige a la página de inicio de sesión
      navigate("/home");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };
  return (
    <>
      <ul className="conteiner_navar">
        <li>
          <Link to="/">Star</Link>
        </li>
        <li>
          <input type="text" placeholder="¿Que Buscas?"></input>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Registrate</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/admin/agregar">Agregar</Link>
        </li>
        <li>
          <Link to="/propiedades">Propiedades</Link>
        </li>
        <li>
          <Link to="/usuarios">Mi Perfil</Link>
        </li>
        <li>
          <Link to="/buscador">Alquiler/Ventas</Link>
        </li>
        <li onClick={handleLogout} type="button" class="btn btn-primary">
          <Link>Logout</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
