import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function VistaUsers() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/perfil`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch((error) => {
        console.log("°°°°°°°°°°°°°°°°°°", error);
        navigate("/404");
      });
  }, []);

  if (!data.id) {
    return (
      <>
        <Navbar />
        <div className="sweet-loading">
          <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <input
            value={color}
            onChange={(input) => setColor(input.target.value)}
            placeholder="Color of the loader"
          />
          <p>Buscando Datos</p>

          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="vistaUsers">
            <h1>Mi Perfil</h1>
            <div className="img-usersperfil">
              <img
                src="https://static.vecteezy.com/system/resources/previews/006/487/917/non_2x/man-avatar-icon-free-vector.jpg"
                alt="Avatar img"
              />
            </div>
            <div>
              <p>Nombre:{data.name}</p>
              <p>Apellido:{data.lastName}</p>
              <p>Contacto:{data.contact}</p>
              <p>Email:{data.email}</p>
              <p className={data.password ? "oculto" : ""}>
                Contraseña: {data.password}
              </p>
              <button class="btn btn-dark btn2">Editar Informacion</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VistaUsers;
