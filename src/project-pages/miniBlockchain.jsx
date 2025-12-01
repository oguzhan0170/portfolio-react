import React from "react";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function MiniChain() {
  return (
    <ProjectLayout title="MiniChain – Rust ile Geliştirilmiş Minimal Blockchain">
      <>
        <p className="project-description">
          Proof-of-Work algoritmasını kullanan, Rust backend ve React tabanlı
          web arayüz ile çalışan tamamen işlevsel bir mini blockchain
          uygulaması.
        </p>

        <h2>Proje Özeti</h2>
        <p>
          Bu projede, <strong>Rust</strong> programlama dili ve
          <strong> Proof-of-Work (PoW)</strong> mekanizmasını temel alan minimal
          bir blockchain sistemi geliştirdim. Uygulama; blok üretimi, SHA-256
          hash hesaplama, madencilik (mining), nonce arama ve zorluk seviyesine
          göre blok doğrulama gibi blockchain teknolojisinin temel prensiplerini
          gerçek zamanlı olarak uygulamaktadır.
        </p>
        <p>
          Frontend kısmında, blokları görüntüleyebilen, madencilik sürecini
          takip edebilen ve zincir bütünlüğünü kontrol eden modern bir
          <strong> React tabanlı blockchain explorer</strong> arayüzü
          oluşturdum.
        </p>

        <h2>Kullanılan Teknolojiler</h2>
        <ul>
          <li>Rust</li>
          <li>Warp (Rust Web Framework)</li>
          <li>SHA-256 Hashing</li>
          <li>Proof-of-Work (PoW)</li>
          <li>React</li>
          <li>Vite</li>
          <li>JavaScript</li>
          <li>CSS (Light/Dark tema desteği)</li>
        </ul>

        <h2>Özellikler</h2>
        <ul>
          <li>Bloklar için SHA-256 hash üretimi</li>
          <li>Proof-of-Work mining mekanizması</li>
          <li>Nonce arama algoritması</li>
          <li>Zorluk seviyesi (Difficulty) kontrolü</li>
          <li>Zincir bütünlüğü doğrulama</li>
          <li>React tabanlı modern blockchain explorer</li>
          <li>Açılır blok detay kartları (hash, timestamp, prev hash vb.)</li>
          <li>Light / Dark tema</li>
          <li>Gerçek zamanlı mining göstergesi</li>
        </ul>

        <h2>Proje Bağlantısı</h2>
        <p>
          Github deposu:{" "}
          <a
            href="https://github.com/oguzhan0170/minichain-rust"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            github.com/oguzhan0170/minichain-rust
          </a>
        </p>

        <a href="/#projects" className="btn project-back">
          ← Geri Dön
        </a>
      </>
    </ProjectLayout>
  );
}
