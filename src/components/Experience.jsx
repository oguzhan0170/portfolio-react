import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function Experience() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  const items = [
    {
      titleTr: "İÇDAŞ – Hammadde İkmal ve Süreç Geliştirme Stajyeri",
      titleEn: "İÇDAŞ – Raw Material Supply & Process Development Intern",
      descTr:
        "İÇDAŞ Değirmencik Entegre Tesisleri'nde üretim süreçlerini yakından gözlemleyerek zorunlu yönetim stajımı gerçekleştirdim.",
      descEn:
        "Completed my mandatory management internship at İÇDAŞ Değirmencik Integrated Facilities, observing production and supply processes.",
      tags: "Python"
    },

    {
      titleTr: "QNB 101 Online Staj Programı",
      titleEn: "QNB 101 Online Internship Program",
      descTr:
        "QNB'nin temel bankacılık yapısını ve departman işleyişini öğrenerek finansal süreçler hakkında bilgi edindim.",
      descEn:
        "Learned about QNB's core banking structure and department operations during this online internship.",
      tags: "Bankacılık · Temel Finans"
    },

    {
      titleTr: "Yaşar Group – İmalat Stajyeri",
      titleEn: "Yaşar Group – Manufacturing Intern",
      descTr:
        "Talaşlı imalat, montaj ve kaynak süreçlerini sahada gözlemleyerek imalat operasyonları hakkında deneyim kazandım.",
      descEn:
        "Observed machining, assembly and welding operations, gaining hands-on understanding of manufacturing processes.",
      tags: "SolidWorks"
    }
  ];


  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>{t("Deneyim", "Experience")}</h2>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="experience-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{t(item.titleTr, item.titleEn)}</h3>
            <p>{t(item.descTr, item.descEn)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
