import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
const set_propiedades = createAction("SET_PROPIEDADES");

const inicialState = await axios.get("http://localhost:5000/properties");

const reducerPropiedades = createReducer(inicialState, {
  [set_propiedades]: (estate, action) => {
    return (estate = [...action.payload]);
  },
});

export default reducerPropiedades;
