import React from "react";
import { data } from "../data/model";
import CodeTerminal from "./CodeTerminal";

type Labels = { [k: string]: string };
type Props = { tab: string; onChangeTab: (t: any) => void; labels: Labels };
export default function Sidebar({ tab, onChangeTab, labels }: Props) {
  const { personal } = data;
  const isCvExternal = Boolean(
    personal.cvUrl && /^https?:\/\//i.test(personal.cvUrl)
  );

  return (
    <aside className="sidebar">
      <div className="avatar">
        <img
          src={
            personal.profileImage ||
            "https://via.placeholder.com/160x160?text=JM"
          }
          alt={personal.name}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/160x160?text=JM";
          }}
        />
      </div>
      <h2 className="name">{personal.name}</h2>
      <div className="role">
        {personal.specialty} • {personal.title}
      </div>

      <div className="info-list">
        <div className="info-item">
          <span>Ubicación</span>
          <strong>Perú</strong>
        </div>
      </div>
      {/* Navegación lateral removida: ahora se usa solo el NavRail izquierdo */}

      <div className="socials">
        <a
          className="btn ghost"
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i className="devicon-linkedin-plain" aria-hidden />
        </a>
        <a
          className="btn ghost"
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="devicon-github-original" aria-hidden />
        </a>
        {personal.cvUrl && (
          <a
            className="btn btn-cv"
            href={personal.cvUrl}
            {...(isCvExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { download: true })}
          >
            <i className="fas fa-file-pdf"></i>
            Descargar CV
          </a>
        )}
      </div>

      <div className="section" style={{ marginTop: 12 }}>
        <CodeTerminal />
      </div>
    </aside>
  );
}
