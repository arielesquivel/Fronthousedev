import React from "react";
import "../start.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
//import background from "../../public/background.png";

function Start() {
  const arrow = process.env.PUBLIC_URL + "/Arrow 16.svg";

  return (
    <>
      <Navbar />
      <div className="momo">
        <div className="background">
          <div className="curve-arrow">
            <img className="image-arrow" src={arrow} alt="arrow" />
          </div>
          <div className="center-box">
            <input type="text" placeholder="Que Buscas"></input>
            <select>
              <option value="option1">Alquiler</option>
              <option value="option2">Comprar</option>
            </select>
            <input type="text" placeholder="Ubicacion"></input>
            <button
              onClick={(e) => e.preventDefault()}
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

export default Start;
