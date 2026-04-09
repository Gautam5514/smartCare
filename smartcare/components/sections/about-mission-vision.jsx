import {
  Compass, Target, Lightbulb, TrendingUp,
  ShieldCheck, Zap, Wrench, Heart, Quote,
} from "lucide-react";

const missionPillars = [
  { icon: Zap,         text: "Same-Day Service" },
  { icon: ShieldCheck, text: "No Hidden Costs"  },
  { icon: Wrench,      text: "Genuine Parts"    },
  { icon: Heart,       text: "Customer First"   },
];

const visionGoals = [
  { num: "01", goal: "Expand to all of Koderma district by 2025" },
  { num: "02", goal: "Train and certify a team of expert technicians" },
  { num: "03", goal: "Launch a digital booking system for same-day slots" },
];

const journey = [
  { year: "2016", label: "Started Solo",      desc: "First AC repair in Jhumri Telaiya" },
  { year: "2018", label: "100 Clients",       desc: "Word-of-mouth reputation built"    },
  { year: "2021", label: "Expanded Services", desc: "Added fridge & installation"       },
  { year: "2024", label: "500+ Happy Homes",  desc: "SmartCare brand established"       },
];

export default function AboutMissionVision() {
  return (
    <section className="relative overflow-hidden border-t border-primary/10 py-20 lg:py-28">

      {/* Dual ambient glows */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_0%_50%,hsl(var(--primary)/0.07),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_100%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">

        {/* ── Section header ── */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Compass className="h-3.5 w-3.5" />
            Our Direction
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mission &amp;{" "}
            <span className="text-primary">Vision</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The purpose that drives us every single day — from the first call to the final fix.
          </p>
        </div>

        {/* ── Mission + Vision split cards ── */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="pointer-events-none absolute left-6 top-6 h-32 w-32 rounded-full bg-primary/6 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Our Mission
              </div>
              <h3 className="mb-4 text-2xl font-extrabold leading-snug text-foreground">
                Bring Comfort &amp; Reliability to Every Home
              </h3>
              <p className="text-base leading-7 text-muted-foreground">
                Our mission is to deliver fast, affordable, and genuinely reliable AC and
                refrigerator repair to every family in Jhumri Telaiya and Koderma district —
                with complete transparency, zero hidden charges, and workmanship that lasts.
              </p>

              {/* Mission pillars */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {missionPillars.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 rounded-xl border border-primary/10 bg-primary/[0.03] px-3 py-2.5"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-[12px] font-semibold text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="pointer-events-none absolute right-6 top-6 h-32 w-32 rounded-full bg-primary/6 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Our Vision
              </div>
              <h3 className="mb-4 text-2xl font-extrabold leading-snug text-foreground">
                Become Jharkhand&apos;s Most Trusted Repair Brand
              </h3>
              <p className="text-base leading-7 text-muted-foreground">
                We envision SmartCare becoming the most trusted name for home appliance
                service across Jharkhand — a brand where every customer knows they&apos;ll get
                an honest diagnosis, skilled hands, and a repair that stands the test of time.
              </p>

              {/* Vision goals */}
              <div className="mt-6 space-y-3">
                {visionGoals.map(({ num, goal }) => (
                  <div key={num} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary text-[10px] font-extrabold text-primary-foreground">
                      {num}
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Journey timeline ── */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-primary/12 bg-gradient-to-br from-primary/[0.04] via-background to-primary/[0.03] p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Journey</p>
              <p className="text-lg font-bold text-foreground">8+ Years of Growing Trust</p>
            </div>
          </div>

          <div className="relative grid gap-8 sm:grid-cols-4 sm:gap-0">
            {/* Connector line */}
            <div
              className="absolute top-5 left-6 right-6 hidden h-px sm:block"
              style={{ background: "linear-gradient(to right, hsl(var(--primary)/0.4), hsl(var(--primary)/0.1))" }}
            />

            {journey.map(({ year, label, desc }, i) => (
              <div
                key={year}
                className="relative flex flex-col items-center gap-2 px-4 text-center sm:items-start sm:text-left"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background text-[11px] font-extrabold text-primary">
                  {i + 1}
                </div>
                <p className="text-xs font-bold text-primary">{year}</p>
                <p className="text-sm font-bold text-foreground">{label}</p>
                <p className="text-[12px] leading-4 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Founder quote ── */}
        <div className="mt-8 rounded-3xl border border-primary/15 bg-card px-8 py-8 sm:px-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
              <Quote className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-lg font-semibold italic leading-8 text-foreground">
                &ldquo;I don&apos;t just fix machines — I fix the discomfort in people&apos;s homes. That&apos;s
                what SmartCare is about. Every job we do, we do as if it&apos;s for our own family.&rdquo;
              </p>
              <p className="mt-3 text-sm font-bold text-primary">— Mukesh Kumar, Founder</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
