import { createAction, createReducer } from "@reduxjs/toolkit";
export const set_user = createAction("SET_USER");

const inicialState = {};
const reducerUser = createReducer(inicialState, {
  [set_user]: (estate, action) => {
    console.log(estate);
    return (estate = [...action.payload]);
  },
});

export default reducerUser;
