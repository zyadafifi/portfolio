import { motion } from "framer-motion";

/**
 * Wraps page sections with consistent padding and reveal animation.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
}) {
  return (
    <motion.section
      id={id}
      className={`relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
