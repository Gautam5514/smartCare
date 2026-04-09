import { ShieldCheck, Zap, Wrench, Star } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    desc: "We inspect first, share a clear estimate, and only start work once you approve. No surprises.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Same-day service for most repairs in Jhumri Telaiya. We know downtime is costly in the heat.",
  },
  {
    icon: Wrench,
    title: "Genuine Parts Only",
    desc: "Every repair uses OEM or brand-compatible parts from authorised distributors — never counterfeits.",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    desc: "6-month warranty on all our work. If the same issue recurs, we return and fix it free of cost.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_50%_50%,hsl(var(--primary)/0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Star className="h-3.5 w-3.5" />
            What Drives Us
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our <span className="text-primary">Core Values</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The principles that guide every repair, every visit, every interaction.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8"
            >
              {/* Top accent bar on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/8 transition-all duration-300 group-hover:bg-primary/15">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">{v.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
