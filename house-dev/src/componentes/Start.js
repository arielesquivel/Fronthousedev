import React from "react";
import "../start.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import background from "../../public/background.png";

function Start() {
  const dispatch = useDispatch();

  const arrow = process.env.PUBLIC_URL + "/Arrow 16.svg";

  return (
    <>
      <div className="background">
        <div className="logo"></div>
        <div className="frame-logo"></div>

        <div className="color-background"></div>
        <div className="center">
          <div className="curve-arrow">
            <img className="image-arrow" src={arrow} alt="arrow" />
          </div>
          <Link to="/home">
            <div className="center-box">
              <h1>HOUSE</h1>
              <h1 className="text-transparent">OF DEV</h1>
              <p>Tu nueva vivienda esta aqui</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Start;
