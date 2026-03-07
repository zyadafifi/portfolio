import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function useScrollReveal(once = true, margin = "-80px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return { ref, isInView };
}

export function Reveal({ children, className = "", variants = defaultVariants }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
