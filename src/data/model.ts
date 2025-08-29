import type { CSSProperties } from "react";
import profileImg from "../assets/mi-foto.jpg";

export const data = {
  personal: {
    name: "Juan Moisés Quispe Marcas",
    title: "Estudiante de Ingeniería de Sistemas",
    specialty: "Desarrollo Web",
    email: "moiseyqm@gmail.com",
    linkedin: "https://www.linkedin.com/in/moisés-quispe-394131328/",
    github: "https://github.com/MoiseyQM",
    // Google Drive share link (opens in browser for preview)
    cvUrl:
      "https://drive.google.com/file/d/163Pr-lk7-nH6YFgNozM1tE2DMq6cwOtW/view?usp=sharing",
    tagline:
      "Busco siempre dar lo mejor de mí — Profesional, de pocas palabras y orientado a la diferenciación.",
    profileImage: profileImg,
  },
  skills: {
    lenguajesIntermedios: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "SQL", icon: "devicon-mysql-plain" },
    ],
    lenguajesBasicos: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Dart", icon: "devicon-dart-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
    tecnologias: [
      { name: "Unity", icon: "devicon-unity-original" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Flutter", icon: "devicon-flutter-plain" },
    ],
    tools: [
      { name: "Figma" },
      { name: "Canva" },
      { name: "VS Code" },
      { name: "Visual Studio" },
    ],
    softSkills: [
      { name: "Comunicación" },
      { name: "Trabajo en equipo" },
      { name: "Organización" },
      { name: "Aprendizaje continuo" },
      { name: "Enfoque en resultados" },
    ],
  },
  projects: [
    {
      title: "Tienda de Celulares Web",
      technologies: ["HTML", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/MoiseyQM/tienda-celulares",
      demoUrl: null,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
      description: "Plataforma de venta de celulares con arquitectura MVC.",
      longDescription:
        "Desarrollo de una página web de venta de celulares usando patrón MVC con HTML, JavaScript y PHP. Conectada a base de datos SQL para gestión de productos, usuarios y ventas con sistema de autenticación y carrito de compras.",
    },
    {
      title: "Red Social Estudiantil",
      technologies: ["Java", "Android Studio", "Firebase"],
      githubUrl: "https://github.com/MoiseyQM/red-estudiantil",
      demoUrl: null,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      description:
        "App móvil para conectar estudiantes con anuncios personalizados.",
      longDescription:
        "Aplicación Android para conectar estudiantes a través de anuncios personalizados para ayuda mutua con sistema de pagos. Desarrollada con Java, Android Studio, patrón MVVM y Firebase para mensajes y anuncios en tiempo real.",
    },
    {
      title: "Museo VR Pirámides de Giza",
      technologies: ["Unity 3D", "C#", "VR"],
      githubUrl: "https://github.com/MoiseyQM/museo-giza-vr",
      demoUrl: null,
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=80&w=1600&auto=format&fit=crop",
      description: "Experiencia VR inmersiva del museo y pirámides de Giza.",
      longDescription:
        "Proyecto Unity 3D de museo virtual de las pirámides de Giza y la Esfinge para gafas VR. Experiencia inmersiva con recorridos virtuales, información interactiva y recreación histórica en realidad virtual.",
    },
  ],
  experience: [
    {
      title: "Desarrollador Web (Freelance)",
      org: "Proyectos personales y para clientes",
      period: "2023 — Presente",
      description:
        "Desarrollo de sitios y aplicaciones web ligeras con enfoque en rendimiento y UI compacta.",
      link: "https://github.com/MoiseyQM",
    },
    {
      title: "Proyectos Académicos",
      org: "Universidad",
      period: "2021 — 2023",
      description:
        "Construcción de sistemas CRUD (PHP/MySQL) y prototipos con Unity/C# y Flutter.",
    },
  ],
  education: [
    {
      title: "Ingeniería de Sistemas",
      org: "Perú",
      period: "En curso",
      description:
        "Formación con foco en desarrollo de software y bases de datos.",
    },
    {
      title: "Cursos Online",
      org: "Udemy y otros",
      period: "2022 — 2025",
      description: "Java, JavaScript, Python, Git/GitHub, bases de datos SQL.",
    },
  ],
  certificates: [
    // { name: "Curso de Java", issuer: "Platzi", url: "https://..." },
    // { name: "SQL Básico", issuer: "Certiprof", url: "https://..." },
  ],
};
