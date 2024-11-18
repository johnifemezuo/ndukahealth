import { Inter } from "next/font/google";
import { HeroSectionContainer } from "./components/HeroSectionContainer/HeroSectionContainer";
import { AboutSection } from "./components/Modules/Homepage/AboutSection/AboutSection";
import { DailyHealthTracking } from "./components/Modules/Homepage/DailyHealthTracking/DailyHealthTracking";
import { DesignedForSection } from "./components/Modules/Homepage/DesignedForSection/DesignedForSection";
import { FamilySection } from "./components/Modules/Homepage/FamilySection/FamilySection";
import { HeroSection } from "./components/Modules/Homepage/HeroSection/HeroSection";
import { MedicationTracking } from "./components/Modules/Homepage/MedicationTracking/MedicationTracking";
import { WellnessCheck } from "./components/Modules/Homepage/WellnessCheck/WellnessCheck";
import { DownloadSection } from "./components/Modules/Homepage/DownloadSection/DownloadSection";
import { TestimonialSection } from "./components/Modules/Homepage/Testimonials/TestimonialSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <title>Nduka : Take Control of Your Health with Real-Time Insights</title>

      <main className="">
        <HeroSectionContainer>
          <HeroSection />
        </HeroSectionContainer>

        <AboutSection />

        <FamilySection />

        <DesignedForSection />

        <WellnessCheck />

        <MedicationTracking />

        <DailyHealthTracking />

        <DownloadSection />

        <TestimonialSection />
      </main>
    </>
  );
}
