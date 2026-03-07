import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../layout/SectionHeader";
import GlassPanel from "../ui/GlassPanel";
import { EXPERIENCE } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />
        <div className="relative max-w-3xl">
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-6"
            aria-hidden
          />

          <div className="space-y-8">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                className="relative pl-12 sm:pl-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-bg sm:left-6" />

                <div className="mb-3">
                  <p className="text-primary muted-text font-medium">
                    {job.period}
                  </p>
                  <p className="body-text text-muted-foreground">{job.location}</p>
                </div>

                <div>
                  <GlassPanel variant="elevated" className="p-6 transition-all hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Briefcase
                          className="text-primary"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="section-title text-lg text-foreground">
                          {job.role} — {job.company}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {job.period}
                          </span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {job.responsibilities.map((resp, j) => (
                            <li
                              key={j}
                              className="body-text text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassPanel>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
