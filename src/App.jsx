import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Characters from "./pages/Characters";
import CharacterDetails from "./components/charactersData/CharacterDetails";
import "./index.css";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route
              path="/characters/:characterId"
              element={<CharacterDetails />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
