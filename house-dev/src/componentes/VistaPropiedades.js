import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
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

  if (!data.id) {
    return (
      <>
        <Navbar />
        <div>
          <h3>No hay datos</h3>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div>
          <div className="img-vistadepropiedades">
            <img
              src="https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
              alt="foto1"
            />
            <div>
              <div className="vistadepropiedades">
                <div className="col-md-2">
                  <h1 placeholder="nombre de la propiedad">{data.nombre}</h1>
                  <p placeholder="Descripcion">
                    Descripcion: {data.description}
                  </p>
                  <p placeholder="Precio">Precio: US$ {data.precio}</p>
                  <p placeholder="Tamaño">Tamaño: {data.metraje}</p>
                  <p placeholder="Ubicacion">Ubicacion: {data.direccion}</p>

                  <p placeholder="Tipo de Propiedad">Tipo:{data.categoria}</p>
                  <p placeholder="Cantidad de dormitorios">
                    Dormitorios: {data.dormitorios}
                  </p>
                  <p placeholder="Cantidad de baños">Baños: {data.baños}</p>
                </div>
              </div>
              <div className="calendario-conteiner">
                <div className="calendario">
                  <Calendar prop={data.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default VistaPropiedades;
