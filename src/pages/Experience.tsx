import React from "react";
import { data } from "../data/model";
import Timeline from "../components/Timeline";

export default function Experience() {
  const { experience, education } = data;
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Experiencia</h2>
      <Timeline items={experience} />
      <div className="section">
        <h3>Educación</h3>
        <Timeline items={education} />
      </div>
    </section>
  );
}
