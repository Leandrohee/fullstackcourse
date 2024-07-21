import { NavBar } from "./components/NavBar";
import { AddDados } from "./components/paginas/AddDados";
import VisualizaDados from "./components/paginas/VisualizaDados";
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
          <Route path="/visualizar1" element={<VisualizaDados tabela={1} />} />
          <Route path="/visualizar2" element={<VisualizaDados tabela={2}/>} />
          <Route path="/visualizar3" element={<VisualizaDados tabela={3}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
