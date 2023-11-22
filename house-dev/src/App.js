import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./componentes/Login";
import Navbar from "./componentes/Navbar";
import Start from "./componentes/Start";
import Home from "./componentes/Home";
import VistaUsers from "./componentes/VistaUsers";
import VistaAgregarProps from "./componentes/VistaAgregarProps";
import VistaPropiedades from "./componentes/VistaPropiedades";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
VistaAgregarProps
      .get("http://localhost:5000/api/me")
      .then((res) => res.data)
      .then((user) =>
        dispatch({
          type: "SET_USER",
          payload: res.data,
        })
      )
 VistaAgregarProps
      .catch((error) => {
        console.error(error.response.status);
      });
  }, [dispatch]);

  //const user = useSelector((state) => state.user);

  
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
