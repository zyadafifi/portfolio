import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import Container from "../layout/Container";
import { HERO } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

const FLOAT_DELAYS = [0, 0.5, 1, 1.5];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative z-10 flex min-h-screen items-center pt-16 overflow-hidden">
      {/* Abstract shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full border border-primary/20 opacity-30"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[20%] top-[30%] h-40 w-40 rounded-full bg-primary/5 blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-[5%] bottom-[25%] h-48 w-48 rounded-full border border-secondary/20 opacity-25"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div
          className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{ background: "var(--color-primary)" }}
        />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            className="text-primary body-text mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("hero.role")}
          </motion.p>
          <motion.h1
            className="hero-title text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {HERO.name.split(" ").map((word, i) => (
              <span key={word}>
                {i === 1 ? (
                  <span className="text-primary">{word} </span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </motion.h1>
          <motion.p
            className="body-text text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("hero.headline")}
          </motion.p>
          <motion.p
            className="body-text text-muted-foreground mt-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href={HERO.cta.projects.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-primary-dim hover:shadow-[0_0_24px_var(--color-primary-glow)]"
            >
              {t("hero.cta.projects")}
              <ArrowDown size={18} className="rotate-[-90deg]" />
            </a>
            <a
              href={HERO.cta.resume.href}
              download={HERO.cta.resume.download}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {t("hero.cta.resume")}
              <ExternalLink size={16} />
            </a>
            <a
              href={HERO.cta.contact.href}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary/50 hover:text-secondary"
            >
              {t("hero.cta.contact")}
              <Mail size={16} />
            </a>
          </motion.div>

          {/* Floating tech badges */}
          <motion.div
            className="relative mt-20 h-32 sm:h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {HERO.techBadges.map((tech, i) => (
              <motion.div
                key={tech}
                className="absolute rounded-lg border border-border/50 bg-surface/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm"
                style={{
                  left: `${15 + i * 22}%`,
                  top: `${20 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2.5 + i * 0.5,
                  repeat: Infinity,
                  delay: FLOAT_DELAYS[i],
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-muted-foreground hover:text-primary" aria-label="Scroll to about">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
