/* eslint-disable @next/next/no-img-element */

import { ScrollReveal } from "@/components/Animation";
import { Container } from "@/components/layout/Container";
import { PulseAnimate } from "./PulseAnimate";

export const FamilySection = () => {
  return (
    <div className="overflow-hidden lg:h-auto h-[1133px] bg-red-300 lg:mt-12 rounded-3xl relative z-0 pb-12 mt-8 ">
      <div className="bg-[#317046c8] z-50  w-full h-[1400px] lg:h-[1300px] absolute inset-0"></div>
      <img
        src="/images/nduka-bg.png"
        alt="nduka background"
        className="w-full absolute inset-0 z-0 h-[1400px] lg:h-[1200px] "
      />

      <div className="relative z-50 w-full lg:mt-16 px-4 lg:px-0">
        <Container>
          <div className="w-full  lg:flex items-center justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 ">
            <ScrollReveal>
              <div className="w-full  md:w-[650px] xl:w-[700px] space-y-8 lg:space-y-9 pt-12 lg:pt-0 ">
                <h1 className="text-3xl text-white lg:text-6xl xl:text-5xl font-semibold text-text-color">
                  Manage Family Health, Prevent Disease.
                </h1>
                <p className=" leading-7 lg:text-xl  text-white font-light">
                  Empower yourself and your loved ones with personalized
                  wellness checks tailored to your family’s unique health
                  history. Identify predispositions to diseases early, make
                  informed lifestyle choices, and prevent potential health risks
                  for a healthier future.
                </p>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-10">
                  <div className="flex items-center space-x-3">
                    <PulseAnimate />
                    <p className="text-white font-light lg:text-lg">
                      Track Family Health History
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PulseAnimate />
                    <p className="text-white font-light lg:text-lg">
                      Preventative Care Alerts
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PulseAnimate />
                    <p className="text-white font-light lg:text-lg">
                      AI-Powered Insights
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PulseAnimate />
                    <p className="text-white font-light lg:text-lg">
                      Shared Health Management
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PulseAnimate />
                    <p className="text-white font-light lg:text-lg">
                      Early Detection
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-12 lg:mt-0  mx-auto ">
                <img
                  src="/images/familyImage.png"
                  alt="Nduka hero"
                  className="mlg:h-px]"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </div>
    </div>
  );
};
