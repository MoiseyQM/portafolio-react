import React from "react";

export default function CodeTerminal() {
  const [output, setOutput] = React.useState<string>("");
  const [cursor, setCursor] = React.useState<boolean>(true);

  React.useEffect(() => {
    const lines = [
      "$ whoami",
      "moiseyqm",
      "$ stack --top 8",
      "Java, HTML5, CSS3, PHP, SQL, JavaScript, Python, Unity",
      "$ proyectos --listar",
      "- Portafolio Personal (HTML/CSS/JS)",
      "- Sistema de Gestión (PHP/MySQL)",
      "- Juego 2D (Unity/C#)",
      "$ contacto --email",
      "moiseyqm@gmail.com",
      "$ github open",
      "https://github.com/MoiseyQM",
    ];

    const full = lines.join("\n");
    let i = 0;
    setOutput("");
    const id = window.setInterval(() => {
      setOutput(full.slice(0, i++));
      if (i > full.length) window.clearInterval(id);
    }, 18);
    return () => window.clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = window.setInterval(() => setCursor((c) => !c), 500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="terminal" aria-label="terminal animado">
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">bash</span>
      </div>
      <pre className="terminal-body">
        {output}
        <span className={"caret" + (cursor ? " on" : "")}>█</span>
      </pre>
    </div>
  );
}
