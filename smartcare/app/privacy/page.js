import Footer from "@/components/site/footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SmartCare Services",
  description: "Privacy Policy for SmartCare Services.",
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground">Last Updated: April 2024</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16 lg:py-24 w-full">
        <div className="text-base leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-5 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:mb-2">

          <p>
            Welcome to SmartCare Services. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or interact with our services and tell you about your privacy rights.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, and title.</li>
            <li><strong>Contact Data</strong> includes service address, email address, and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system platform.</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the service contract we are about to enter into or have entered into with you (e.g., booking an AC repair).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any warranty coverage, legal, regulatory, tax, accounting or reporting requirements.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at our provided contact email or phone number found in the footer.
          </p>
        </div>
      </div>
      <Footer />
    </div>

  );
}
