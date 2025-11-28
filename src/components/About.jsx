import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function About() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{t("Hakkımda", "About Me")}</h2>

          <p className="text-block">
            {t(
              "Konya Teknik Üniversitesi Endüstri Mühendisliği 3. sınıf öğrencisiyim. Üretim, süreç yönetimi ve veri analitiği alanlarında projeler geliştiriyorum.",
              "I am a 3rd-year Industrial Engineering student at Konya Technical University. I develop projects in production, process management, and data analytics."
            )}
          </p>

          <p className="text-block">
            {t(
              "Aile şirketimizde yaklaşık iki yıl Konya satış sorumluluğu alarak satış, müşteri ilişkileri ve saha operasyonlarında tecrübe kazandım.",
              "I worked for about two years as the Konya sales lead in our family business, gaining experience in sales, customer relations, and field operations."
            )}
          </p>

          <p className="text-block">
            {t(
              "Python, C#, makine öğrenmesi ve veri odaklı yaklaşımlarla işletmeler için ölçülebilir çözümler üretmeye odaklanıyorum.",
              "I focus on building measurable solutions for businesses using Python, C#, machine learning, and data-driven methods."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
