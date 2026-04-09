import { blogs } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, UserCircle, Tag } from "lucide-react";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.title + " | SmartCare Blog",
    description: blog.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="flex flex-col min-h-screen">
      
      {/* ── Hero Header ── */}
      <header className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-background border-b border-primary/10">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-14 relative relative z-10">
          
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blogs
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              <Tag className="h-3 w-3" /> {blog.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
             <div className="flex items-center gap-2">
                <UserCircle className="h-5 w-5 text-primary/70" />
                <span>{blog.author}</span>
             </div>
             <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary/70" />
                <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary/70" />
                <span>{blog.readTime}</span>
              </div>
          </div>
        </div>
      </header>

      {/* ── Featured Image ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 w-full -mt-8 relative z-20">
         <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-2xl border border-primary/20 bg-muted">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
         </div>
      </div>

      {/* ── Content Body ── */}
      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16 lg:py-24">
         <div 
           className="text-lg leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-6 [&>p:last-child]:mb-0 [&>a]:text-primary [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-primary/80 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>li]:mb-2"
           dangerouslySetInnerHTML={{ __html: blog.content }}
         />
      </div>

    </article>
  );
}
