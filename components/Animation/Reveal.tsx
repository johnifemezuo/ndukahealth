import { motion } from "framer-motion";
import React, { ReactNode } from "react";

function Reveal({ children, delay, duration }: { children: ReactNode; delay?: number, duration?: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: duration || 0.8,
        delay: delay || 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
