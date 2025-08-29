import React from "react";
import { data } from "../data/model";

export default function About() {
  const { personal } = data;
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Sobre mí</h2>
      <p className="intro">{personal.tagline}</p>
      <p>
        Soy {personal.name}, {personal.title}. Me enfoco en {personal.specialty}{" "}
        y disfruto construir interfaces limpias, rápidas y accesibles.
      </p>
      <p>
        Me motiva aprender tecnologías modernas y aplicar buenas prácticas:
        código legible, componentes reutilizables y atención al detalle.
      </p>
    </section>
  );
}
