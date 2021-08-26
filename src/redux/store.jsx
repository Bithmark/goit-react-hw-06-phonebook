import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReduser from "./phonebook/phonebook-reducers.jsx";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsReduser),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),

  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

export default store;
