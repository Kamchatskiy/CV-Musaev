import React, { useState } from "react";
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom"

import { Header } from "./Components/Header";
import { Education } from "./Pages/Education"
import { Skills } from "./Pages/Skills"
import { Projects } from "./Pages/Projects"
import { Contacts } from "./Pages/Contacts"
import { Footer } from "./Components/Footer";

export const App = () => {  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>Education</Route>
          <Route>Skills</Route>
          <Route>Projects</Route>
          <Route>Contacts</Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}