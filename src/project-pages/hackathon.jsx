import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function Hackathon() {
  return (
    <ProjectLayout title="C# Hata Düzeltme Hackathon Projesi">
      <p className="project-description">
        75’ten fazla kasıtlı hata içeren bir .NET Core projesinin tüm build, 
        runtime, mantıksal ve mimari hatalarını analiz ederek düzelttiğim hackathon projesi.
      </p>

      <h2>Proje Özeti</h2>
      <p>
        Bu projede, katılımcıların hata ayıklama becerilerini test etmek için 
        özel olarak hazırlanmış, içinde <strong>75+</strong> hata barındıran bir 
        <strong> .NET Core (Katmanlı Mimari)</strong> uygulaması üzerinde çalıştım. 
      </p>
      <p>
        Projede hem <strong>build ve çalışma zamanı hataları</strong> hem de 
        <strong>mimari, repository–service katmanı, async yapıları, N+1 query</strong> gibi 
        daha derin konularda hatalar bulunuyordu. Tüm bu hataları tek tek 
        inceleyerek projenin stabil, performanslı ve doğru şekilde çalışmasını sağladım.
      </p>

      <h2>Çözülen Hata Kategorileri</h2>
      <ul>
        <li><strong>Build ve derleme hataları</strong> (eksik referanslar, yanlış namespace kullanımı)</li>
        <li><strong>Runtime hataları</strong> (null reference, tip uyuşmazlıkları, try–catch eksiklikleri)</li>
        <li><strong>N+1 query</strong> problemleri (lazy load yerine doğru eager load kullanımı)</li>
        <li><strong>Async/Await</strong> bloklarında yanlış kullanım → deadlock/await hataları çözüldü</li>
        <li><strong>Katmanlı mimari ihlalleri</strong> (service → data erişimi, UI → repository bağımlılıkları)</li>
        <li><strong>Memory leak</strong> oluşturan yanlış IDisposable kullanımı</li>
        <li><strong>Repository & Service</strong> methodlarında veri doğrulama sorunları</li>
      </ul>

      <h2>Kullanılan Teknolojiler</h2>
      <ul>
        <li>C#</li>
        <li>.NET Core</li>
        <li>Entity Framework Core</li>
        <li>MVC & Katmanlı Mimari</li>
        <li>LINQ Performans İyileştirme</li>
        <li>Async/Await Task Yönetimi</li>
      </ul>

      <h2>Bu Projede Kazandıklarım</h2>
      <ul>
        <li>Profesyonel seviyede <strong>debugging</strong> becerisi</li>
        <li>Büyük bir kurumsal projede ortaya çıkan hataları sistematik analiz etme</li>
        <li>Mimari hataları tespit edip doğru yapıya dönüştürme</li>
        <li>Performans odaklı kod yazma (N+1 query azaltma)</li>
        <li>Çok katmanlı sistemlerde veri akışını yönetme</li>
      </ul>

      <a href="/" className="btn project-back">← Geri Dön</a>
    </ProjectLayout>
  );
}
