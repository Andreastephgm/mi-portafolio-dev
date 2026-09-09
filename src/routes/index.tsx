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
    nombre: "ANIMEFLIX-BACKEND",
    desc: "Panel de seguimiento de hábitos con estadísticas semanales y sincronización entre dispositivos.",
    stack: ["SWIFT", "TYPE", "Postgres"],
  },
  {
    n: "02",
    nombre: "MERCADO LOCAL",
    desc: "Tienda en línea para productores pequeños, con carrito, pagos y panel de pedidos.",
    stack: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    n: "03",
    nombre: "RUTA SEGURA",
    desc: "App de reportes ciudadanos con mapa colaborativo y notificaciones por zona.",
    stack: ["React Native", "Node", "MapLibre"],
  },
  {
    n: "04",
    nombre: "BITÁCORA API",
    desc: "API de registro de eventos con autenticación por roles y documentación automática.",
    stack: ["Python", "FastAPI", "Docker"],
  },
];

const habilidades = [
  "Java",
  "TypeScript",
  "Springboot",
  "React native",
  "Swift",
  "Python",
  "Postgres",
  "Docker",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl space-y-32 px-6 py-20">
        <section className="relative">
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-4 font-mono text-sm tracking-tight text-accent">
              // ANDREA STEFANNY GARCIA MEJIA
            </p>
            <h1 className="mb-6 font-display text-6xl leading-none font-bold tracking-tighter md:text-8xl">
              DESARROLLADORA
              <br />
              <span className="text-lime italic">JUNIOR FULLSTACK</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Disfruto creando aplicaciones{" "}
              <span className="text-foreground">web</span> y{" "}
              <span className="text-foreground">móviles</span>: interfaces
              limpias, código ordenado y detalles que se sienten bien al usar.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                disponible para trabajar
              </span>
              <span className="border border-border px-3 py-1">Colombia · remoto</span>
            </div>

          </div>
        </section>

        <section>
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold">PROYECTOS_SELECCIONADOS</h2>
            <span className="font-mono text-sm text-muted-foreground">[04]</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {proyectos.map((p) => (
              <div
                key={p.n}
                className="group relative border border-border bg-card/50 p-6 transition-colors hover:border-accent/50"
              >
                <div className="relative mb-6 h-48 overflow-hidden bg-secondary grid-field">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex h-full items-center justify-center font-mono text-6xl text-muted-foreground/40">
                    {p.n}
                  </div>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold">{p.nombre}</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-snug text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rule-top pt-32">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3">
              <h2 className="mb-4 font-display text-3xl font-bold">HABILIDADES</h2>
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Stack &amp; herramientas
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:w-2/3 md:grid-cols-4">
              {habilidades.map((h) => (
                <div
                  key={h}
                  className="border border-border p-4 font-mono text-sm transition-colors hover:bg-secondary"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border border-border bg-card p-12 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="mb-6 font-display text-4xl font-bold">¿TRABAJAMOS JUNTOS?</h2>
            <p className="mx-auto mb-10 max-w-lg text-muted-foreground">
              Disponible para nuevos proyectos y colaboraciones.
            </p>
            <a
              href="mailto:hola@ejemplo.com"
              className="inline-block bg-accent px-10 py-4 font-mono font-bold tracking-widest text-accent-foreground transition-colors hover:bg-lime"
            >
              CONTACTAR AHORA
            </a>
            <div className="mt-10 flex justify-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <a href="#" className="transition-colors hover:text-accent">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
