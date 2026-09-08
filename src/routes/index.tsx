import { createFileRoute } from "@tanstack/react-router";

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
    nombre: "Órbita",
    anio: "2025",
    desc: "Panel de seguimiento de hábitos con estadísticas semanales y sincronización entre dispositivos.",
    stack: ["React", "TypeScript", "Postgres"],
  },
  {
    n: "02",
    nombre: "Mercado Local",
    anio: "2025",
    desc: "Tienda en línea para productores pequeños, con carrito, pagos y panel de pedidos.",
    stack: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    n: "03",
    nombre: "Ruta Segura",
    anio: "2024",
    desc: "App de reportes ciudadanos con mapa colaborativo y notificaciones por zona.",
    stack: ["React Native", "Node", "MapLibre"],
  },
  {
    n: "04",
    nombre: "Bitácora API",
    anio: "2024",
    desc: "API de registro de eventos con autenticación por roles y documentación automática.",
    stack: ["Python", "FastAPI", "Docker"],
  },
];

const habilidades = [
  { titulo: "Lenguajes", items: "JavaScript · TypeScript · Python · SQL" },
  { titulo: "Interfaces", items: "React · Next.js · Tailwind · accesibilidad" },
  { titulo: "Servidor y datos", items: "Node · FastAPI · Postgres · REST" },
  { titulo: "Herramientas", items: "Git · Docker · Vitest · Figma" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-baseline justify-between px-6 py-8">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Andrea García
        </span>
        <nav className="flex gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#proyectos" className="transition-colors hover:text-accent">
            Proyectos
          </a>
          <a href="#sobre" className="transition-colors hover:text-accent">
            Sobre mí
          </a>
          <a href="#contacto" className="transition-colors hover:text-accent">
            Contacto
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="py-20 md:py-28">
          <h1 className="max-w-[14ch] font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] tracking-tight">
            Desarrolladora de <em className="text-accent">software</em>
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            Diseño y construyo aplicaciones web: interfaces claras, código ordenado y productos que
            de verdad se usan. Aquí están algunos de los proyectos en los que he trabajado.
          </p>
          <a
            href="#proyectos"
            className="mt-10 inline-block border-b border-accent pb-1 font-mono text-sm uppercase tracking-[0.18em] text-accent"
          >
            Ver proyectos ↓
          </a>
        </section>

        <section id="proyectos" className="rule-top py-16">
          <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Proyectos
          </h2>
          <ul>
            {proyectos.map((p) => (
              <li key={p.n} className="group rule-top py-8">
                <div className="grid gap-4 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-8">
                  <span className="font-mono text-xs text-accent">{p.n}</span>
                  <div>
                    <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-accent">
                      {p.nombre}
                    </h3>
                    <p className="mt-2 max-w-[52ch] leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {p.stack.join(" / ")}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{p.anio}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="sobre" className="rule-top grid gap-10 py-16 md:grid-cols-[1fr_2fr]">
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Sobre mí
          </h2>
          <div>
            <p className="max-w-[58ch] font-display text-2xl leading-snug">
              Me gusta el trabajo cuidadoso: entender el problema, escribir poco código y que lo que
              queda sea fácil de mantener.
            </p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {habilidades.map((h) => (
                <div key={h.titulo}>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {h.titulo}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{h.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contacto" className="rule-top py-20">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Contacto
          </h2>
          <p className="font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05]">
            ¿Trabajamos juntos?
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 font-mono text-sm">
            <a
              href="mailto:hola@ejemplo.com"
              className="border-b border-border pb-1 transition-colors hover:border-accent hover:text-accent"
            >
              hola@ejemplo.com
            </a>
            <a
              href="#"
              className="border-b border-border pb-1 transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="#"
              className="border-b border-border pb-1 transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="rule-top mx-auto max-w-5xl px-6 py-8">
        <p className="font-mono text-xs text-muted-foreground">© 2026 Andrea García</p>
      </footer>
    </div>
  );
}
