import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import authReducer from "./slices/authSlice";
  import "react-toastify/dist/ReactToastify.css";
  
  const combinedReducer = combineReducers({
    auth: authReducer,
  });
  
  const rootReducer = (state, action) => {
    if (action.type === "auth/logout/fulfilled") {
      state = undefined;
    }
    return combinedReducer(state, action);
  };
  export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
  });