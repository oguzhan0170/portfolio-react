import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext.jsx";

export default function Contact() {
  const { lang } = useLang();
  const t = (tr, en) => (lang === "tr" ? tr : en);

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{t("İletişim", "Contact")}</h2>
          <p className="contact-intro">
            {t(
              "Benimle iş fırsatları, projeler veya iş birliği için iletişime geçebilirsiniz.",
              "Feel free to reach out for roles, projects or collaboration."
            )}
          </p>
          <div className="contact">
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/o%C4%9Fuzhan-yavuz-987a12286/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/oğuzhan-yavuz-987a12286
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/oguzhan0170"
                target="_blank"
                rel="noreferrer"
              >
                github.com/oguzhan0170
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
