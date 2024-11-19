/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/Animation";
import { Container } from "@/components/layout/Container";

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
        <div className="w-full lg:w-[1100px] mx-auto relative z-50 overflow-hidden justify-between lg:space-x-12 px-4 lg:px-0 py-12 md:pt-20  xl:py-20 lg:items-center">
          <ScrollReveal>
            <div className="w-full text-center  space-y-8 lg:space-y-12 pt-20 ">
              <h1 className="text-3xl lg:text-6xl xl:text-6xl leading-10 font-medium text-zinc-800">
              Why Nduka Health Matters
              </h1>

              <p className="text-lg leading-7 lg:text-xl ">
                Coming soon on Google Play Store and App Store.
              </p>

              <div className="mx-auto max-w-sm ">
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
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};
