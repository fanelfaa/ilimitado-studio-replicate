import { HeroSection } from "./_sections/hero";
import { OurServicesSection } from "./_sections/our-services";
import { ProjectSpotlightSection } from "./_sections/project-spotlight";
import { ReviewSection } from "./_sections/review-section";
import { WhatWeveDoneSection } from "./_sections/what-weve-done";
import { WhoWeAreSection } from "./_sections/who-we-are";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServicesSection />
      <WhoWeAreSection />
      <WhatWeveDoneSection />
      <ProjectSpotlightSection />
      <ReviewSection />
      <div className="h-screen" />
    </main>
  );
}
