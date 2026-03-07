import { motion } from "framer-motion";

/**
 * Reusable section header with title and optional subtitle.
 */
export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "left"
        ? "text-left"
        : "text-right";

  return (
    <motion.header
      className={`mb-8 sm:mb-10 md:mb-12 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title text-foreground">{title}</h2>
      {subtitle && <p className="section-subtitle mt-2 sm:mt-3">{subtitle}</p>}
    </motion.header>
  );
}
