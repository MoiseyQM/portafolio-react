import React from "react";

export default function Certificates() {
  const certs: { name: string; issuer?: string; url?: string }[] = [
    // Rellena con tus certificados reales
    // { name: "Curso de Java", issuer: "Platzi", url: "https://..." },
  ];
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Certificados</h2>
      {certs.length === 0 ? (
        <p className="intro">Pronto agregaré mis certificados con enlaces.</p>
      ) : (
        <ul>
          {certs.map((c) => (
            <li key={c.name}>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
              ) : (
                c.name
              )}
              {c.issuer ? ` — ${c.issuer}` : ""}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
