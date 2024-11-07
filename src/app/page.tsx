import { HeroSection } from "./_sections/hero";
import { OurServicesSection } from "./_sections/our-services";
import { WhoWeAreSection } from "./_sections/who-we-are";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServicesSection />
      <WhoWeAreSection />
      <div className="h-screen" />
    </main>
  );
}
