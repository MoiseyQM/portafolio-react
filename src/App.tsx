import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NavRail from "./components/NavRail";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [tab, setTab] = useState<
    "inicio" | "tecnologias" | "proyectos" | "contacto"
  >("inicio");
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("theme") as any) || "dark"
  );
  const [lang, setLang] = useState<"es" | "en">(
    (localStorage.getItem("lang") as any) || "es"
  );

  useEffect(() => {
    const handler = (e: any) => setTab(e.detail);
    window.addEventListener("switch-tab", handler as any);
    return () => window.removeEventListener("switch-tab", handler as any);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const labels = {
    es: {
      inicio: "Inicio",
      tecnologias: "Tecnologías",
      proyectos: "Proyectos",
      contacto: "Contacto",
    },
    en: {
      inicio: "Home",
      tecnologias: "Technologies",
      proyectos: "Projects",
      contacto: "Contact",
    },
  } as const;
  return (
    <div className="layout with-rail">
      <NavRail
        tab={tab as any}
        onChangeTab={setTab as any}
        labels={labels[lang] as any}
      />
      <main className="content">
        {tab === "inicio" && <Home lang={lang} />}
        {tab === "tecnologias" && <Skills />}
        {tab === "proyectos" && <Projects />}
        {tab === "contacto" && <ContactPage />}
      </main>
      {tab === "inicio" && (
        <Sidebar
          tab={tab as any}
          onChangeTab={setTab as any}
          labels={labels[lang] as any}
        />
      )}
    </div>
  );
}
