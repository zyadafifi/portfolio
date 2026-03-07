import { motion } from "framer-motion";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../layout/SectionHeader";
import GlassPanel from "../ui/GlassPanel";
import { SKILLS } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="skills">
      <Container>
        <SectionHeader
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILLS.map((group) => (
            <motion.div key={group.groupKey} variants={item}>
              <GlassPanel variant="elevated" className="h-full p-5 transition-all hover:border-primary/20">
                <h3 className="section-subtitle mb-4 font-semibold text-foreground">
                  {t(`skills.groups.${group.groupKey}`)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <span className="rounded-md border border-border/50 bg-bg/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
