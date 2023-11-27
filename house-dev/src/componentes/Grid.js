import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../commons/Card";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const Grid = (props) => {
  const { type } = useParams();
  const collection = props[type];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, SetData] = useState([]);
  const propiedades = useSelector((state) => {
    return state.propiedades;
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/properties", {
        withCredentials: true,
      })
      .then((res) => SetData(res.data))
      .catch((error) => {
        console.log("Detalles del error:", error);
      });
  }, []);
  console.log(data);
  return (
    <div class="container">
      {data.map((data) => (
        <div class="row" key={data.id}>
          <Card data={data} class="col-4" />
        </div>
      ))}
    </div>
  );
};

export default Grid;
