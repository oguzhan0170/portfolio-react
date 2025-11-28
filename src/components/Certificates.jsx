import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function Certificates() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  const certs = [
    {
      tr: "Girişimcilik Atölyesi Katılım Belgesi – Konya TeknoKent",
      en: "Entrepreneurship Workshop Certificate – Konya TeknoKent",
    },
    {
      tr: "Microsoft Office Sertifikası – QNB Türkiye",
      en: "Microsoft Office Certification – QNB Turkey",
    },
    {
      tr: "Yazılı İletişim Teknikleri – QNB Türkiye",
      en: "Written Communication Techniques – QNB Turkey",
    },
    {
      tr: "Problem Çözme Teknikleri – QNB Türkiye",
      en: "Problem Solving Techniques – QNB Turkey",
    },
    {
      tr: "Finansal Okuryazarlık 1. ve 2. Düzey Sertifikası",
      en: "Financial Literacy – Level 1 & Level 2 Certification",
    },
    {
      tr: "Üstün Başarı Belgesi – Mehmet Akif Ersoy Anadolu Lisesi",
      en: "High Achievement Certificate – Mehmet Akif Ersoy High School",
    },
    {
      tr: "Konya Teknik Üniversitesi – Onur Belgesi & Yüksek Onur Belgesi",
      en: "Konya Technical University – Honor Certificate & High Honor Certificate",
    },
    {
      tr: "128 Saatlik Sürdürülebilirlik ve Girişimcilik Başarı Sertifikası – Co-Founder Academy",
      en: "128-Hour Sustainability & Entrepreneurship Excellence Certificate – Co-Founder Academy",
    },
  ];

  return (
    <section id="certificates" className="section section-alt">
      <div className="container">
        <h2>{t("Sertifikalar", "Certificates")}</h2>

        <div className="cards">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>{t(c.tr, c.en)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
