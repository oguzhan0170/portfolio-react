import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function DbAnalysis() {
  return (
    <ProjectLayout title="DeutscheBank – Net Profit Analysis">
      <p className="project-description">
        Bu proje, banka gelir–gider verileri üzerinde farklı makine öğrenmesi
        algoritmalarının karşılaştırılması amacıyla geliştirilmiştir.
      </p>

      <h2>Proje Amacı</h2>
      <p>
        Amaç, DeutscheBank finansal veri seti kullanılarak:
        <strong> farklı makine öğrenmesi algoritmalarının performansını karşılaştırmak</strong>,
        gelecekteki net kâr tahminlerini daha yüksek doğrulukla yapabilecek
        modeli belirlemek ve finansal veri analitiği üzerine bir çalışma
        gerçekleştirmekti.
      </p>

      <h2>Kullanılan Teknolojiler</h2>
      <ul>
        <li>Python</li>
        <li>Pandas · NumPy</li>
        <li>Scikit-Learn</li>
        <li>Matplotlib · Seaborn</li>
        <li>Feature Engineering (Öznitelik oluşturma)</li>
        <li>Model Karşılaştırma</li>
      </ul>

      <h2>Modeller</h2>
      <p>
        Aşağıdaki makin öğrenmesi algoritmaları eğitilerek performansları
        karşılaştırıldı:
      </p>
      <ul>
        <li>Linear Regression</li>
        <li>Random Forest Regressor</li>
        <li>Decision Tree Regressor</li>
        <li>Gradient Boosting Regressor</li>
      </ul>

      <h2>Veri Kümesi</h2>
      <p>Kullanılan veri seti DeutscheBank finansal yıllık gelir–gider bilgilerinden oluşmaktadır:</p>
      <ul>
        <li>Toplam gelir</li>
        <li>Toplam gider</li>
        <li>Operasyonel maliyetler</li>
        <li>Dönemlik kâr–zarar</li>
        <li>Net profit (hedef değişken)</li>
      </ul>

      <h2>Model Performans Sonuçları</h2>
      <p>Her model için MAE, RMSE ve R² skorları hesaplandı.</p>
      <ul>
        <li><strong>Linear Regression:</strong> Basit ve hızlı fakat daha düşük doğruluk</li>
        <li><strong>Random Forest:</strong> Daha yüksek isabet, düşük hata</li>
        <li><strong>Decision Tree:</strong> Aşırı öğrenme eğilimi</li>
        <li><strong>Gradient Boosting:</strong> En iyi genel performans</li>
      </ul>

      <p>
        Sonuç olarak:
        <strong> Gradient Boosting Regressor modeli en stabil ve en yüksek doğruluğa sahip model</strong>
        olarak seçildi.
      </p>

      <h2>Çıktılar & Öğrenimler</h2>
      <p>
        • Finansal verilerde özellik mühendisliğinin önemi<br />
        • Lineer olmayan modellerin finansal verilerde daha iyi performans vermesi<br />
        • Farklı ML algoritmalarının aynı veri üzerinde karşılaştırılması<br />
        • Finansal risk analizinde ML kullanımına giriş niteliği taşıması<br />
      </p>
    <a href="/" className="btn project-back">← Geri Dön</a>
    </ProjectLayout>
  );
}
