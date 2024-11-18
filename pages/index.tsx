import { Inter } from "next/font/google";
import { HeroSectionContainer } from "../components/components/HeroSectionContainer/HeroSectionContainer";
import { AboutSection } from "../components/components/Modules/Homepage/AboutSection/AboutSection";
import { DailyHealthTracking } from "../components/components/Modules/Homepage/DailyHealthTracking/DailyHealthTracking";
import { DesignedForSection } from "../components/components/Modules/Homepage/DesignedForSection/DesignedForSection";
import { DownloadSection } from "../components/components/Modules/Homepage/DownloadSection/DownloadSection";
import { FamilySection } from "../components/components/Modules/Homepage/FamilySection/FamilySection";
import { HeroSection } from "../components/components/Modules/Homepage/HeroSection/HeroSection";
import { MedicationTracking } from "../components/components/Modules/Homepage/MedicationTracking/MedicationTracking";
import { TestimonialSection } from "../components/components/Modules/Homepage/Testimonials/TestimonialSection";
import { WellnessCheck } from "../components/components/Modules/Homepage/WellnessCheck/WellnessCheck";

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
