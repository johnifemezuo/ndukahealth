import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full lg:w-[1300px] mx-auto   md:px-0 ${className}`}>
      {children}
    </div>
  );
};
