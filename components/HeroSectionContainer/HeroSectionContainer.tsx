/* eslint-disable @next/next/no-img-element */
import React from "react";

export const HeroSectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="overflow-hidden rounded-3xl relative z-0 pb-12 h-[120vh] lg:h-screen">
      <div className="bg-white/90 z-50  w-full h-screen absolute inset-0"></div>
      <img
        src="/images/nduka-bg.png"
        alt="nduka background"
        className="w-full absolute inset-0 z-0 h-screen "
      />

      <div className="relative z-50 w-full lg:mt-16">{children}</div>
    </div>
  );
};