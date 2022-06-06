//router
import React from "react";
import { Routes, Route } from "react-router-dom";
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

//functions
import { AuthProvider, RequireAuth } from "./lib/auth";
import AccesibilidadWeb from "./pages/AccesibilidadWeb";

/* eslint-disable import/no-webpack-loader-syntax */
import MdxDoc, {
  frontMatter,
} from "!babel-loader!mdx-loader!./data/principio.mdx";

export default function App() {
  return (
    <div className="App">
      <h2>{frontMatter.title}</h2>
      <MdxDoc />
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/accesibilidad-web" element={<AccesibilidadWeb />} />
          <Route
            path="/normas-de-accesibilidad-web"
            element={<NormasAccesibilidadWeb />}
          />
          <Route path="/iniciar-sesion" element={<Login />} />
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
