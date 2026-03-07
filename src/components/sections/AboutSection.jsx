import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Zap } from "lucide-react";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../layout/SectionHeader";
import GlassPanel from "../ui/GlassPanel";
import { ABOUT } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

const ICONS = [Sparkles, Layers, Cpu, Zap];
const HIGHLIGHT_KEYS = ["frontend", "modern", "ui", "performance"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <Container>
        <SectionHeader
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />
        <motion.div
          className="grid gap-8 lg:grid-cols-2 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={item} className="lg:pt-4">
            <p className="body-text text-muted-foreground max-w-xl leading-relaxed">
              {t("about.summary")}
            </p>
          </motion.div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={container}
          >
            {ABOUT.highlights.map((card, i) => {
              const Icon = ICONS[i];
              const key = HIGHLIGHT_KEYS[i];
              return (
                <motion.div key={card.title} variants={item}>
                  <GlassPanel variant="elevated" className="h-full p-5 transition-all hover:border-primary/20">
                    <Icon
                      className="text-primary mb-3"
                      size={28}
                      strokeWidth={1.5}
                    />
                    <h3 className="body-text font-semibold text-foreground">
                      {t(`about.highlights.${key}.title`)}
                    </h3>
                    <p className="muted-text mt-1">{t(`about.highlights.${key}.desc`)}</p>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
