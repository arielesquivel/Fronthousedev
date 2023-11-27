import React, { useState } from "react";
import axios from "axios";
import "../start.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Grid from "./Grid";
import Navbar from "./Navbar";

function Buscador() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    localidad: "", // Inicializa las propiedades en el estado
    precio: 0, // Inicializa las propiedades en el estado
    ambientes: 0, // Inicializa las propiedades en el estado
  });
  const propiedades = useSelector((state) => {
    return state.propiedades;
  });

  const handlePrecioChange = (e) => {
    const precio = e.target.value;
    setForm({ ...form, precio });
  };
  const handleAmbientesChange = (e) => {
    const ambientes = e.target.value;
    setForm({ ...form, ambientes });
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
      })
      .catch((error) => {
        console.log(error);
      });
    // Puedes hacer algo con los datos del formulario aquí
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="momo">
        <div className="background-2">
          <div className="curve-arrow">
            <img className="#" src="#" alt="#" />
          </div>
          <div className="center-box">
            <label for="ambientes"> eliga los ambientes </label>
            <select name="options" onChange={handleAmbientesChange}>
              <option value={1}>un ambiente</option>
              <option value={2}>dos ambiente</option>
              <option value={3}>tres ambiente</option>
              <option value={4}>cuatro ambiente</option>
              <option value={5}>cinco ambiente</option>
            </select>
            <label>
              <input
                type="text"
                placeholder="Ubicacion"
                onChange={handleTextChange}
              />
              unbicacion
            </label>
            <label>
              <input
                type="number"
                placeholder="precio"
                onChange={handlePrecioChange}
              />
              precio
            </label>
            <button onClick={handleSumit} className="btn btn-primary">
              Buscar
            </button>
          </div>
        </div>
      </div>
      <Grid />
    </>
  );
}

export default Buscador;
