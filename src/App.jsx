//router
import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Proyectos from "./pages/Proyectos";
import Proyecto from "./pages/Proyecto";

//functions
import { AuthProvider, RequireAuth } from "./lib/auth";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
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
          <Route
            path="/proyectos/:proyectoId"
            element={
              <RequireAuth>
                <Proyecto />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
