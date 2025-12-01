import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Clubs from "./components/Clubs.jsx";
import Skills from "./components/Skills.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";

import EtaModel from "./project-pages/eta-model.jsx";
import StockAI from "./project-pages/stockai.jsx";
import DbAnalysis from "./project-pages/db-analysis.jsx";
import Hackathon from "./project-pages/hackathon.jsx";
import FactorySystem from "./project-pages/factory-system.jsx";
import MiniChain from "./project-pages/miniBlockchain.jsx";
import GamsSudoku from "./project-pages/gams-sudoku.jsx";
import ISG from "./project-pages/isg.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Clubs />
                <Skills />
                <Certificates />
                <Contact />
              </>
            }
          />

          {/* Proje Sayfaları */}
          <Route path="/projects/eta-model" element={<EtaModel />} />
          <Route path="/projects/stockai" element={<StockAI />} />
          <Route path="/projects/db-analysis" element={<DbAnalysis />} />
          <Route path="/projects/hackathon" element={<Hackathon />} />
          <Route path="/projects/factory-system" element={<FactorySystem />} />
          <Route path="/projects/minichain" element={<MiniChain />} />
          <Route path="/projects/gams-sudoku" element={<GamsSudoku />} />
          <Route path="/projects/isg" element={<ISG />} />
        </Routes>

        <footer className="footer">© 2025 Oğuzhan Yavuz</footer>
      </LanguageProvider>
    </ThemeProvider>
  );
}
