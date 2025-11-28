import React from "react";

export default function ProjectLayout({ title, children }) {
  return (
    <div className="project-page">
      <div className="container project-container">
        <h1 className="project-title">{title}</h1>
        <div className="project-content">{children}</div>
      </div>

      
    </div>
  );
}
