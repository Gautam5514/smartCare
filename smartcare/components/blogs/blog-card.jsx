import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, CalendarDays, UserCircle } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
      
      {/* ── Image Wrapper ── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur-md shadow-sm">
            {blog.category}
          </span>
        </div>
      </div>

      {/* ── Content Container ── */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        
        {/* Meta Info */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-primary/70" />
            <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary/70" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
             <UserCircle className="h-3.5 w-3.5 text-primary/70" />
             <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary line-clamp-2">
          <Link href={`/blogs/${blog.slug}`} className="outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
             <span className="absolute inset-0" />
            {blog.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Read More Link (Functional but styled like a button) */}
        <div className="mt-auto flex items-center justify-between border-t border-primary/5 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-primary/80">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
