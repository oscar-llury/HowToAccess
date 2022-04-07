//router
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Proyectos from "./pages/Proyectos";

function App() {
  //states
  const [token, setToken] = useState(); //usar con redux
  const [username, setUsername] = useState();
  /*
  if(!token) {
    return <Login setToken={setToken} />
  }
*/

  return (
    <div className="App">
      <Header username={username} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/iniciar-sesion"
          element={<Login setToken={setToken} setUsername={setUsername} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
