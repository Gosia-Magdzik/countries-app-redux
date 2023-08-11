import  { Nav }  from "./Components/NavigationBar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";


function App () {
  return (
    <ThemeProvider theme={ darkTheme }>
      <Nav/>
    </ThemeProvider>
  );
};

export default App;
