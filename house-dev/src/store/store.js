// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducerUser from "./user";
import reducerPropiedades from "./propiedades";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: reducerUser,
    propiedades: reducerPropiedades,
  },
});

export default store;
