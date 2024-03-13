import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealScroll = ({ children, axix, value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, [axix]: 0 },
        hidden: { opacity: 0, [axix]: [value] },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Adjust the duration and easing function
    >
      {children}
    </motion.div>
  );
};

export default RevealScroll;
