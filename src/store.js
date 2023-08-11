import createSagaMiddleware from "redux-saga";
import darkModeReducer from "./Components/NavigationBar/ModeSwither/ModeSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    }
})