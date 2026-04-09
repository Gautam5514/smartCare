import BlogGrid from "@/components/blogs/blog-grid";
import Footer from "@/components/site/footer";
import { blogs } from "@/lib/blog-data";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blogs & Tips | SmartCare Services",
  description: "Read the latest tips, guides, and advice on appliance repair and maintenance from the experts at SmartCare Services.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.08),transparent_60%)]" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <BookOpen className="h-3.5 w-3.5" />
            Knowledge Base
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Appliance Care <span className="text-primary">Insights</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground mx-auto max-w-2xl">
            Expert advice, maintenance tips, and practical guides to keep your home appliances running smoothly all year round.
          </p>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="pb-24 flex-1">
        <BlogGrid initialBlogs={blogs} />
      </section>
      <Footer />

    </div>
  );
}
