import React, { useState } from "react";
import "../start.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";


function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrow = process.env.PUBLIC_URL + "/Arrow 16.svg";
  const [form, setForm] = useState({
    categoria: "", // Inicializa las propiedades en el estado
    localidad: "", // Inicializa las propiedades en el estado
  });

  const handleRadioChange = (e) => {
    const categoria = e.target.value;
    setForm({ ...form, categoria });
  };

  const handleTextChange = (e) => {
    const localidad = e.target.value;
    setForm({ ...form, localidad });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/filter", { params: form })
      .then((data) => {
        dispatch({ type: "SET_PROPIEDADES", payload: data });
        return navigate("/buscador");
      })
      .catch(error);
    // Puedes hacer algo con los datos del formulario aquí

  };

  return (
    <>
      <Navbar />
      <div className="momo">
        <div className="background">
          <div className="curve-arrow">
            <img className="image-arrow" src={arrow} alt="arrow" />
          </div>
          <div className="center-box">
            <label>
              <input
                type="radio"
                value="alquilar"
                checked={form.type_property === "alquilar"}
                onChange={handleRadioChange}
              />
              Comprar
            </label>
            <label>
              <input
                type="radio"
                value="comprar"
                checked={form.type_property === "comprar"}
                onChange={handleRadioChange}
              />
              Alquilar
            </label>
            <label>
              <input
                type="text"
                placeholder="Ubicacion"
                onChange={handleTextChange}
              />
            </label>
            <button onClick={handleSumit} className="btn btn-primary">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
