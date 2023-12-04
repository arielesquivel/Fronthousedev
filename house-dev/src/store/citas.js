import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const set_citas = createAction("SET_CITAS");

const initialState = [];

const reducerCitas = createReducer(initialState, {
  [set_citas]: (state, action) => {
    console.log(state);

    return (state = action.payload.data);
  },
});

export default reducerCitas;
