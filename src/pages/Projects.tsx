import React from "react";
import { data } from "../data/model";

type Project = {
  title: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string | null;
  image?: string;
  description?: string;
  longDescription?: string;
};

export default function Projects() {
  const { projects } = data as any;
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Proyectos</h2>
      <div className="projects projects-large">
        {(projects as Project[]).map((p: Project) => {
          const primary = p.demoUrl || p.githubUrl || "#";
          const placeholder =
            "https://via.placeholder.com/400x240?text=Proyecto";
          return (
            <article key={p.title} className="project-card">
              <div className="project-image">
                <a href={primary} target="_blank" rel="noreferrer">
                  <img src={p.image || placeholder} alt={p.title} />
                </a>
              </div>
              <div className="project-body">
                <h3 className="project-title" style={{ marginTop: 0 }}>
                  {p.title}
                </h3>
                {p.description && (
                  <p className="intro" style={{ marginTop: 6 }}>
                    {p.description}
                  </p>
                )}
                {p.longDescription && (
                  <p style={{ marginTop: 6, color: "#cbd6ea" }}>
                    {p.longDescription}
                  </p>
                )}
                <div className="project-tech-list">
                  {p.technologies.map((t) => (
                    <span key={t} className="skill-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {p.demoUrl && (
                    <a
                      className="btn btn-primary"
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      className="btn btn-secondary"
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
