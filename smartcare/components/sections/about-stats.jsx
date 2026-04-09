import { Users, Award, ShieldCheck, Clock3 } from "lucide-react";

const stats = [
  { icon: Users,       value: "500+",   label: "Happy Customers"   },
  { icon: Award,       value: "8+",     label: "Years Experience"  },
  { icon: ShieldCheck, value: "6 Mo",   label: "Repair Warranty"   },
  { icon: Clock3,      value: "60 min", label: "Avg. Response Time" },
];

export default function AboutStats() {
  return (
    <section className="border-y border-primary/10 bg-primary/[0.03]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-primary/10 bg-background p-5 text-center transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/8">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-[12px] font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
