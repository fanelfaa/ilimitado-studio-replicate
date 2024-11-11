import { HeroSection } from "./_sections/hero";
import { OurServicesSection } from "./_sections/our-services";
import { WhatWeveDoneSection } from "./_sections/what-weve-done";
import { WhoWeAreSection } from "./_sections/who-we-are";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServicesSection />
      <WhoWeAreSection />
      <WhatWeveDoneSection />
      <div className="h-screen" />
    </main>
  );
}
