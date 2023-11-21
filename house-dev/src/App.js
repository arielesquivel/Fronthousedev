import "./App.css";
import Login from "./componentes/Login";
import Registrer from "./componentes/register";
import Start from "./componentes/start";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  //const [users, setUser] = useState[{}];
  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => res.data)
      .then((user) =>
        dispatch({
          type: "SET_USER",
          payload: user,
        })
      )
      .catch(({ response }) => {
        console.error(response.status, response.statusText);
      });
  }, []);
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <div className="App">
      <header className="App-header">
        <Start />
      </header>
    </div>
  );
}

export default App;
