import React from "react";

type Tab = "inicio" | "tecnologias" | "proyectos" | "contacto";
type Labels = { [k: string]: string };

export default function NavRail({
  tab,
  onChangeTab,
  labels,
}: {
  tab: Tab;
  onChangeTab: (t: Tab) => void;
  labels: Labels;
}) {
  const items = [
    { id: "inicio", label: labels.inicio, icon: "</>" },
    {
      id: "tecnologias",
      label: labels.tecnologias || "Tecnologías",
      icon: "{}",
    },
    { id: "proyectos", label: labels.proyectos, icon: "#" },
    {
      id: "contacto",
      label: (labels as any).contacto || "Contacto",
      icon: "@",
    },
  ] as const;
  return (
    <aside className="nav-rail" aria-label="Navegación">
      {items.map((it) => (
        <button
          key={it.id}
          className={"nav-rail-btn" + (tab === it.id ? " active" : "")}
          onClick={() => onChangeTab(it.id as Tab)}
          title={it.label}
          aria-label={it.label}
        >
          <span aria-hidden>{it.icon}</span>
        </button>
      ))}
    </aside>
  );
}
