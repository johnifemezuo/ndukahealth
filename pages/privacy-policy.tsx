import { Inter } from "next/font/google";
import { PrivacyPolicy } from "../components/components/Modules/PrivacyPolicy/PrivacyPolicy";
import { Container } from "./layout/Container";

const inter = Inter({ subsets: ["latin"] });

export default function PrivacyPolicyPage() {
  return (
    <>
      <title>Privacy Policy</title>

      <main className="">
        <div className="overflow-hidden rounded-3xl relative z-0 pb-12 h-[300px] lg:h-[420px]">
          <div className="bg-white/90 z-50  w-full h-screen absolute inset-0"></div>
          <img
            src="/images/nduka-bg.png"
            alt="nduka background"
            className="w-full absolute inset-0 z-0 h-screen "
          />

          <div className="w-full px-5 lg:flex relative z-50 justify-between lg:space-x-12 py-12 md:pt-20  xl:py-20 lg:items-center">
            <Container>
              <div className="w-full mt-16 md:w-[650px] xl:w-[750px] space-y-4 lg:space-y-12 pt-20 lg:mt-20 ">
                <h1 className="text-3xl lg:text-4xl xl:text-6xl font-medium text-text-color">
                  Privacy Policy
                </h1>

                <p className="text-sm leading-7 lg:text-base text-zinc-600">
                  UPDATED - 12TH FEB, 2029
                </p>
              </div>
            </Container>
          </div>
        </div>

        <PrivacyPolicy />
      </main>
    </>
  );
}
