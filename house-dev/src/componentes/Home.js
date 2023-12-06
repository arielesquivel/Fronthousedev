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
            <h1>Busca tu propiedad ideal</h1>
            <div className="center-box2">
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
              <label>Baños</label>
              <select
                name="banos"
                id=""
                value={form.banos}
                /*onChange={handleInput}*/
              >
                {" "}
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <label>Dormitorios</label>
              <select
                name="dormitorios"
                id=""
                value={form.banos}
                /*onChange={handleInput}*/
              >
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <label>Precio minimo </label>
              <input />
              <label>Precio maximo </label>
              <input />
              <label>Barrio</label>
              <select>
                Selecciona un barrio
                <option>Retiro</option>
                <option>San Nicolás</option>
                <option>Puerto Madero</option>
                <option>San Telmo</option>
                <option>Montserrat</option>
                <option>Constitución</option>
                <option> Recoleta</option>
                <option>Balvanera</option>
                <option>San Cristóbal</option>
                <option>La Boca</option>
                <option>Barracas</option>
                <option>Parque Patricios</option>
                <option>Nueva Pompeya</option>
                <option>Almagro </option>
                <option>Boedo</option>
                <option>Caballito</option>
                <option>Flores</option>
                <option>Parque Chacabuco</option>
                <option>Villa Soldati</option>
                <option>Villa Riachuelo </option>
                <option>Villa Lugano</option>
                <option>Liniers</option>
                <option>Mataderos</option>
                <option>Parque Avellaneda</option>
                <option>Villa Real</option>
                <option>Monte Castro</option>
                <option>Versalles</option>
                <option>Floresta</option>
                <option>Vélez</option>
                <option>Sarsfield</option>
                <option>Villa Luro</option>
                <option>Tres de Febrero</option>
                <option>Belgrano</option>
                <option>Palermo</option>
                <option>Once</option>
                <option>Jesús María</option>
                <option>Recoleta</option>
                <option>Glew</option>
                <option>Ensenada</option>
                <option>Esperanza</option>
                <option>Chivilcoy</option>
                <option>Aldao</option>
                <option>Villa Ortuzar</option>
                <option>Bahía Blanca</option>
                <option>Villa Urquiza</option>
              </select>
            </div>
            <button onClick={handleSumit} class="btn btn-secondary">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
