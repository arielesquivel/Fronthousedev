import "./App.css";
import Login from "./componentes/Login";
import Registrer from "./componentes/register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Start from "./componentes/Start";
import Home from "./componentes/Home";
import VistaUsers from "./componentes/VistaUsers";
import VistaAgregarProps from "./componentes/VistaAgregarProps";
import VistaPropiedades from "./componentes/VistaPropiedades";
function App() {
  const dispatch = useDispatch();

  //const [users, setUser] = useState[{}];
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/me")
      .then((res) => res.data)
      .then((user) =>
        dispatch({
          type: "SET_USER",
          payload: user,
        })
      )
      .catch(({ response }) => {
        console.error(response.status);
      });
  }, []);
  //const user = useSelector((state) => {
  //  return state.user;
  //});
  return (
    <div>
    <div className="App">
      <Start />
      </div>
      <Routes>
      <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/agregar" element={<VistaAgregarProps />} />
        <Route path="/propiedades" element={<VistaPropiedades />} />
        <Route path="/usuarios" element={<VistaUsers />} />
      </Routes>
    </div>
  );
}

export default App;
