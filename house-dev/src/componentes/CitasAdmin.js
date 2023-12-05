import React, { useState, useEffect } from "react";
import axios from "axios";
import "../start.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Grid from "./Grid";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { set_citas } from "../store/citas";
import { useLocation } from "react-router-dom";

function CitasAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    localidad: "", // Inicializa las propiedades en el estado
    precio: 0, // Inicializa las propiedades en el estado
    ambientes: 0, // Inicializa las propiedades en el estado
  });

  const { type } = useParams();
  /*
  const location = useLocation();
  const array = location.pathname.split("/");
  let flag = false;
  for (let element in array) {
    if (element == "citas") {
      flag = true;
    }
  }
  console.log("°|°|°|°|°|°|°|°|°|°|°|°|°|°", location.pathname);
  */
  let flag = true;
  const propiedades = useSelector((state) => {
    return state.propiedades;
  });
  const citas = useSelector((state) => {
    return state.citas;
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
  axios
    .get("http://localhost:5000/api/me", { withCredentials: true })
    .then((res) => dispatch(set_user(res.data)))
    .catch((error) => {
      console.log("Detalles del error:", error);
    });

  const user = useSelector((state) => {
    return state.user;
  });
*/
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/citas/all", {
        withCredentials: true,
      })
      .then((payload) => {
        console.log("******************************************", payload);
        dispatch(set_citas(payload.data));
      })
      .catch((error) => {
        console.log("******************************************", error);
      });
  }, []);
  // Puedes hacer algo con los datos del formulario aquí

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Grid prop={flag} />
    </>
  );
}

export default CitasAdmin;
