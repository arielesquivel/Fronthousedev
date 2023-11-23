import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./App.css";
import Login from "./componentes/Login";
import Start from "./componentes/Start";
import Home from "./componentes/Home";
import VistaUsers from "./componentes/VistaUsers";
import VistaAgregarProps from "./componentes/VistaAgregarProps";
import VistaPropiedades from "./componentes/VistaPropiedades";
import Register from "./componentes/register";
import Buscador from "./componentes/buscador";
import { set_user } from "./store/user";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/me", { withCredentials: true })
      .then((res) => dispatch(set_user(res.data)))
      .catch((error) => {
        console.log("Detalles del error:", error);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/agregar" element={<VistaAgregarProps />} />
        <Route path="/propiedades" element={<VistaPropiedades />} />
        <Route path="/usuarios" element={<VistaUsers />} />
        <Route path="/buscador" element={<Buscador />} />
      </Routes>
    </>
  );
}

export default App;
