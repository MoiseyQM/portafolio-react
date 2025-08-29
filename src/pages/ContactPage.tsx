import React from "react";
import Contact from "../components/Contact";
import { data } from "../data/model";

export default function ContactPage() {
  const { personal } = data;

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Contacto</h2>
      <p className="intro">
        ¿Tienes un proyecto en mente? Conectemos y veamos cómo puedo ayudar.
      </p>

      <div className="section-compact">
        <h3>Conectemos</h3>
        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="devicon-linkedin-plain" />
            </div>
            <div className="contact-info">
              <strong>LinkedIn</strong>
              <p>Conecta profesionalmente</p>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-small"
              >
                Perfil
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="devicon-github-original" />
            </div>
            <div className="contact-info">
              <strong>GitHub</strong>
              <p>Revisa mis repositorios</p>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-small"
              >
                Código
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <span style={{ fontSize: "24px" }}>📧</span>
            </div>
            <div className="contact-info">
              <strong>Email</strong>
              <p>Escríbeme directamente</p>
              <a href={`mailto:${personal.email}`} className="btn">
                Enviar mensaje
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Formulario de contacto</h3>
        <Contact />
      </div>
    </section>
  );
}
