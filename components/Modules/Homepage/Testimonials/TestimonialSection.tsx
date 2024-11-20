"use client";
import { ScrollReveal } from "@/components/Animation";
import { Container } from "@/components/layout/Container";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Mariclare Eugenia",
      avatar: "/images/abt-one.png",
      rating: 4.5,
      comment:
        "This app has the potential to transform how we approach health. It’s empowering to think of staying ahead of issues before they become problems.",
    },
    {
      id: 2,
      name: "John Smith",
      avatar: "/images/abt-one.png",
      rating: 5,
      comment:
        "The idea of personalized AI health insights feels like the future of healthcare—practical, accessible, and tailored to me.",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: "/images/abt-one.png",
      rating: 4.8,
      comment:
        "Finally, a solution that helps families manage health together. This could be a game-changer for preventive care.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId: any;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, index) => {
      const filled = index < Math.floor(rating);
      const halfFilled =
        !filled && index === Math.floor(rating) && rating % 1 !== 0;

      return (
        <Star
          key={index}
          size={16}
          className={`${
            filled
              ? "text-yellow-400 fill-yellow-400"
              : halfFilled
              ? "text-yellow-400 fill-yellow-400 half-star"
              : "text-yellow-400"
          }`}
        />
      );
    });
  };

  return (
    <div
      id="testimonials"
      className="overflow-hidden mt-9 h-[700px] md:h-[660px] lg:mt-8 rounded-3xl relative "
    >
      <img
        src="/images/bg-img.png"
        alt="nduka background"
        className="w-full absolute inset-0 z-0 h-screen "
      />

      <div className="bg-[#317046ef] h-screen rounded-3xl p-4 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full border border-emerald-700/30 -top-[200px] -right-[200px]" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-emerald-700/30 -top-[150px] -right-[150px]" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-emerald-700/30 -top-[100px] -right-[100px]" />
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 lg:mt-12 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side */}
              <ScrollReveal>
              <div className="text-white space-y-9 lg:space-y-12">
                <h2 className="text-3xl md:text-5xl font-medium mb-4">
                Why Nduka Health Matters
                </h2>
                <p className="text-white lg:text-lg max-w-xl">
                  What potential users are saying about Nduka.
                </p>
              </div>
              </ScrollReveal>

              {/* Right side - Testimonial */}
              <ScrollReveal>
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg h-[360px] overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 lg:text-xl">
                        {testimonials[currentIndex].name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {renderStars(testimonials[currentIndex].rating)}
                        <span className="ml-2 text-gray-600">
                          {testimonials[currentIndex].rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xl leading-relaxed lg:text-2xl py-6 border-t">
                    {testimonials[currentIndex].comment}
                  </p>
                  <div className="absolute bottom-12 right-8 text-5xl text-emerald-100 rotate-12">
                    <img
                      src="/Quote.svg"
                      alt=""
                      className="w-20 md:w-28 md:h-28"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {/* Navigation buttons */}
                  <div className="flex gap-2 mt-4 items-center ">
                    <button
                      onClick={prevSlide}
                      className="p-2 border-white rounded-lg transition-all bg-white/30 text-white "
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 border-white rounded-lg transition-all bg-white/30 text-white  "
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Progress dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-white w-4"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
