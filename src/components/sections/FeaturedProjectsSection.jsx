import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import Container from "../layout/Container";
import { useLanguage } from "../../i18n";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../layout/SectionHeader";
import GlassPanel from "../ui/GlassPanel";
import { PROJECTS } from "../../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project, t }) {
  return (
    <motion.article
      variants={card}
      className="group"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <GlassPanel
          variant="elevated"
          className="h-full overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_32px_rgba(0,212,255,0.08)]"
        >
          {/* Mockup / Preview area */}
          <div className="relative aspect-video overflow-hidden bg-surface-elevated">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
            />
            {/* Browser chrome mockup */}
            <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/30 bg-surface/80 px-3 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <div className="ml-4 flex flex-1 items-center justify-center">
                <span className="muted-text truncate rounded bg-bg/50 px-3 py-1 text-xs">
                  {new URL(project.href).hostname}
                </span>
              </div>
            </div>
            {/* Subtle grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            {/* Hover glow */}
            <motion.div
              className="absolute inset-0 bg-primary/0"
              whileHover={{ backgroundColor: "rgba(0, 212, 255, 0.05)" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Card content */}
          <div className="p-5 sm:p-6">
            {/* Badges */}
            {project.badgeKey && (
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                  <Smartphone size={12} strokeWidth={2} />
                  {t(`projects.${project.badgeKey}`)}
                </span>
              </div>
            )}

            <h3 className="section-title text-lg text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="body-text text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/50 bg-bg/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live Demo CTA */}
            <motion.span
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-bg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ExternalLink size={18} strokeWidth={2} />
              {t("projects.liveDemo")}
            </motion.span>
          </div>
        </GlassPanel>
      </motion.a>
    </motion.article>
  );
}

export default function FeaturedProjectsSection() {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="projects">
      <Container>
        <SectionHeader
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />
        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} t={t} />
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
