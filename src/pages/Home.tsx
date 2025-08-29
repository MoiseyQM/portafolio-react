import React from "react";
import { data } from "../data/model";
import Timeline from "../components/Timeline";

export default function Home({ lang = "es" as "es" | "en" }) {
  const { personal, skills, projects, experience, education } = data;
  return (
    <section className="home">
      <header className="home-header">
        <h1>
          {lang === "es" ? "Hey, conectemos </>" : "Hey, let's connect </>"}
        </h1>
        <p className="motivational-quote">
          "Si alguien pudo hacerlo, yo también puedo. Y si nadie pudo, yo seré
          el primero."
        </p>
      </header>

      {/* Sección APTITUDES - más compacta */}
      <div className="section">
        <h3>APTITUDES</h3>
        <div className="aptitudes-grid">
          <div className="aptitud-item">
            <div className="aptitud-icon">•</div>
            <div className="aptitud-text">Iniciativa</div>
          </div>
          <div className="aptitud-item">
            <div className="aptitud-icon">•</div>
            <div className="aptitud-text">Adaptabilidad</div>
          </div>
          <div className="aptitud-item">
            <div className="aptitud-icon">•</div>
            <div className="aptitud-text">Aprendizaje Rápido</div>
          </div>
          <div className="aptitud-item">
            <div className="aptitud-icon">•</div>
            <div className="aptitud-text">Manejo de tecnologías</div>
          </div>
          <div className="aptitud-item">
            <div className="aptitud-icon">•</div>
            <div className="aptitud-text">Empatía</div>
          </div>
        </div>
      </div>

      {/* Tecnologías con logos más grandes y coloridos */}
      <div className="section">
        <h3>
          {lang === "es" ? "Tecnologías principales" : "Main Technologies"}
        </h3>
        <div className="marquee row-right">
          {[...skills.lenguajesIntermedios, ...skills.lenguajesBasicos].map(
            (s) => (
              <span
                key={"m1-" + s.name}
                className="skill-icon big spin"
                title={s.name}
              >
                <i className={s.icon || "devicon-code-plain"} aria-hidden />
              </span>
            )
          )}
        </div>
        <div className="marquee row-left">
          {skills.tecnologias.map((s) => (
            <span
              key={"m2-" + s.name}
              className="skill-icon big spin reverse"
              title={s.name}
            >
              <i className={s.icon || "devicon-code-plain"} aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>{lang === "es" ? "Proyectos" : "Projects"}</h3>
        <div className="projects-preview">
          <div className="projects-info">
            <div className="projects-compact">
              {projects.slice(0, 3).map((p) => (
                <div key={p.title} className="project-mini">
                  <div className="project-title">{p.title}</div>
                  <div className="project-description">{p.description}</div>
                  <div className="project-tech">
                    {p.technologies.slice(0, 3).join(" • ")}
                  </div>
                  <div className="project-actions">
                    {p.demoUrl && (
                      <a
                        className="btn btn-primary btn-small"
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        className="btn btn-secondary btn-small"
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="projects-visual">
            <div className="code-preview">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="filename">portfolio.tsx</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="keyword">const</span>{" "}
                  <span className="variable">projects</span> = [
                </div>
                <div className="code-line">
                  {" "}
                  <span className="string">'Tienda Web MVC'</span>,
                </div>
                <div className="code-line">
                  {" "}
                  <span className="string">'App Android MVVM'</span>,
                </div>
                <div className="code-line">
                  {" "}
                  <span className="string">'Museo VR Unity'</span>
                </div>
                <div className="code-line">
                  ]; <span className="keyword">// Innovación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de experiencia removida del Home; se muestra en la pestaña Proyectos si existe */}
    </section>
  );
}
