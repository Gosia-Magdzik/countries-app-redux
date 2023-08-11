import { Route, Routes } from "react-router-dom";
import  { Nav}  from "./Components/NavigationBar";
import  { AllCountries}  from "./Components/AllCountries";
import  { Country}  from "./Components/Country";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Nav/>}>
          <Route index element={<AllCountries/>}/>
          <Route path="/:code" element={<Country/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
