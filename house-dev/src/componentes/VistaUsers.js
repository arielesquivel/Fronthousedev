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
  const [changeData, setChangeData] = useState({});
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
  const handleInputChange = (e) => {
    changeData[e.target.name] = e.target.value;
  };

  const [isCheckedCambiar, setCheckedCambiar] = useState(true);

  const handleCheckboxChangeCambiar = () => {
    setCheckedCambiar(!isCheckedCambiar);
  };
  const handleSummit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/users/cambiar", changeData, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result);
        alert("cambio exitoso");
        //navigate("/admin/propiedades");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "hubo un problema. Por favor recargue la pagina o contactese con un administrador"
        );
      });
  };

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
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={changeData.name || data.name}
                disabled={isCheckedCambiar}
              />
              <label>Apellido:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                onChange={handleInputChange}
                value={changeData.lastName || data.lastName}
                disabled={isCheckedCambiar}
              />
              <label>Contacto:</label>
              <input
                type="text"
                name="contact"
                placeholder="Contacto"
                onChange={handleInputChange}
                value={changeData.contact || data.contact}
                disabled={isCheckedCambiar}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Ingrese su email"
                onChange={handleInputChange}
                value={changeData.email || data.email}
                disabled={isCheckedCambiar}
              />
              <p className={data.password ? "oculto" : ""}>
                Contraseña: {data.password}
              </p>
              {isCheckedCambiar ? (
                <button
                  class="btn btn-dark btn2"
                  value={isCheckedCambiar}
                  onClick={handleCheckboxChangeCambiar}
                  disabled={!isCheckedCambiar}
                >
                  Editar Informacion
                </button>
              ) : (
                <>
                  <button
                    class="btn btn-dark btn2"
                    value={isCheckedCambiar}
                    onClick={handleCheckboxChangeCambiar}
                    disabled={isCheckedCambiar}
                  >
                    Cancelar
                  </button>
                  <button
                    class="btn btn-dark btn2"
                    onClick={handleSummit}
                    disabled={isCheckedCambiar}
                  >
                    Cambiar datos
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VistaUsers;
