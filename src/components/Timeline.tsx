import React from "react";

type TimelineItem = {
  title: string;
  org?: string;
  period?: string;
  description?: string;
  link?: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((it, idx) => (
        <li key={idx} className="timeline-item">
          <div className="dot" aria-hidden />
          <div className="timeline-body">
            <div className="timeline-row">
              <span className="timeline-title">{it.title}</span>
              {it.period && (
                <span className="timeline-period">{it.period}</span>
              )}
            </div>
            {(it.org || it.link) && (
              <div className="timeline-org">
                {it.org}
                {it.link && (
                  <a
                    className="timeline-link"
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver
                  </a>
                )}
              </div>
            )}
            {it.description && (
              <p className="timeline-desc">{it.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
