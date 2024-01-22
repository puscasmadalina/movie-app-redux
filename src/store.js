import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./slices/AppSlice";
import movieReducer from "./slices/MovieSlice";
import tvShowReducer from "./slices/TvShowSlice";
import actorsReducer from "./slices/ActorSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  app: appReducer,
  movie: movieReducer,
  series: tvShowReducer,
  actors: actorsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST"],
      },
    }),
});
