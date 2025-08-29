import React, { useMemo, useState } from "react";
import { data } from "../data/model";

export default function Contact() {
  const to = data.personal.email;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Contacto Portafolio - ${name || "Sin nombre"}`
    );
    const body = encodeURIComponent(
      `${msg}\n\n— ${name}${email ? ` | ${email}` : ""}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [to, name, email, msg]);

  return (
    <form
      className="contact"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="contact-row">
        <input
          className="contact-input"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className="contact-textarea"
        rows={4}
        placeholder="Tu mensaje"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <div className="contact-actions">
        <button className="btn" type="submit">
          Enviar
        </button>
        <a className="btn ghost" href={mailto}>
          Abrir en correo
        </a>
      </div>
    </form>
  );
}
