import React from "react";
import { motion } from "framer-motion";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function StockAI() {
  return (
    <ProjectLayout title="StockAI – Stok & Satış Analiz Paneli">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Alt Başlık */}
        <p className="project-subtitle">
          KOBİ’lerin stok, satın alma, satış ve kârlılık süreçlerini
          veri odaklı yönetmesini sağlayan modern web dashboard projesi
        </p>

        {/* ÖZET */}
        <section className="project-section">
          <h2>Proje Özeti</h2>
          <p>
            StockAI, küçük ve orta ölçekli işletmelerin stok, satış, satın alma ve
            kârlılık verilerini tek bir panelde toplayarak daha hızlı, doğru ve
            veriye dayalı kararlar vermesini sağlayan bir <strong>web analytics paneli</strong>dir.
          </p>
        </section>

        {/* ÖNE ÇIKAN ÖZELLİKLER */}
        <section className="project-section">
          <h2>Öne Çıkan Özellikler</h2>
          <ul>
            <li>Gerçek zamanlı stok takibi</li>
            <li>Ürün bazlı kârlılık ve satış analizi</li>
            <li>AI destekli satış tahmini (planlanıyor)</li>
            <li>Müşteri alış davranışlarının analizi</li>
            <li>Satın alma maliyet optimizasyonu</li>
            <li>Rol tabanlı kullanıcı yönetimi (planlanıyor)</li>
          </ul>
        </section>

        {/* KULLANILAN TEKNOLOJİLER */}
        <section className="project-section">
          <h2>Kullanılan Teknolojiler</h2>
          <ul>
            <li>React – Kullanıcı Arayüzü</li>
            <li>Recharts – Grafik & Görselleştirme</li>
            <li>TailwindCSS – UI Tasarım</li>
            <li>Node.js + Express – Backend (Planlanan)</li>
            <li>MongoDB / PostgreSQL – Veritabanı (Planlanan)</li>
            <li>JWT Authentication – Güvenli giriş sistemi (Planlanan)</li>
          </ul>
        </section>

        {/* TASARIM YAKLAŞIMI */}
        <section className="project-section">
          <h2>Tasarım Yaklaşımı</h2>
          <p>
            İşletme sahiplerinin karmaşık grafikler arasında kaybolmaması için
            minimal ve hızlı bir tasarım tercih edildi. Tüm veriler kullanıcıya
            tek bakışta öngörü sağlayacak şekilde konumlandırıldı.
          </p>
        </section>

        {/* HEDEF KULLANICILAR */}
        <section className="project-section">
          <h2>Hedef Kullanıcılar</h2>
          <ul>
            <li>Perakende işletmeleri</li>
            <li>Depo & stok yönetimi yapan şirketler</li>
            <li>Küçük ve orta ölçekli imalat firmaları</li>
          </ul>
        </section>

        {/* GERİ DÖN BUTTON */}
        <a href="/" className="btn project-back">← Geri Dön</a>

      </motion.div>

    </ProjectLayout>
  );
}
