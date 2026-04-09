"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import {
  HelpCircle, ShieldCheck, ChevronDown,
  Star, Clock3, Wrench, CircleCheck,
} from "lucide-react";


const trustPoints = [
  "Transparent estimate before any work begins",
  "OEM & genuine spare parts guaranteed",
  "Brand-trained technicians on every visit",
  "6-month warranty on all repairs",
  "Same-day service available",
];

const tagColors = {
  Booking:  "hsl(var(--primary) / 0.12)",
  Coverage: "hsl(160 60% 40% / 0.12)",
  Pricing:  "hsl(45 80% 50% / 0.12)",
  Warranty: "hsl(140 55% 40% / 0.12)",
  Service:  "hsl(220 70% 55% / 0.12)",
  Timeline: "hsl(30 70% 50% / 0.12)",
  Parts:    "hsl(280 55% 55% / 0.12)",
  Location: "hsl(190 60% 45% / 0.12)",
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-muted/10 to-transparent py-20 lg:py-28"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_20%_0%,hsl(var(--primary)/0.07),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_80%_100%,hsl(var(--primary)/0.05),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">

        {/* ══ Header ══ */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            Customer Questions
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Frequently{" "}
            <span className="text-primary">Asked</span>{" "}
            Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Honest answers about our repair process, pricing, warranty and service area.
          </p>
        </div>

      

        {/* ══ Two-col layout ══ */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.7fr]">

          {/* ── Left: sticky trust panel ── */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">

            {/* Headline */}
            <div>
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                <ShieldCheck className="h-3 w-3" /> Why Trust Us
              </div>
              <h3 className="mt-1 text-2xl font-bold leading-snug text-foreground">
                Honest.{" "}
                <span className="text-primary">Skilled.</span>{" "}
                Accountable.
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Built on transparent communication and quality repairs in Jhumri Telaiya — not shortcuts.
              </p>
            </div>

            {/* Checklist card */}
            <div className="rounded-2xl border border-primary/12 bg-primary/[0.03] p-5">
              <ul className="space-y-3">
                {trustPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-5 text-muted-foreground">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>

          {/* ── Right: Accordion ── */}
          <div className="flex flex-col gap-2.5">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  layout
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-primary/40 bg-primary/[0.04] shadow-sm"
                      : "border-border/60 bg-card hover:border-primary/20 hover:bg-primary/[0.02]"
                  }`}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Number bubble */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/8 text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      {/* Tag */}
                      {f.tag && (
                        <span
                          className="w-fit rounded-full border border-primary/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary"
                          style={{ background: tagColors[f.tag] ?? "hsl(var(--primary)/0.08)" }}
                        >
                          {f.tag}
                        </span>
                      )}
                      {/* Question */}
                      <span
                        className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                          isOpen ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {f.q}
                      </span>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-colors duration-200 ${
                          isOpen ? "text-primary" : "text-muted-foreground/50"
                        }`}
                      />
                    </motion.div>
                  </button>

                  {/* Animated answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-5 pb-5 pl-16 text-sm leading-7 text-muted-foreground">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
