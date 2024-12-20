import Reveal from "@/components/Animation/Reveal";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <Container>
      <div className="w-full px-4 lg:px-0 lg:flex  justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 lg:items-center">
        <Reveal delay={0}>
          <div className="w-full text-center lg:text-left lg:w-[650px] xl:w-[750px] space-y-8 lg:space-y-12 pt-20 ">
            <h1 className="text-4xl lg:text-6xl xl:text-6xl leading-10 font-medium text-[#30372F]">
              Take Control of Your Health with Personalized AI Insights
            </h1>

            <p className="lg:text-lg leading-7 max-w-xl text-[#30372F]">
              Keep track of your family health metrics, generate personalized
              reports, and make smarter wellness decisions with our AI-powered
              health app.
            </p>

            <div className="mt-5">
              <a
                href="https://forms.gle/GnPFY8CgRZLneFDd9"
                target="_blank"
                className="lg:flex  space-x-8"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                >
                  <button className="bg-[#0AD23F] px-6 py-4 rounded-md font-medium lg:text-lg">
                    Join the Wait-list
                  </button>
                </motion.div>
                <svg
                  width="125"
                  height="56"
                  viewBox="0 0 125 56"
                  fill="none"
                  className="hidden lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M123 2C117.664 9.59964 111.5 18.1462 100.5 25C87.8197 32.9008 74 37.8096 57.5 40.8214C46.2465 42.8756 38.5 42.4286 23.853 41.1429C23.853 41.1429 2 42.6218 2 40.8214C2 40.4733 5.58124 38.7847 6.084 38.4286C10.0802 35.5979 14.9279 34.2258 18.9809 31.4286C22.7068 28.857 10.8941 35.5342 7.05127 37.9286C4.81411 39.3225 3.06701 39.4174 3.21804 42.4286C3.4901 47.8531 10.7346 50.5648 14.1804 54"
                    stroke="#0AD23F"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 lg:mt-0  mx-auto  relative">
          <Reveal delay={1} duration={1}>
            <img
              src="/images/hero-illustration.png"
              alt="nduka hero"
              className="w-[400px] mx-auto lg:w-auto"
            />
          </Reveal>

          <div className="absolute -bottom-10 scroll-up-arrow">
            <img src="/images/Herosub.png" alt="nduka hero" />
          </div>
        </div>
      </div>
    </Container>
  );
};
