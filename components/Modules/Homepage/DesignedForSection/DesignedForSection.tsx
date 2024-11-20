/* eslint-disable @next/next/no-img-element */
import { ScrollReveal } from "@/components/Animation";
import { Container } from "@/components/layout/Container";

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
      title: "Individuals",
      description:
        "We empower you with tools to monitor your health and prevent chronic diseases before they take hold. Our AI-driven insights offer personalized recommendations to help you stay ahead and take control of your well-being.",
      imageUrl: "/images/img2.png",
    },
    {
      title: "Healthcare providers",
      description:
        "We provide healthcare providers with AI-driven tools for remote patient monitoring, early risk detection, and personalized care planning. By offering real-time health insights and consolidating patient data, providers can improve outcomes, reduce costs, and foster stronger patient engagement.",
      imageUrl: "/images/img3.png",
    },
    {
      title: "Insurance Companies",
      description:
        "We help insurance companies to promote healthier behaviors by offering AI-driven health insights and proactive risk management tools to their customers. By reducing the likelihood of chronic disease claims through early detection and lifestyle recommendations, insurers can lower costs and improve customer satisfaction.",
      imageUrl: "/images/img4.png",
    },
    {
      title: "Corporate Wellness Programs & Employers",
      description:
        "Support your team’s well-being with our AI-powered health tracking and wellness insights. By promoting healthier lifestyles, we help you reduce absenteeism, increase productivity, and create a happier, more engaged workforce.",
      imageUrl: "/images/corporate-office.webp",
    },
  ];

  return (
    <div className="overflow-hidden lg:mt-12 rounded-3xl relative z-0  mt-8">
      <div className=" bg-green-50 pt-16 lg:pt-28 px-4 sm:px-6 lg:px-8">
        <Container>
          {/* Header Section */}
          <ScrollReveal>
            <div className="max-w-3xl mb-16 space-y-7">
              <h1 className="text-3xl md:text-5xl font-medium text-gray-700 mb-6">
                Healthcare App designed for all.
              </h1>
            </div>
          </ScrollReveal>

          {/* Features Grid */}
          <ScrollReveal>
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
          </ScrollReveal>
        </Container>
      </div>
    </div>
  );
};
