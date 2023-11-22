import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./componentes/Login";
import Register from "./componentes/register";
import Navbar from "./componentes/Navbar";
import Start from "./componentes/Start";
import VistaAgregarProps from "./componentes/VistaAgregarProps";
function App() {
  /*const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) =>
        dispatch({
          type: "SET_USER",
          payload: res.data,
        })
      )
      .catch((error) => {
        console.error(error.response.status);
      });
  }, [dispatch]);

  //const user = useSelector((state) => state.user);
*/
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/start" component={Start} />
          <Route path="/vista-agregar-props" component={VistaAgregarProps} />
          {/* Agrega más rutas según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
