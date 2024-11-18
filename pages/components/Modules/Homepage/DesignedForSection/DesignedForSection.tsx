/* eslint-disable @next/next/no-img-element */

import { Container } from "@/pages/layout/Container";

const FeatureCard = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => (
  <div className="bg-white rounded-tr-xl rounded-tl-xl p-6 shadow-sm">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const DesignedForSection = () => {
  const features = [
    {
      title: "Senior citizens",
      description:
        "Ideal for anyone tracking their progress and enhancing their health, our app offers real-time insights and tailored recommendations to help you achieve your goals.",
      imageUrl: "/images/abt-one.png",
    },
    {
      title: "Individuals",
      description:
        "Our app helps you track your wellness journey with instant feedback and personalized suggestions to achieve your health goals.",
      imageUrl: "/images/abt-one.png",
    },
    {
      title: "Health care providers",
      description:
        "Our app helps families strengthen bonds and enhance well-being with real-time insights and personalized suggestions.",
      imageUrl: "/images/abt-one.png",
    },
    {
      title: "Insurance",
      description:
        "Insurance platform helps families secure their future by providing personalized coverage options and real-time support for their health and financial needs.",
      imageUrl: "/images/abt-one.png",
    },
  ];

  return (
    <div className="overflow-hidden lg:mt-12 rounded-3xl relative z-0  b">
      <div className=" bg-green-50 pt-16 lg:pt-28 px-4 sm:px-6 lg:px-8">
        <Container>
          {/* Header Section */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              OUR WELLNESS
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Healthcare App designed for all.
            </h1>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
