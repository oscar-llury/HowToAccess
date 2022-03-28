//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
//pages
import Home from "./pages/Home";
import InicioSesion from "./pages/InicioSesion";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciar-sesion" element={<InicioSesion />} />
      </Routes>
    </div>
  );
}

export default App;
