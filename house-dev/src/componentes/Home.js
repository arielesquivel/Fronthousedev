import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrow = process.env.PUBLIC_URL + "/Arrow 16.svg";
  const [form, setForm] = useState({
    alquilar: false,
    vender: false,
    //localidad: "", // Inicializa las propiedades en el estado
  });

  const [isCheckedAlquilar, setCheckedAlquilar] = useState(false);
  const [isCheckedVender, setCheckedVender] = useState(false);

  const handleCheckboxChangeAlquilar = () => {
    setCheckedAlquilar(!isCheckedAlquilar);
  };
  const handleCheckboxChangeVender = () => {
    setCheckedVender(!isCheckedVender);
  };

  /*
  const handleRadioChange = (e) => {
    const categoria = e.target.value;
    setForm({ ...form, categoria });
  };
*/
  /*
  const handleTextChange = (e) => {
    const localidad = e.target.value;
    setForm({ ...form, localidad });
  };
*/
  const handleSumit = (e) => {
    e.preventDefault();
    const alquilar = isCheckedAlquilar;
    const vender = isCheckedVender;
    setForm((form.alquilar = alquilar), (form.vender = vender));
    //setForm((form.vender = vender));
    axios
      .get("http://localhost:5000/api/filter", { params: form })
      .then((data) => {
        console.log(data);
        dispatch({ type: "SET_PROPIEDADES", payload: data });
        return navigate("/buscador");
      })
      .catch((error) => {
        console.log(error);
      });
    // Puedes hacer algo con los datos del formulario aquí
  };

  return (
    <>
      <Navbar />
      <div class="conteiner">
        <div className="home">
          <div className="background-2">
            <div className="curve-arrow">
              <img className="image-arrow" src={arrow} alt="arrow" />
            </div>
            <div className="center-box">
              <label htmlFor="tipo">
                <label>
                  Alquilar
                  <input
                    type="checkbox"
                    checked={isCheckedAlquilar}
                    onChange={handleCheckboxChangeAlquilar}
                  />
                </label>
                <label>vender</label>
                <input
                  type="checkbox"
                  checked={isCheckedVender}
                  onChange={handleCheckboxChangeVender}
                />
              </label>
            </div>
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
