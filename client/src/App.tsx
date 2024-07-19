import { NavBar } from "./components/NavBar";
import { AddDados } from "./components/paginas/AddDados";
import { Square } from "./components/Square";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path="" element={<></>}/>
          <Route path="/add" element={<AddDados/>}/>
          <Route path="/visualizar" element={<Square className="bg-yellow-200"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
