/* eslint-disable @next/next/no-img-element */

import { ScrollReveal } from "@/components/Animation";
import { Container } from "@/components/layout/Container";

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
          <div className="w-full  lg:flex overflow-hidden justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 ">
          <ScrollReveal>
            <div className="w-full  md:w-[650px] xl:w-[750px] space-y-8 lg:space-y-10 pt-20 ">
              <p className="text-sm uppercase leading-7 lg:text-base -tracking-tighter text-white">
                Family desease history
              </p>
              <h1 className="text-3xl leading-9 text-white lg:text-6xl xl:text-5xl font-semibold text-text-color">
                Manage Family Health, Prevent Disease
              </h1>
              <p className="text-lg leading-7 lg:text-xl  text-white">
                Keeping track of family health can be challenging, especially
                with hereditary or chronic conditions. Our app is designed to
                simplify this process, helping families manage and prevent
                diseases effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                <div className="flex items-center space-x-3">
                  <img src="trackIcon.svg" alt="" />
                  <p className="text-white lg:text-xl">Track Family Health History</p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="trackIcon.svg" alt="" />
                  <p className="text-white lg:text-xl">Track Family Health History</p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="trackIcon.svg" alt="" />
                  <p className="text-white lg:text-xl">Track Family Health History</p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="trackIcon.svg" alt="" />
                  <p className="text-white lg:text-xl">Track Family Health History</p>
                </div>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal>
            <div className="mt-12 lg:mt-0  mx-auto ">
              <img
                src="/images/familyImage.png"
                alt="Nduka hero"
                className="w-[600px] lg:h-[600px]"
              />
            </div>
            </ScrollReveal>

          </div>
        </Container>
      </div>
    </div>
  );
};
