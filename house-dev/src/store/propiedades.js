import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const set_propiedades = createAction("SET_PROPIEDADES");

const initialState = [];

const reducerPropiedades = createReducer(initialState, {
  [set_propiedades]: (state, action) => {
    console.log(state);

    return action.payload.data;
  },
});

export const fetchPropiedades = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/properties");
      dispatch(set_propiedades(response.data));
    } catch (error) {
      console.error("Error fetching propiedades:", error.message);
    }
  };
};
export default reducerPropiedades;
