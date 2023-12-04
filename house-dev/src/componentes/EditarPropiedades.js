import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import Calendar from "./Calendar";
import { useSelector } from "react-redux";

function EditarPropiedades() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  }, []);

  const deleteHandle = () => {
    axios
      .delete("http://localhost:5000/api/propiedades/${id}")
      .then((res) => res.data)
      .then((data) => navigate())
      .catch((error) => {
        console.log(error);
        alert(
          "hubo un error, pruebe devuelta en otro tiempo, o contacte al encargado"
        );
      });
  };
  const editHandle = () => {
    navigate("admin/editar");
  };

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
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
                alt="foto1"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://novalproperties.com/images/projects/jardines-img-5.jpg"
                alt="foto1"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
                alt="foto1"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <div className="vistadepropiedades">
            <div className="col-md-2">
              <h1 placeholder="nombre de la propiedad">{data.nombre}</h1>
              <p placeholder="Descripcion">Descripcion: {data.description}</p>
              <p placeholder="Precio">Precio: US$ {data.precio}</p>
              <p placeholder="Tamaño">Tamaño: {data.metraje}</p>
              <p placeholder="Ubicacion">Ubicacion: {data.direccion}</p>

              <p placeholder="Tipo de Propiedad">Tipo:{data.categoria}</p>
              <p placeholder="Cantidad de dormitorios">
                Dormitorios: {data.dormitorios}
              </p>
              <p placeholder="Cantidad de baños">Baños: {data.baños}</p>
            </div>
            <div>
              {user.rol === "ADMIN" ? (
                <>
                  <button type="submit" className="btn" onClick={deleteHandle}>
                    eliminar propiedad
                  </button>
                  <button type="submit" className="btn" onClick={editHandle}>
                    editar propiedad
                  </button>
                </>
              ) : null}
            </div>
          </div>
          <div className="calendario-conteiner">
            <div className="calendario">
              <Calendar prop={data.id} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default EditarPropiedades;