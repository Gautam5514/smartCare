import Footer from "@/components/site/footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service | SmartCare Services",
  description: "Terms of Service for SmartCare Services.",
};

export default function TermsOfServicePage() {
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
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground">Last Updated: April 2024</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16 lg:py-24 w-full">
        <div className="text-base leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-5 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:mb-2">

          <p>
            Please read these terms and conditions carefully before using our service. By booking a repair with SmartCare Services, you agree to be bound by these terms.
          </p>

          <h2>1. Service Agreements & Estimates</h2>
          <p>
            Upon inspection of your appliance (AC or Refrigerator), our technician will provide an estimate of the total cost of repair, including parts and labor. We will not begin the repair process until you have fully approved the estimate.
          </p>

          <h2>2. Warranty Information</h2>
          <p>
            SmartCare Services offers a 6-month warranty on repairing workmanship. This warranty covers the specific repair carried out by our technician. If the identical problem occurs within 6 months of the initial repair, we will resolve it free of charge. This warranty does not cover:
          </p>
          <ul>
            <li>New unrelated problems that arise in the same appliance.</li>
            <li>Physical damage, water damage, or power surge damage.</li>
            <li>Items repaired by a third party after our service.</li>
          </ul>

          <h2>3. Payment Terms</h2>
          <p>
            Payment is due immediately upon the completion of the service. We accept cash, UPI, and major digital payments. Unpaid invoices may be subject to legal action or the withdrawal of active warranty coverage.
          </p>

          <h2>4. Cancellations and Rescheduling</h2>
          <p>
            If you need to cancel or rescheudle your service appointment, we kindly ask that you provide at least 2 hours' notice. Repeated cancellations or missing a scheduled appointment without notifying the technician may result in refusal of future services.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            SmartCare Services is not liable for indirect, incidental, or consequential damages arising out of the use or inability to use our services or the repaired appliance. Our maximum liability in any circumstance is limited strictly to the amount paid by you for the service rendered.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Significant changes will be communicated via our website. Your continued use of our services following any changes signifies your acceptance of the new terms.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
