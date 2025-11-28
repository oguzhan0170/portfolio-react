import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function GamsSudoku() {
  return (
    <ProjectLayout title="GAMS ile Matematiksel Modelleme">
      <p className="project-description">
        Optimizasyon, kısıt programlama ve Sudoku çözümü
      </p>

      {/* PROJE ÖZETİ */}
      <h2>Proje Özeti</h2>
      <p>
        Bu projede GAMS ortamını kullanarak çeşitli matematiksel modeller
        geliştirdim. Sudoku çözümü, üretim planlama ve kaynak tahsisi gibi 
        optimizasyon problemleri için amaç fonksiyonları, karar değişkenleri 
        ve kısıt kümeleri tanımlanarak çözümler elde edildi.
      </p>
      <p>
        Çalışma, gerçek üretim süreçleri ve oyun teorisi tabanlı problemlerin 
        matematiksel yöntemlerle nasıl ifade edilebileceğini uygulamalı olarak 
        göstermektedir.
      </p>

      {/* MODELLENEN PROBLEMLER */}
      <h2>Modellenen Problemler</h2>
      <ul>
        <li>Ardışık Sudoku, Futoshiki, Kakurasu, Mayın Tarlası, Mozaik Mayın Tarlası</li>
        <li>Üretim planlama (MIP modeli)</li>
        <li>Çizelgeleme problemleri</li>
        <li>Maliyet minimizasyonu senaryoları</li>
        <li>Ulaştırma ve rotalama problemleri</li>
      </ul>

      {/* TEKNOLOJİLER */}
      <h2>Kullanılan Teknolojiler</h2>
      <ul>
        <li>GAMS Modelleme Dili</li>
        <li>Mixed Integer Programming (MIP)</li>
        <li>Linear Programming (LP)</li>
        <li>Kısıt Tabanlı Modelleme</li>
      </ul>

      {/* GERİ DÖN */}
       <a href="/" className="btn project-back">← Geri Dön</a>
    </ProjectLayout>
  );
}
