import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="border-t border-primary/15 bg-gradient-to-r from-primary/8 via-primary/5 to-primary/8">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-14">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Ready to book a repair?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Same-day service available · Mon – Sat · 8 AM – 9 PM
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              Book a Service
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary/10 hover:scale-105 active:scale-95"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
