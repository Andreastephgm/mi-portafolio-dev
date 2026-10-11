import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  SiOpenjdk,
  SiSpringboot,
  SiTypescript,
  SiReact,
  SiSwift,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrea García — Portafolio de desarrolladora" },
      {
        name: "description",
        content:
          "Portafolio de Andrea García: proyectos de desarrollo web, tecnologías que uso y cómo contactarme.",
      },
      { property: "og:title", content: "Andrea García — Portafolio de desarrolladora" },
      {
        property: "og:description",
        content: "Proyectos, tecnologías y contacto de Andrea García, desarrolladora de software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const proyectos = [
  {
    n: "01",
    nombre: "ANIMEFLIX-BACKEND",
    desc: "Backend desarrollado para el proyecto AnimeFlix con Java y Spring Boot, utilizando MySQL como base de datos relacional.",
    stack: ["JAVA", "SPRINGBOOT", "MYSQL"],
    img: "/assets/animeflix-backend.png",
    github: "https://github.com/Andreastephgm/animeflix-backend",
  },
  {
    n: "02",
    nombre: "ANIMEFLIX",
    desc: "Plataforma web frontend inspirada en sitios de streaming de anime.",
    stack: ["HTML5", "CSS3", "VANILLA JAVASCRIPT"],
    video: "/assets/animeflix.mp4",
    github: "https://github.com/Andreastephgm/Animeflix/tree/main", 
  },
  {
    n: "03",
    nombre: "GAME STREAM",
    desc: "Aplicación móvil desarrollada en Swift con arquitectura MVVM que ofrece una interfaz moderna e inmersiva para explorar contenido de videojuegos.",
    stack: ["SWIFTUI", "MVVM", "SWIFT5"],
    img: "/assets/game-stream.png",
    github: "https://github.com/Andreastephgm/gameStream", 
  },
  {
    n: "04",
    nombre: "FIT GODS FRONTEND",
    desc: "Aplicación web diseñada para ayudar a los usuarios a organizar y gestionar rutinas de ejercicio y objetivos fitness.",
    stack: ["JAVASCRIPT", "REACT", "CSS3"],
    video: "/assets/fit_gods_video.mp4",
    github: "https://github.com/Andreastephgm/fit-gods-frontend-react", 
  },
];

const habilidades = [
  { nombre: "Java", Icon: SiOpenjdk },
  { nombre: "Spring Boot", Icon: SiSpringboot },
  { nombre: "TypeScript", Icon: SiTypescript },
  { nombre: "React Native", Icon: SiReact },
  { nombre: "Swift", Icon: SiSwift },
  { nombre: "Python", Icon: SiPython },
  { nombre: "PostgreSQL", Icon: SiPostgresql },
  { nombre: "MongoDB", Icon: SiMongodb },
  { nombre: "Docker", Icon: SiDocker },
  { nombre: "Git", Icon: SiGit },
];

function Index() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* BOTÓN TOGGLE MODO CLARO / OSCURO */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 border border-border bg-card px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-md transition-all hover:border-accent hover:shadow-lg cursor-pointer"
          aria-label="Cambiar tema de color"
        >
          {isDark ? "☀️ LIGHT MODE" : "🌙 DARK MODE"}
        </button>
      </div>

      <div className="mx-auto max-w-5xl space-y-32 px-6 py-20">
        {/* HERO SECTION */}
        <section className="relative">
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-4 font-mono text-sm font-semibold tracking-wider text-accent">
              // ANDREA STEFANNY GARCIA MEJIA
            </p>
            <h1 className="mb-6 font-display text-5xl font-extrabold leading-none tracking-tighter md:text-7xl lg:text-8xl">
              DESARROLLADORA
              <br />
              <span className="text-lime italic">FULLSTACK</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/90">
              Disfruto creando aplicaciones{" "}
              <span className="font-semibold text-accent">web</span> y{" "}
              <span className="font-semibold text-accent">móviles</span>: interfaces
              limpias, código ordenado y detalles que se sienten bien al usar.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-2 border border-accent/40 bg-card px-3.5 py-1.5 font-semibold text-foreground shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
                disponible para trabajar
              </span>
              <span className="border border-border bg-card/60 px-3.5 py-1.5 text-muted-foreground">
                Colombia · remoto
              </span>
            </div>
          </div>
        </section>

        {/* PROYECTOS SECTION */}
        <section>
          <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">PROYECTOS</h2>
            <span className="font-mono text-sm font-bold text-accent">[04]</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {proyectos.map((p) => (
              <div
                key={p.n}
                className="group relative flex flex-col justify-between border border-border bg-card/70 p-6 transition-all duration-200 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
              >
                <div>
                  <div className="relative mb-6 h-52 overflow-hidden border border-border/50 bg-secondary grid-field">
                    {p.video ? (
                      <video
                        src={p.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : p.img ? (
                      <img
                        src={p.img}
                        alt={`Vista previa del proyecto ${p.nombre}`}
                        loading="lazy"
                        className="h-full w-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-mono text-6xl text-muted-foreground/40">
                        {p.n}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h3 className="mb-3 font-display text-2xl font-bold tracking-tight text-foreground">
                    {p.nombre}
                  </h3>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-accent uppercase"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>

                {/* BOTÓN / ENLACE A GITHUB */}
                {p.github && (
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent transition-colors hover:text-foreground"
                    >
                      <SiGit className="h-4 w-4" />
                      Ver Código en GitHub →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* HABILIDADES SECTION */}
        <section className="rule-top pt-20">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3">
              <h2 className="mb-2 font-display text-3xl font-extrabold">HABILIDADES</h2>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Stack &amp; herramientas
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:w-2/3 md:grid-cols-4">
              {habilidades.map((h) => {
                const IconComponent = h.Icon;
                return (
                  <div
                    key={h.nombre}
                    className="group flex items-center gap-3 border border-border bg-card/40 p-4 font-mono text-sm transition-all duration-200 hover:border-accent hover:bg-secondary"
                  >
                    <IconComponent className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:scale-110" />
                    <span className="font-medium text-foreground">{h.nombre}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACTO SECTION */}
        <section className="relative overflow-hidden border border-accent/40 bg-card p-12 text-center shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              ¿TRABAJAMOS JUNTOS?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground">
              Disponible para nuevos proyectos, oportunidades laborales y colaboraciones.
            </p>
            <a
              href="mailto:tuemail@ejemplo.com"
              className="inline-block bg-accent px-10 py-4 font-mono text-sm font-bold tracking-widest text-accent-foreground transition-all duration-200 hover:bg-lime hover:shadow-lg hover:shadow-lime/20"
            >
              CONTACTAR AHORA
            </a>
            <div className="mt-12 flex justify-center gap-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <a
                href="https://github.com/Andreastephgm"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andreastefannydev/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}