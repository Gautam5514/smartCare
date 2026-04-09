import Footer from "@/components/site/footer";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Disclaimer | SmartCare Services",
  description: "Disclaimer for SmartCare Services.",
};

export default function DisclaimerPage() {
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
            <span className="text-primary">Disclaimer</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground">Last Updated: April 2024</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-8 py-16 lg:py-24 w-full">
        <div className="text-base leading-relaxed text-muted-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-5 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:mb-2">

          <p>
            The information contained on the SmartCare Services website (the "Service") is for general information purposes only. SmartCare Services assumes no responsibility for errors or omissions in the contents on the Service.
          </p>

          <h2>1. Professional Advice Disclaimer</h2>
          <p>
            The appliance repair and maintenance information provided on our blogs and website is for general educational purposes only. It is not a substitute for professional diagnostic and repair services. Always consult with a certified technician (like us) before attempting any DIY repairs. We are not liable for any personal injury, electrocution, or property damage resulting from attempting repairs discussed on our website.
          </p>

          <h2>2. External Links Disclaimer</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with SmartCare Services. Please note that the SmartCare Services does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2>3. "As Is" and "As Available" Disclaimer</h2>
          <p>
            The Service is provided to you "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, SmartCare Services expressly disclaims all warranties, whether express, implied, statutory or otherwise.
          </p>

          <h2>4. Third-Party Trademarks</h2>
          <p>
            Any brand names, logos, and trademarks of major appliance manufacturers (such as Samsung, LG, Voltas, Daikin, Whirlpool, etc.) mentioned on our website remain the property of their respective owners. SmartCare Services is an independent service provider and is not always officially affiliated with, endorsed by, or sponsored by these trademark holders unless explicitly stated.
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}
