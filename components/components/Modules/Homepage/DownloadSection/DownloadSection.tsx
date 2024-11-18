/* eslint-disable @next/next/no-img-element */
import { Container } from "@/pages/layout/Container";

export const DownloadSection = () => {
  return (
    <div className="overflow-hidden mt-12 lg:mt-12 rounded-3xl relative z-0 pb-12 h-auto ">
      <div className="bg-white/90 z-50  w-full h-screen absolute inset-0"></div>
      <img
        src="/images/nduka-bg.png"
        alt="nduka background"
        className="w-full absolute inset-0 z-0 h-screen "
      />

      <Container>
        <div className="w-full lg:w-[1100px] mx-auto relative z-50 overflow-hidden justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 lg:items-center">
          <div className="w-full text-center  space-y-8 lg:space-y-12 pt-20 ">
            <h1 className="text-3xl lg:text-6xl xl:text-6xl leading-10 font-medium text-text-color">
            Download our App Now to see all our Features and health insight.
            </h1>

            <p className="text-lg leading-7 lg:text-xl ">
            Get the best Features on Google Play Store and App Store
            </p>

            <button className="bg-[#0AD23F] px-6 py-4 rounded-md font-medium lg:text-lg">
              Join the Waitlist
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
