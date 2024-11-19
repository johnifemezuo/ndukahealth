import { Container } from "@/components/layout/Container";

export const AboutSection = () => {
  return (
    <div id="About" className="pt-12 px-4 md:px-12 lg:px-0 rounded-3xl border mt-9 lg:mt-12">
      <Container>
          <div className=" lg:pt-16">
              <div className="lg:flex xl:flex-row flex flex-col-reverse space-y-12 lg:space-y-0 xl:space-x-20 2xl:justify-between items-center">
                {/* Left side - Mobile App Preview */}
                <img src="/images/about-img.png"  className="lg:w-[550px] mt-12 lg:mt-0" alt="Nduka about us" />

                {/* Right side - Content */}
                <div className="space-y-6 w-full md:w-[500px]  xl:max-w-[700px]">
                  <div className="space-y-2">
                    <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      About Us
                    </h2>
                    <h1 className="text-4xl font-bold text-gray-900">
                      Maximize Your Productivity with Our App
                    </h1>
                  </div>

                  <p className="text-lg text-gray-600">
                    Discover the power of proactive health management with our
                    innovative platform. We provide you with real-time insights
                    that empower you to make informed decisions about your
                    well-being. Stay ahead of potential health issues and
                    optimize your lifestyle with personalized data at your
                    fingertips.
                  </p>

                  <div className="flex -space-x-4">
                    <img src="/images/abt-two.png" className="w-12 object-contain lg:w-16 lg:h-16 h-12 rounded-full bg-gray-200 border-2 border-white" />
                    <img src="/images/abt-one.png" className="w-12 object-contain lg:w-16 lg:h-16 h-12 rounded-full bg-gray-200 border-2 border-white" />
                    
                  </div>
                </div>
              </div>
            </div>
      </Container>
    </div>
  );
};
