import { HeroSection } from "./_sections/hero";
import { OurServicesSection } from "./_sections/our-services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServicesSection />
      <div className="h-screen" />
    </main>
  );
}
