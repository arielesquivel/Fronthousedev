import React, { useState } from "react";
import axios from "axios";
import "../start.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Grid from "./Grid";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { set_citas } from "../store/citas";

function CitasAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    localidad: "", // Inicializa las propiedades en el estado
    precio: 0, // Inicializa las propiedades en el estado
    ambientes: 0, // Inicializa las propiedades en el estado
  });

  const { category } = useParams();
  console.log(category);
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
      .get("http://localhost:5000/citas/all", { params: form })
      .then((data) => {
        dispatch(set_citas(data));
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
      <Grid />
    </>
  );
}

export default CitasAdmin;
