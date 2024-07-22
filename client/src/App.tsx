import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavBar } from "./components/NavBar";
import { AddDados } from "./components/paginas/AddDados";
import VisualizaDados from "./components/paginas/VisualizaDados";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {

  /* -------- AQUI EU CONFIGURO O APOLLO PARA DISPONIBILIZAR CONEXAO EM TODO O MEU PROJETO -------- */
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  });

  /* ------------------ TENHO QUE COLOCAR O APOLLO EM VOLTA DE TODO O MEU PROJETO ----------------- */
  return (
    <>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}

export default App;
