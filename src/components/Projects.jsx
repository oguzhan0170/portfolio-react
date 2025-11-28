import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  const projects = [
    {
      slug: "eta-model",
      titleTr: "İÇDAŞ – ETA Tahmin Modeli",
      titleEn: "İÇDAŞ – ETA Prediction Model",
      descTr:
        "Hurda gemilerin varış zamanını Gradient Boosting ML modeli ile tahmin eden proje.",
      descEn:
        "Arrival time prediction ML model for scrap ships using Gradient Boosting.",
      tags: "Python · ML · Pandas",
    },
    {
      slug: "stockai",
      titleTr: "StockAI – Stok & Satış Paneli",
      titleEn: "StockAI – Stock & Sales Dashboard",
      descTr:
        "KOBİ’lere stok, satış ve kârlılık analizi sunan web dashboard tasarımı.",
      descEn:
        "A web dashboard for stock, sales and profitability insights for SMEs.",
      tags: "React · Dashboard",
    },
    {
      slug: "db-analysis",
      titleTr: "DeutscheBank – Kârlılık Analizi",
      titleEn: "DeutscheBank – Net Profit Analysis",
      descTr:
        "Banka gelir–gider verileriyle net kâr tahmini yapan analiz çalışması.",
      descEn:
        "Net profit forecasting on bank income & expenses using ML.",
      tags: "Python · ML · Data Analysis",
    },
    {
      slug: "hackathon",
      titleTr: "C# Hata Düzeltme Hackathon Projesi",
      titleEn: "C# Bug Fix Hackathon Project",
      descTr:
        "75+ hatalı .NET Core projesindeki build ve runtime hataları düzeltildi.",
      descEn:
        "Fixing 75+ build and runtime bugs in a .NET Core project.",
      tags: "C# · Debug · .NET",
    },
    {
      slug: "factory-system",
      titleTr: "Fabrika Bilgi Sistemi",
      titleEn: "Factory Information System",
      descTr:
        "Üretim çizelgesi, vardiya ve stok akışını yöneten masaüstü yazılım.",
      descEn:
        "Desktop application to manage production schedule and warehouse flow.",
      tags: "C# · .NET · Windows Form · System Design",
    },
    {
      slug: "gams-sudoku",
      titleTr: "GAMS ile Matematiksel Modelleme",
      titleEn: "GAMS Mathematical Programming",
      descTr:
        "Gerçek hayat problemlerinin doğrusal / tamsayılı programlama teknikleriyle GAMS ortamında modellenmesi.",
      descEn:
        "Modeling real-world problems using linear / integer programming in GAMS.",
      tags: "GAMS · Optimization · Linear Programming",
    },
    {
      slug: "isg",
      titleTr: "İş Sağlığı & Güvenliği Projesi",
      titleEn: "Occupational Health & Safety Project",
      descTr:
        "Risk analizi, iş güvenliği planı ve iyileştirme önerileri.",
      descEn:
        "Risk analysis and workplace safety planning.",
      tags: "MSDS Form · Risk Analysis",
    },
  ];

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2>{t("Projeler", "Projects")}</h2>

        <div className="cards">
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              className="card project-card"
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.25 }}
              onClick={() => navigate(`/projects/${p.slug}`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(`/projects/${p.slug}`);
              }}
            >
              <h3>{t(p.titleTr, p.titleEn)}</h3>
              <p>{t(p.descTr, p.descEn)}</p>
              <span className="tag">{p.tags}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
