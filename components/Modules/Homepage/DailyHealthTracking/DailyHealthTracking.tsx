/* eslint-disable @next/next/no-img-element */

import { ScrollReveal } from "@/components/Animation";

export const DailyHealthTracking = () => {
  return (
    <div className="overflow-hidden mt-12 rounded-3xl relative z-0 pt-12 bg-[#EFF6FC]">
      <div className="w-full lg:w-[1160px] mx-auto px-4 md:px-20 lg:px-0">
        <div className="w-full lg:flex overflow-hidden justify-between lg:space-x-12  md:pt-20 xl:ty-20 ">
          <ScrollReveal>
            <div className="w-full relative z-20 md:w-[650px] xl:w-[550px] space-y-8 lg:space-y-12 pt-12 lg:pt-20 ">
              <h1 className="text-3xl lg:text-2xl xl:text-4xl font-semibold text-text-color">
                Daily Health Tracking{" "}
              </h1>

              <p className="text-lg leading-7 lg:text-xl ">
                Monitor vital metrics like heart rate, blood pressure, glucose
                levels, and more to stay in control of your health every day{" "}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative z-50 mt-12 lg:mt-0  mx-auto ">
            <ScrollReveal>
              <img
                src="/images/dailyhealth.png"
                alt="nduka image"
                className="w-[400px] mx-auto lg:w-auto relative z-50"
              />
            </ScrollReveal>
          </div>

            <img
              src="/bulb3.svg"
              alt="nduka image"
              className="w-[600px] absolute right-0 bottom-0 z-0 "
            />
            
          <img
            src="/heart.svg"
            alt="nduka image"
            className="w-[300px] absolute right-0 top-0 z-0 "
          />
        </div>
      </div>
    </div>
  );
};
