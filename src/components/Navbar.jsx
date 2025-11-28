import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  const t = (tr, en) => (lang === "tr" ? tr : en);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <h1 className="logo">Oğuzhan Yavuz</h1>

        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          <a href="#about">{t("Hakkımda", "About")}</a>
          <a href="#projects">{t("Projeler", "Projects")}</a>
          <a href="#experience">{t("Deneyim", "Experience")}</a>
          <a href="#clubs">{t("Kulüpler & Gönüllülük", "Clubs & Volunteering")}</a>
          <a href="#skills">{t("Yetenekler", "Skills")}</a>
          <a href="#certificates">{t("Sertifikalar", "Certificates")}</a>
          <a href="#contact">{t("İletişim", "Contact")}</a>
        </div>

        <div className="switcher-box">
          <button onClick={toggleLang} className="switch-btn">
            {lang === "tr" ? "TR / EN" : "EN / TR"}
          </button>

          <button onClick={toggleTheme} className="switch-btn">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button
            className="mobile-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
