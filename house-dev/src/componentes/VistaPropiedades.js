import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import Calendar from "./Calendar";
function VistaPropiedades() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  }, []);

  if (!data.id) return <h3>No hay datos</h3>;

  return (
    <>
      <Navbar />
      <div>
        <div className="vistadepropiedades">
          <div className="col-md-2">
            <div className="img-vistadepropiedades">
              <img src="#" alt="#" />
              <div>
                <h1 placeholder="nombre de la propiedad">{data.nombre}</h1>
                <p placeholder="Descripcion">{data.description}</p>
                <p placeholder="Precio">{data.precio}</p>
                <p placeholder="Tamaño">{data.metraje}</p>
                <p placeholder="Ubicacion">{data.direccion}</p>
                <p placeholder="Tipo de Propiedad">{data.categoria}</p>
                <p placeholder="Cantidad de dormitorios">{data.dormitorios}</p>
                <p placeholder="Cantidad de baños">{data.baños}</p>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Reservar visita
            </button>
            <div className="calendario-conteiner">
              <div className="calendario">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaPropiedades;
