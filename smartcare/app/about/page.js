import AboutHero         from "@/components/sections/about-hero";
import AboutStats        from "@/components/sections/about-stats";
import AboutValues       from "@/components/sections/about-values";
import AboutMissionVision from "@/components/sections/about-mission-vision";
import AboutCTA          from "@/components/sections/about-cta";
import Footer from "@/components/site/footer";

export const metadata = {
  title: "About Us | SmartCare Services",
  description:
    "Meet Mukesh Kumar — founder of SmartCare Services. 8+ years of expert AC & refrigerator repair in Jhumri Telaiya, Jharkhand.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutMissionVision />
      <AboutCTA />
      <Footer />
    </div>
  );
}
