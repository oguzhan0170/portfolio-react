import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function Hero() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  return (
    <header className="hero">
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-img">
          <img src="/profile.jpg" alt="Profile" />
        </div>

        <h1>Oğuzhan Yavuz</h1>

        <p className="subtitle">
          {t(
            "Endüstri Mühendisliği · Veri Odaklı Karar Verme · Dijital Dönüşüm",
            "Industrial Engineering · Data Driven Decision Making · Digital Transformation"
          )}
        </p>

        <p className="hero-text">
          {t(
            "Üretim, veri analitiği ve makine öğrenmesi alanlarında projeler geliştirerek işletmelerin süreçlerini daha hızlı ve akıllı hale getirmeyi hedefliyorum.",
            "I develop projects in production, data analytics and machine learning to help businesses run faster and smarter."
          )}
        </p>

        {/* BUTON KALDIRILDI */}
      </motion.div>
    </header>
  );
}
