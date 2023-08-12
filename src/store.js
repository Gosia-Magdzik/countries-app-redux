import createSagaMiddleware from "redux-saga";
import darkModeReducer from "./Components/NavigationBar/ModeSwither/ModeSlice";
import countriesReducer from "./Components/AllCountries/countriesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { countriesSaga } from "./Components/AllCountries/countriesSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        countries: countriesReducer,
    },
    middleware: [sagaMiddleware],
});


sagaMiddleware.run(countriesSaga);