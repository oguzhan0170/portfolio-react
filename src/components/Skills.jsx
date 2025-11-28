import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function Skills() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>{t("Yetenekler", "Skills")}</h2>
        <motion.div
          className="skills"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul>
            <li>Python · Pandas · scikit‑learn</li>
            <li>C# · .NET </li>
            <li>Excel</li>
            <li>Machine Learning · Regression</li>
          </ul>
          <ul>
            <li>{t("SolidWorks", "SolidWorks")}</li>
            <li>{t("Ekip Yönetimi", "Team Management")}</li>
            <li>{t("Analitik Düşünme", "Analytical Thinking")}</li>
            <li>{t("Finansal Okuryazarlık", "Financial Literacy")}</li>
          </ul>

        </motion.div>
      </div>
    </section>
  );
}
