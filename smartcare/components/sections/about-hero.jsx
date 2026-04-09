import Image from "next/image";
import { business } from "@/lib/data";
import {
  Wrench, MapPin, Phone, Mail, Award, Users, CheckCircle2,
} from "lucide-react";

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
const emailHref = `mailto:${business.email}`;

const skills = [
  "AC Repair & Servicing",
  "AC Installation",
  "Gas Leak Detection & Refill",
  "Compressor Diagnosis",
  "Power & PCB Issues",
  "Refrigerator Repair",
  "Water Leakage Repair",
  "Preventive Maintenance",
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-28 pb-20 lg:pt-36 lg:pb-28">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_10%_0%,hsl(var(--primary)/0.10),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_90%_100%,hsl(var(--primary)/0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Founder Image ── */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">

            {/* Decorative ring */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-30"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.25), transparent 60%)" }}
            />

            {/* Image card */}
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-primary/20 shadow-2xl shadow-primary/10">
                <Image
                  src="/founder.png"
                  alt="Mukesh Kumar — Founder, SmartCare Services"
                  width={600}
                  height={700}
                  className="w-full object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge — Experience */}
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-primary/20 bg-card px-4 py-3 shadow-xl shadow-black/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Experience</p>
                  <p className="text-sm font-bold text-foreground">8+ Years Expert</p>
                </div>
              </div>

              {/* Floating badge — Clients */}
              <div className="absolute -top-5 right-4 flex items-center gap-3 rounded-2xl border border-primary/20 bg-card px-4 py-3 shadow-xl shadow-black/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Served</p>
                  <p className="text-sm font-bold text-foreground">500+ Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Text Content ── */}
          <div className="order-1 lg:order-2">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Wrench className="h-3.5 w-3.5" />
              About the Founder
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Mukesh Kumar</span>
            </h1>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Founder &amp; Lead Technician · SmartCare Services
            </p>

            {/* Story */}
            <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                I started SmartCare Services with one simple belief — people deserve
                honest, reliable appliance repair without hidden charges or half-hearted fixes.
                Growing up in Jhumri Telaiya, I saw how summer heat makes a broken AC not
                just an inconvenience, but a real problem for families.
              </p>
              <p>
                With over <strong className="text-foreground">8 years of hands-on experience</strong> in
                AC servicing, installation, gas refill, compressor repairs, and refrigerator
                diagnostics, I&apos;ve built a reputation here in{" "}
                <strong className="text-foreground">Koderma district, Jharkhand</strong> for
                getting the job done right — the first time.
              </p>
              <p>
                Every repair I do comes with a <strong className="text-foreground">6-month service warranty</strong>.
                I use genuine parts, share estimates upfront, and won&apos;t start work until
                you&apos;re comfortable with the plan. That&apos;s the SmartCare promise.
              </p>
            </div>

            {/* Skills list */}
            <div className="mt-8 grid grid-cols-2 gap-2">
              {skills.map((sk) => (
                <div key={sk} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-[13px] text-muted-foreground">{sk}</span>
                </div>
              ))}
            </div>

            {/* Contact row */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
              <a
                href={emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
            </div>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {business.city}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
