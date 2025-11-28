import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function Clubs() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

const items = [
    {
      titleTr: "SAVTEK – Eğitim Koordinatörü",
      titleEn: "SAVTEK – Education Coordinator",
      descTr:
        "Savunma teknolojileri kulübünde eğitim koordinatörü olarak teknik eğitimlerin planlanması, içerik oluşturma ve öğrenci ekiplerinin desteklenmesi görevlerini üstlendim.",
      descEn:
        "As an education coordinator, I planned technical trainings, created learning materials and supported student teams within the defense technologies club.",
    },
    {
      titleTr: "SAVTEK – Proje Takip Ekibi Üyesi",
      titleEn: "SAVTEK – Project Tracking Team Member",
      descTr:
        "Kulüp projelerinin ilerleyişini takip ettim, ekipler arası koordinasyon sağladım ve proje yönetimi süreçlerine katkıda bulundum.",
      descEn:
        "Monitored project progress, coordinated between teams and contributed to project management workflows.",
    },
    {
      titleTr: "Industrialstudent – İçerik Yazarı",
      titleEn: "Industrialstudent – Content Writer",
      descTr:
        "Endüstri mühendisliği alanında içerikler oluşturarak topluluğa eğitim ve bilgi desteği sağladım.",
      descEn:
        "Created educational and informative content in the field of industrial engineering for the student community.",
    },
    {
      titleTr: "Industrialstudent – Konya Ekibi Üyesi",
      titleEn: "Industrialstudent – Konya Team Member",
      descTr:
        "Etkinlik organizasyonları, içerik üretimi ve öğrenci iletişim süreçlerinde aktif rol aldım.",
      descEn:
        "Contributed to event organization, content development and student community activities.",
    },
  ];


  return (
    <section id="clubs" className="section section-alt">
      <div className="container">
        <h2>{t("Kulüpler & Gönüllü Çalışmalar", "Clubs & Volunteering")}</h2>

        {items.map((item, i) => (
          <motion.div
            key={i}
            className="experience-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ marginBottom: "22px" }}
          >
            <h3>{t(item.titleTr, item.titleEn)}</h3>
            <p>{t(item.descTr, item.descEn)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
