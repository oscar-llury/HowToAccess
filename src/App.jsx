import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import NormasAccesibilidadWeb from "./pages/NormasAccesibilidadWeb";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Proyectos from "./pages/Proyectos";
import Proyecto from "./pages/Proyecto";
import NuevoProyecto from "./pages/NuevoProyecto";
import AccesibilidadWeb from "./pages/AccesibilidadWeb";
import Principio from "./pages/Principio";
import Pauta from "pages/Pauta";

//functions
import { AuthProvider, RequireAuth } from "./lib/auth";
import SimulacionInteractiva from "pages/SimulacionInteractiva";

export default function App() {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    const paths = location.pathname.split("/");
    const fooCrumbs = [];
    paths.shift();
    paths.map((e, i) => {
      fooCrumbs.push({
        title: e.replaceAll("-", " "),
        link: "/" + e,
      });
      return fooCrumbs;
    });
    setCrumbs(fooCrumbs);
  }, [setCrumbs, location]);

  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/accesibilidad-web" element={<AccesibilidadWeb />} />
          <Route
            path="/normas-de-accesibilidad-web"
            element={<NormasAccesibilidadWeb />}
          />
          {[
            "/normas-de-accesibilidad-web/perceptible",
            "/normas-de-accesibilidad-web/operable",
            "/normas-de-accesibilidad-web/entendible",
            "/normas-de-accesibilidad-web/robusto",
          ].map((path) => (
            <Route
              key={path}
              path={path}
              element={<Principio crumbs={crumbs} />}
            />
          ))}
          {[
            "/normas-de-accesibilidad-web/perceptible/alternativas-textuales",
            "/normas-de-accesibilidad-web/perceptible/medios-tempodependientes",
            "/normas-de-accesibilidad-web/perceptible/adaptable",
            "/normas-de-accesibilidad-web/perceptible/distinguible",
            "/normas-de-accesibilidad-web/operable/accesible-por-teclado",
            "/normas-de-accesibilidad-web/operable/tiemposuficiente",
            "/normas-de-accesibilidad-web/operable/convulsiones",
            "/normas-de-accesibilidad-web/operable/navegable",
            "/normas-de-accesibilidad-web/operable/modalidades-de-entrada",
            "/normas-de-accesibilidad-web/entendible/legible",
            "/normas-de-accesibilidad-web/entendible/predecible",
            "/normas-de-accesibilidad-web/entendible/entrada-de-datos-asistida",
            "/normas-de-accesibilidad-web/robusto/compatible",
          ].map((path) => (
            <Route key={path} path={path} element={<Pauta crumbs={crumbs} />} />
          ))}
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route
            path="/simulacion-interactiva"
            element={
              <RequireAuth>
                <SimulacionInteractiva />
              </RequireAuth>
            }
          />
          <Route
            path="/nuevo-proyecto"
            element={
              <RequireAuth>
                <NuevoProyecto />
              </RequireAuth>
            }
          />
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
        <Footer />
      </AuthProvider>
    </div>
  );
}
