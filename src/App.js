import  { Nav }  from "./Components/NavigationBar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { selectIsDarkMode } from "./Components/NavigationBar/ModeSwither/ModeSlice";
import { useSelector } from "react-redux";
import { GlobalStyle, Container } from "./GlobalStyles";
import { AllCountries } from "./Components/AllCountries"
import { Route, Routes, Navigate } from "react-router-dom";
import { Country } from "./Components/CountryDetails";

function App () {
  const darkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <GlobalStyle/>
      <Nav/>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<AllCountries/>}
          />
          <Route
            path="/country/:id"
            element={<Country/>}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
