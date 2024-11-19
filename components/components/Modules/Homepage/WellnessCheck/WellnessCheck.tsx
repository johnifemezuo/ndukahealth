/* eslint-disable @next/next/no-img-element */
<<<<<<<< HEAD:components/Modules/Homepage/WellnessCheck/WellnessCheck.tsx

import { ScrollReveal } from "@/components/Animation";
========
>>>>>>>> origin/main:components/components/Modules/Homepage/WellnessCheck/WellnessCheck.tsx

export const WellnessCheck = () => {
  return (
    <div id="features" className="overflow-hidden mt-12 lg:mt-12 rounded-3xl relative z-0 pt-6 lg:pt-12 bg-[#EFF6FC]">
      <div className="w-full lg:w-[1160px] mx-auto  px-4 md:px-20 lg:px-0">
        <div className="w-full lg:flex overflow-hidden justify-between lg:space-x-12  md:pt-20 pt-12 xl:ty-20 ">
        <ScrollReveal>
          <div className="w-full  md:w-[650px] xl:w-[550px] space-y-8 lg:space-y-12  lg:pt-20 ">
            <h1 className="text-3xl lg:text-2xl xl:text-4xl font-medium text-zinc-700">
              Comprehensive Wellness Check
            </h1>

            <p className="text-lg leading-7 lg:text-xl ">
              Perform quick wellness checks to monitor key health metrics,
              giving you a full picture of your daily well-being.
            </p>
          </div>
          </ScrollReveal>

          <div className="mt-12 relative z-50 lg:mt-0  mx-auto ">
          <ScrollReveal>
            <img
              src="/images/wellness.png"
              alt="nduka image"
              className="w-[400px] mx-auto lg:w-auto relative z-50"
            />
          </ScrollReveal>
          </div>
          
          <img
              src="/bulb.svg"
              alt="nduka image"
              className="w-[600px] absolute right-0 bottom-0 z-0 "
            />
             <img
              src="/weight.svg"
              alt="nduka image"
              className="w-[300px] absolute right-0 top-0 z-0 "
            />
        </div>
      </div>
    </div>
  );
};
