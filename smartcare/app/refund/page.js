import Footer from "@/components/site/footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Refund Policy | SmartCare Services",
  description: "Refund Policy for SmartCare Services.",
};

export default function RefundPolicyPage() {
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
            Refund <span className="text-primary">Policy</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground">Last Updated: April 2024</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16 lg:py-24 w-full">
        <div className="text-base leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-5 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:mb-2">

          <p>
            At SmartCare Services, we strive to ensure 100% satisfaction with every repair and installation job we undertake. However, if you are not entirely satisfied with our service, we're here to help.
          </p>

          <h2>1. Service Refunds</h2>
          <p>
            Due to the nature of labor-based repair services, we generally do not offer full refunds once a service has been completed and the appliance is functioning. However, we stand by our work with a strict 6-month repair warranty.
          </p>
          <p>
            If the exact same issue occurs within 6 months of the original repair, our technicians will return to fix the issue at absolutely no additional labor cost to you. If we determine that the appliance cannot be repaired despite our attempts, we may issue a partial or full refund of the labor costs on a case-by-case basis.
          </p>

          <h2>2. Spare Parts Refunds</h2>
          <p>
            We use genuine OEM or trusted aftermarket parts for all repairs. Once a part has been installed in your appliance, it cannot be refunded.
          </p>
          <p>
            If a part we installed fails within its specified manufacturer warranty period (usually 3 to 6 months), we will replace the defective part at no cost to you.
          </p>

          <h2>3. Visit Charges</h2>
          <p>
            We charge a nominal inspection/visit fee when our technician arrives to diagnose the issue. This fee is strictly non-refundable as it covers the technician's time, travel, and diagnosis effort. However, if you choose to proceed with the repair with us, this inspection fee is completely waived and adjusted into your final repair bill.
          </p>

          <h2>4. Requesting a Refund or Warranty Claim</h2>
          <p>
            To initiate a warranty claim or discuss a refund request, please contact our support team immediately at our registered phone number or via WhatsApp. You will need to provide your original digital invoice or booking reference number.
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}
