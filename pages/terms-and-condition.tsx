import Reveal from "@/components/Animation/Reveal";
import { Container } from "@/components/layout/Container";
import { TermsAndCondition } from "@/components/Modules/TermsAndCondition/TermsAndCondition";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function TermsAndConditionPage() {
  return (
    <>
      <title>Terms and condition</title>

      <main className={poppins.className}>
        <div className="overflow-hidden rounded-3xl relative z-0 pb-12 h-[300px] lg:h-[420px]">
          <div className="bg-white/90 z-50  w-full h-screen absolute inset-0"></div>
          <img
            src="/images/nduka-bg.png"
            alt="nduka background"
            className="w-full absolute inset-0 z-0 h-screen "
          />

          <div className="w-full px-5 lg:flex relative z-50 justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 lg:items-center">
            <Container>
              <Reveal>
                <div className="w-full mt-16 md:w-[650px] xl:w-[750px] space-y-4 lg:space-y-12 pt-20 lg:mt-20 ">
                  <h1 className="text-3xl lg:text-4xl xl:text-6xl font-medium text-text-color">
                    Terms And Condition
                  </h1>

                  <p className="text-sm leading-7 lg:text-base text-zinc-600">
                    UPDATED - 12TH FEB, 2029
                  </p>
                </div>
              </Reveal>
            </Container>
          </div>
        </div>

        <TermsAndCondition />
      </main>
    </>
  );
}
