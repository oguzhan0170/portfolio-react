import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function FactorySystem() {
  return (
    <ProjectLayout title="Fabrika Bilgi Sistemi">
      <p className="project-description">
        Üretim palnı, personel yönetimi, müşteri yönetimi ve stok akışını tek ekranda
        toplayan masaüstü bilgi sistemi.
      </p>

      <h2>Proje Özeti</h2>
      <p>
        Bu projede bir fabrikanın temel operasyonlarını dijitalleştirmek için
        kapsamlı bir <strong>Fabrika Bilgi Sistemi (FBS)</strong> tasarladım.  
        Sistem; üretim planlama, personel yönetimi, müşteri yönetimi ve stok hareketleri tek platformda
        birleştirmeyi hedeflemektedir.
      </p>

      <p>
        Projenin amacı; Excel ve günlük notlar üzerinden yürütülen dağınık
        süreçleri merkezi bir yazılıma aktarmak, böylece <strong>gerçek zamanlı
        görünürlük ve kontrol</strong> sağlamaktır.
      </p>

      <h2>Kullanılan Teknolojiler</h2>
      <ul>
        <li><strong>C#</strong> – Masaüstü uygulama geliştirme</li>
        <li><strong>Form / WPF Arayüz Tasarımı</strong></li>
      </ul>

      <h2>Sistemin İçerdiği Modüller</h2>
      <ul>
        <li><strong>Üretim Planlama:</strong> İş emirleri</li>
        <li><strong>Stok Yönetimi:</strong> Hammadde – yarı mamul </li>
        <li><strong>Depo Giriş/Çıkış:</strong> Mal kabul ve transfer süreçleri</li>
        <li><strong>Raporlama:</strong> Üretim performansı, stok seviyeleri</li>
      </ul>

      <h2>Fayda ve Katkılar</h2>
      <p>
        Sistem fabrika yöneticilerine aşağıdaki faydaları sağlamayı hedefler:
      </p>

      <ul>
        <li>Dağınık verilerin tek platformda toplanması</li>
        <li>Üretim ve vardiya süreçlerinin izlenebilirliği</li>
        <li>Hatalı veri girişinin azaltılması</li>
        <li>Anlık stok takibi ve kayıp–kaçak kontrolü</li>
        <li>Daha hızlı ve doğru operasyon kararları</li>
      </ul>

      <h2>Özet</h2>
      <p>
        Bu proje üretim ve operasyon yönetimi konusundaki bilgi birikimimle
        yazılım geliştirme becerilerimi birleştirmemi sağladı.  
        Özellikle <strong>veritabanı tasarımı</strong>, <strong>modüler yazılım
        geliştirme</strong> ve <strong>operasyon akışı modelleme</strong> alanlarında
        önemli deneyimler kazandım.
      </p>
    <a href="/" className="btn project-back">← Geri Dön</a>
    </ProjectLayout>
  );
}
