import React from "react";
import { data } from "../data/model";

export default function Skills() {
  const { skills } = data as any;
  const front = skills.lenguajesIntermedios
    .concat(skills.lenguajesBasicos)
    .filter((s: any) =>
      [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Flutter",
      ].includes(s.name)
    );
  const back = [
    ...skills.lenguajesIntermedios.filter((s: any) =>
      ["Java", "PHP", "C#"].includes(s.name)
    ),
    ...skills.tecnologias.filter((s: any) => ["MySQL"].includes(s.name)),
  ];
  const office = (skills.tools || []).map((t: any) => ({ name: t.name }));
  const extras = skills.tecnologias.filter((s: any) =>
    ["Git", "GitHub", "Unity"].includes(s.name)
  );

  const Group = ({ title, items }: { title: string; items: any[] }) => (
    <div className="console-window">
      <div className="console-header">
        <div className="console-buttons">
          <span className="console-btn red"></span>
          <span className="console-btn yellow"></span>
          <span className="console-btn green"></span>
        </div>
        <div className="console-title">{title}</div>
      </div>
      <div className="console-body">
        <div className="console-prompt">
          <span className="prompt-symbol">$</span>
          <span className="prompt-text">ls -la {title.toLowerCase()}</span>
        </div>
        <div className="tech-items-console">
          {items.map((s, index) => (
            <div key={s.name} className="tech-item-console">
              <span className="line-number">
                {String(index + 1).padStart(2, "0")}:
              </span>
              {s.icon ? (
                <i className={s.icon} aria-hidden />
              ) : (
                <span className="tech-emoji">•</span>
              )}
              <span className="tech-name">{s.name}</span>
              <span className="tech-status">✓ installed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Tecnologías</h2>

      <div className="tech-groups-console">
        <Group title="Frontend" items={front} />
        <Group title="Backend" items={back} />
        <Group title="Office Tools" items={office} />
        <Group title="Extras" items={extras} />
      </div>
    </section>
  );
}
