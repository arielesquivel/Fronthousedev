import { createAction, createReducer } from "@reduxjs/toolkit";
const set_user = createAction("SET_USER");

const inicialState = {};
const reducerUser = createReducer(inicialState, {
  [set_user]: (estate, action) => {
    return (estate = [...action.payload]);
  },
});

export default reducerUser;
