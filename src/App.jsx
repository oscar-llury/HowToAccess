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
//functions
import { AuthProvider, RequireAuth } from "./lib/auth";

export default function App() {
  //states
  //const [token, setToken] = useState(); //usar con redux
  const [username, setUsername] = useState(); //usar con redux

  return (
    <div className="App">
      <Header username={username} />
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route
            path="/proyectos"
            element={
              <RequireAuth>
                <Proyectos />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
