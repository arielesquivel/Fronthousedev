import { createAction, createReducer } from "@reduxjs/toolkit";

export const set_user = createAction("SET_USER");
export const del_user = createAction("DEL_USER");

const inicialState = {};
const reducerUser = createReducer(inicialState, {
  [set_user]: (estate, action) => {
    console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°", estate);
    console.log("||||||||||||||||||||||||||||||||||||||", action.payload);
    return (estate = action.payload);
  },
  [del_user]: (estate, action) => {
    return (estate = {});
  },
});

export default reducerUser;
