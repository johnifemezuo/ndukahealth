import { ScrollReveal } from "@/components/Animation";
import { Container } from "@/components/layout/Container";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div id="about" className="pt-12 px-4 md:px-12 lg:px-0 rounded-3xl border mt-9 lg:mt-12">
      <Container>
          <div className=" lg:pt-16">
              <div className="lg:flex xl:flex-row flex flex-col-reverse space-y-12 lg:space-y-0 xl:space-x-20 2xl:justify-between items-center">
                {/* Left side - Mobile App Preview */}
                <ScrollReveal>
                  <Image src="/about.svg" width={700} height={700}  className="lg:w-[550px] mt-12 lg:mt-0" alt="Nduka about us" />
                </ScrollReveal>

                {/* Right side - Content */}
                <ScrollReveal>
                  <div className="space-y-6 w-full md:w-[50-0px]  xl:max-w-[700px]">
                    <div className="space-y-2">
                      <h1 className="text-2xl lg:text-4xl font-medium text-gray-700">
                      Take charge of your health with Nduka
                      </h1>
                    </div>

                    <p className="lg:text-lg text-gray-600">
                    Discover the power of proactive health management with our innovative solution. We provide you with real-time insights that empower you to make informed decisions about your well-being. Stay ahead of potential health issues and optimize your lifestyle with personalized data at your fingertips.
                    </p>

                    <div className="flex -space-x-4">
                      <img src="/images/abt-two.png" className="w-12 object-contain lg:w-16 lg:h-16 h-12 rounded-full bg-gray-200 border-2 border-white" />
                      <img src="/images/abt-one.png" className="w-12 object-contain lg:w-16 lg:h-16 h-12 rounded-full bg-gray-200 border-2 border-white" />
                      
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
      </Container>
    </div>
  );
};
