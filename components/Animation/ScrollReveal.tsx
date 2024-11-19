"use client";

import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export const ScrollReveal = ({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const easeInVariant = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const refOne = useRef(null);

  const isInView = useInView(refOne, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={refOne}
      variants={easeInVariant}
      initial="hidden"
      animate={mainControls}
      className={className}
      transition={{ duration: 0.8, delay: delay || 0.3 }}
    >
      {children}
    </motion.div>
  );
};
