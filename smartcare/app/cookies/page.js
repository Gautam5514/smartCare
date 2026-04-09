import Footer from "@/components/site/footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | SmartCare Services",
  description: "Cookie Policy for SmartCare Services.",
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-background border-b border-primary/10">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
        <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-14 relative z-10 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Legal Document
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
            Cookie <span className="text-primary">Policy</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground">Last Updated: April 2024</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16 lg:py-24 w-full">
        <div className="text-base leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-5 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:mb-2">

          <p>
            This Cookie Policy explains how SmartCare Services uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2>2. Why do we use cookies?</h2>
          <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website.</p>

          <h2>3. Types of Cookies we use</h2>
          <ul>
            <li><strong>Essential cookies:</strong> These are cookies that are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Analytics cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.</li>
            <li><strong>Performance cookies:</strong> These are used to enhance the performance and functionality of our Website but are non-essential to their use.</li>
          </ul>

          <h2>4. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>
          <p>
            In addition, most web browsers allow some control of most cookies through the browser settings.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
