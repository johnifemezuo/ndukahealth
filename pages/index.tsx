import { Poppins } from "next/font/google";
import { HeroSectionContainer } from "../components/HeroSectionContainer/HeroSectionContainer";
import { AboutSection } from "../components/Modules/Homepage/AboutSection/AboutSection";
import { DailyHealthTracking } from "../components/Modules/Homepage/DailyHealthTracking/DailyHealthTracking";
import { DesignedForSection } from "../components/Modules/Homepage/DesignedForSection/DesignedForSection";
import { DownloadSection } from "../components/Modules/Homepage/DownloadSection/DownloadSection";
import { FamilySection } from "../components/Modules/Homepage/FamilySection/FamilySection";
import { HeroSection } from "../components/Modules/Homepage/HeroSection/HeroSection";
import { MedicationTracking } from "../components/Modules/Homepage/MedicationTracking/MedicationTracking";
import { TestimonialSection } from "../components/Modules/Homepage/Testimonials/TestimonialSection";
import { WellnessCheck } from "../components/Modules/Homepage/WellnessCheck/WellnessCheck";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});


export default function Home() {
  return (
    <>
      <title>Nduka : Take Control of Your Health with Real-Time Insights</title>

      <main className={poppins.className}>
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
