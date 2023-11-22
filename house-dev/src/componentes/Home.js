import React from "react";
import "../start.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
//import background from "../../public/background.png";

function Home() {
  const arrow = process.env.PUBLIC_URL + "/Arrow 16.svg";
  const [form, setForm] = useState[{}];
  const handleRadioChange = (e) =>{
    const type_property = e.target.value;
    setType({ ...form,type_property });
  }
  const handleTextChange = (e) =>{
    const location = e.target.value;
    setType({ ...form,location });
  }
   const handleSumit = (e) =>{
     e.preventDefault()
     
  }


  return (
    <>
      <Navbar />
      <div className="momo">
        <div className="background">
          <div className="curve-arrow">
            <img className="image-arrow" src={arrow} alt="arrow" />
          </div>
          <div className="center-box">
            <label>
            <input type="radio"
          value="alquilar"
          checked={selectedValue === 'alquilar'}
          onChange={handleRadioChange}
          /> comprar
          </label>
          <label>
                 <input type="radio"
          value="comprar"
          checked={selectedValue === 'comprar'}
          onChange={handleRadioChange}
          />alquilar
            </label>
            <label>
            <input type="text" placeholder="Ubicacion"
            onChange = {handleTextChange}></input>
            </label>
            <button
              onClick={handleSumit}
              className="btn btn-primary"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
