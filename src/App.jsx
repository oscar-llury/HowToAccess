//router
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
//pages
import Home from "./pages/Home";
import InicioSesion from "./pages/InicioSesion";

function App() {
  //estados
  const usuarioInicial = { username: "", pass: "123" };
  const [user, setUserState] = useState(usuarioInicial);

  return (
    <div className="App">
      <Header username={user.username} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciar-sesion" element={<InicioSesion />} />
      </Routes>
    </div>
  );
}

export default App;
