import { Container } from "@/pages/layout/Container";

export const HeroSection = () => {
  return (
    <Container>
      <div className="w-full  lg:flex overflow-hidden justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 lg:items-center">
        <div className="w-full  md:w-[650px] xl:w-[750px] space-y-8 lg:space-y-12 pt-20 ">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-medium text-text-color">
            Take Control of Your Health with Real-Time Insights
          </h1>

          <p className="text-lg leading-7 lg:text-xl ">
            Keep track of your family health metrics, generate personalized
            reports, and make smarter wellness decisions with our AI-powered
            health app.
          </p>

          <button className="bg-[#0AD23F] px-6 py-4 rounded-md font-medium lg:text-lg">Join the Waitlist</button>
        </div>

        <div className="mt-12 lg:mt-0  mx-auto ">
          <img src="/images/hero-illustration.png" alt="nduka hero" className="w-[400px] mx-auto lg:w-auto" />
        </div>
      </div>
    </Container>
  );
};
