import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

function VistaUsers() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/perfil`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  }, []);

  if (!data.id) {
    return (
      <>
        <Navbar />
        <div>
          <h3>No hay datos</h3>
          <h3>hubo un problema, por favor intente devuelta</h3>;
        </div>
      </>
    );
  } else {
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
            <p>Nombre:{data.name}</p>
            <p>Apellido:Apellido/hay que ver esto</p>
            <p>Contacto:1214564897/hay que ver esto</p>
            <p>Email:{data.email}</p>
            <p>Contraseña:fulanito/hay que ver esto</p>
            <div className="btn-md">
              <button>Editar informacion</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VistaUsers;
