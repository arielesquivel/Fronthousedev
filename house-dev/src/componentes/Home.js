import React, { useState } from "react";
import "../start.css";

function Home() {
  const arrow = process.env.PUBLIC_URL + "/Arrow 16.svg";
  const [form, setForm] = useState({
    type_property: "",
    location: "",
  });

  const handleRadioChange = (e) => {
    const type_property = e.target.value;
    setForm({ ...form, type_property });
  };

  const handleTextChange = (e) => {
    const location = e.target.value;
    setForm({ ...form, location });
  };

  const handleSumit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="momo">
        <div className="background">
          <div className="curve-arrow">
            <img className="image-arrow" src={arrow} alt="arrow" />
          </div>
          <div className="center-box">
            <label>
              <input
                type="radio"
                value="alquilar"
                checked={form.type_property === "alquilar"}
                onChange={handleRadioChange}
              />
              Comprar
            </label>
            <label>
              <input
                type="radio"
                value="comprar"
                checked={form.type_property === "comprar"}
                onChange={handleRadioChange}
              />
              Alquilar
            </label>
            <label>
              <input
                type="text"
                placeholder="Ubicacion"
                onChange={handleTextChange}
              />
            </label>
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
