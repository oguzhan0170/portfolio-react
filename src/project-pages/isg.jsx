import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function Isg() {
  return (
    <ProjectLayout title="İş Sağlığı & Güvenliği Gözlem Raporu">
      <p className="project-description">
        Bu çalışma, İSG-1 dersi kapsamında bir fabrikanın iş sağlığı ve güvenliği
        uygulamalarını yerinde incelemek amacıyla yapılan <strong>gözlem çalışmasıdır</strong>.
        Amaç, teorik olarak öğrenilen konuların sahadaki karşılıklarını anlamaktır.
      </p>

      <h2>Çalışmanın Amacı</h2>
      <p>
        Raporun temel amacı, bir üretim tesisinde uygulanan iş sağlığı ve güvenliği
        süreçlerini <strong>öğrenci gözlemci</strong> olarak incelemektir. 
        Bu kapsamda risk analizleri, kontrol raporları, MSDS formları, uyarı levhaları 
        ve acil durum uygulamaları yerinde değerlendirilmiştir.
      </p>

      <h2>Gözlemlenen İSG Uygulamaları</h2>
      <ul>
        <li>
          <strong>Risk Analizi:</strong> Tehlikelerin tanımlanması, olasılık–şiddet–frekans
          değerlerine göre risk skorlarının hesaplanması (Kinney yöntemi temelli).
        </li>
        <li>
          <strong>5x5 Risk Matrisi:</strong> Olası risklerin sınıflandırılması ve
          önceliklendirilmesi. (Örn: yüksek riskler için hızlı aksiyon gerekliliği)
        </li>
        <li>
          <strong>Kontrol Raporları:</strong> Forklift, gezer vinç, kompresör ve elektrik tesisatı
          gibi ekipmanlara ait periyodik kontrol belgelerinin incelenmesi.
        </li>
        <li>
          <strong>MSDS Formları:</strong> Kimyasal maddelere ait güvenlik bilgi formlarının
          uygun şekilde bulundurulması.
        </li>
        <li>
          <strong>Uyarı Levhaları:</strong> Acil çıkış, baret tak, emniyet kemeri gibi
          zorunlu uyarı levhalarının saha yerleşimi.
        </li>
        <li>
          <strong>Çalışma Ortamı Gözlemleri:</strong> Kişisel koruyucu donanımların
          kullanım durumu, makine güvenlik ekipmanları, hijyen ve düzen.
        </li>
      </ul>

      <h2>Gözlem Sonuçları</h2>
      <p>
        Yapılan incelemeler sonucu işletmenin birçok İSG uygulamasını mevzuata uygun
        şekilde yürüttüğü gözlemlenmiştir. Bununla birlikte bazı alanlarda:
      </p>

      <ul>
        <li>Eğitimlerin düzenli verilmesi gerektiği,</li>
        <li>Hijyen ve düzen konusunda iyileştirme yapılabileceği,</li>
        <li>Risk skorları yüksek alanlarda ek önlemlere ihtiyaç olduğu</li>
      </ul>

      <p>
        gibi geliştirme fırsatları tespit edilmiştir. Bu tespitler yine bir
        <strong>öğrenci gözlemci</strong> bakış açısıyla değerlendirilmiştir.
      </p>

     <a href="/" className="btn project-back">← Geri Dön</a>
    </ProjectLayout>
  );
}
