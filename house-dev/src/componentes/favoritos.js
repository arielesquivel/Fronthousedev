import React, { useState, useEffect } from "react";
import axios from "axios";
import "../start.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Grid from "./Grid";
import Navbar from "./Navbar";

function Favoritos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    localidad: "", // Inicializa las propiedades en el estado
    precio: 0, // Inicializa las propiedades en el estado
    ambientes: 0, // Inicializa las propiedades en el estado
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
  /*
  const handleSumit = (e) => {
    e.preventDefault();
    axios
    .get("http://localhost:5000/favoritos", { params: form })
    .then((data) => {
      dispatch({ type: "SET_PROPIEDADES", payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
    */
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/favoritos", {
        withCredentials: true,
      })
      .then((data) => {
        dispatch({ type: "SET_PROPIEDADES", payload: data });
      })
      .catch((error) => {
        console.log("Detalles del error:", error);
      });
  }, []);

  const propiedades = useSelector((state) => {
    return state.propiedades;
  });
  console.log("propiedades fav----------------", propiedades);
  // Puedes hacer algo con los datos del formulario aquí
  //};

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Grid />
    </>
  );
}

export default Favoritos;
