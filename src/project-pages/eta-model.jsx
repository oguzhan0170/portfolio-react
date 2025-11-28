import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function EtaModel() {
  return (
    <ProjectLayout title="İÇDAŞ – ETA Tahmin Modeli">
      <>
        <p className="project-description">
          Hurda gemilerin varış zamanlarını tahmin eden makine öğrenmesi modeli.
        </p>

        <h2>Proje Özeti</h2>
        <p>
          İÇDAŞ’ın çelik üretim süreçlerinde kullanılan hurda gemilerin tahmini
          varış sürelerini hesaplamak için veri odaklı bir
          <strong> ETA (Estimated Time of Arrival)</strong> modeli geliştirdim.
          Model, gerçek operasyon verileriyle eğitildi ve planlama–tedarik gibi
          süreçlerde yüksek doğruluk sağladı.
        </p>

        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Python</li>
          <li>Pandas, NumPy</li>
          <li>Scikit-Learn</li>
          <li>Gradient Boosting Regressor</li>
          <li>Matplotlib – Seaborn (EDA için)</li>
          <li>Jupyter Notebook</li>
        </ul>

        <h2>Veri Kümesi</h2>
        <p>
          Model, yaklaşık <strong>687 satır</strong> gemi operasyon verisiyle
          eğitildi.
        </p>
        <ul>
          <li>Rota & Mesafe</li>
          <li>Gemi Boyutları & Tonaj</li>
          <li>Hava Durumu</li>
          <li>Liman Bekleme Süreleri</li>
          <li>Önceki ETA – Gerçek ETA farkları</li>
        </ul>

        <h2>Model Performansı</h2>
        <ul>
          <li>
            <strong>R²:</strong> 0.73
          </li>
          <li>
            <strong>MAE:</strong> ~2 gün
          </li>
          <li>
            <strong>RMSE:</strong> 2.9
          </li>
        </ul>

        <h2>İşletmeye Sağlanan Katkılar</h2>
        <p>
          • Tedarik planlamasında gecikmeler öngörülebilir hale geldi. <br />
          • Operasyon planlama ekibine gerçek zamanlı karar desteği sağlandı.{" "}
          <br />
          • Liman trafik yönetiminde verimlilik iyileştirildi. <br />
        </p>

        <a href="/#projects" className="btn project-back">
          ← Geri Dön
        </a>
      </>
    </ProjectLayout>
  );
}
