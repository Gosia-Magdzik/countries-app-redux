import  { Nav }  from "./Components/NavigationBar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { selectIsDarkMode } from "./Components/NavigationBar/ModeSwither/ModeSlice";
import { useSelector } from "react-redux";
import { GlobalStyle, Container } from "./GlobalStyles";
import { AllCountries } from "./Components/AllCountries"

function App () {
  const darkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <GlobalStyle/>
      <Nav/>
      <Container>
        <AllCountries/>
      </Container>
    </ThemeProvider>
  );
};

export default App;
