import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom"
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}