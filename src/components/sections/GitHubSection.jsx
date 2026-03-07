import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import GlassPanel from "../ui/GlassPanel";
import { GITHUB } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

const USERNAME = GITHUB.username;

const STATS_PARAMS =
  "username=zyadafifi&show_icons=true&theme=radical&hide_border=true&bg_color=00000000";
const TOP_LANGS_PARAMS =
  "username=zyadafifi&layout=compact&theme=radical&hide_border=true&bg_color=00000000";
const GRAPH_PARAMS =
  "username=zyadafifi&theme=react-dark&hide_border=true&bg_color=00000000&color=58A6FF&line=7C3AED&point=22D3EE";

// Multiple API hosts - try alternatives when one returns 503
const STATS_HOSTS = [
  "https://readme-stats-github.pages.dev",
  "https://github-readme-stats.vercel.app",
];
const GRAPH_HOSTS = [
  "https://github-readme-activity-graph.vercel.app",
  "https://github-readme-activity-graph.cyclic.app",
];

function buildStatsUrl(host) {
  return `${host}/api?${STATS_PARAMS}`;
}
function buildTopLangsUrl(host) {
  return `${host}/api/top-langs/?${TOP_LANGS_PARAMS}`;
}
function buildGraphUrl(host) {
  return `${host}/graph?${GRAPH_PARAMS}`;
}

function GitHubImage({
  urls,
  alt,
  className = "",
  fallbackClassName = "",
  fallbackLabel,
  retryLabel,
}) {
  const [urlIndex, setUrlIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const currentUrl = urls[urlIndex];
  const srcWithCacheBust = retryKey > 0 ? `${currentUrl}&_=${retryKey}` : currentUrl;

  const handleError = () => {
    if (urlIndex < urls.length - 1) {
      setUrlIndex((i) => i + 1);
    } else {
      setHasError(true);
    }
  };

  const handleRetry = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setUrlIndex(0);
    setHasError(false);
    setRetryKey((k) => k + 1);
  };

  if (hasError) {
    return (
      <div
        className={`flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-lg bg-surface/50 px-4 ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <Github className="text-muted-foreground" size={32} strokeWidth={1.5} />
        <span className="muted-text text-center text-sm">{fallbackLabel}</span>
        <button
          type="button"
          onClick={handleRetry}
          className="text-primary hover:text-primary-dim text-xs font-medium transition-colors"
        >
          {retryLabel}
        </button>
      </div>
    );
  }

  return (
    <img
      key={`${currentUrl}-${retryKey}`}
      src={srcWithCacheBust}
      alt={alt}
      loading="lazy"
      className={className}
      onError={handleError}
    />
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function GitHubSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="github">
      <Container>
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {/* Section header */}
          <motion.header variants={cardVariants} custom={0} className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="section-title text-foreground">{t("github.title")}</h2>
              <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                {t("github.badge")}
              </span>
            </div>
            <p className="body-text text-muted-foreground max-w-2xl">
              {t("github.intro")}
            </p>
          </motion.header>

          {/* Top row: Stats + Top Languages */}
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.a
              href={GITHUB.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              custom={1}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <GlassPanel
                variant="elevated"
                className="group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_32px_rgba(0,212,255,0.08)]"
              >
                <div className="p-5">
                  <h3 className="muted-text mb-4 text-sm font-semibold uppercase tracking-wider">
                    {t("github.stats")}
                  </h3>
                  <div className="overflow-hidden rounded-xl">
                    <GitHubImage
                      urls={STATS_HOSTS.map(buildStatsUrl)}
                      alt="GitHub statistics including stars, commits, and contributions"
                      className="h-[165px] w-full object-contain opacity-95 transition-opacity group-hover:opacity-100"
                      fallbackClassName="h-[165px]"
                      fallbackLabel={t("github.unavailable")}
                      retryLabel={t("github.retry")}
                    />
                  </div>
                </div>
              </GlassPanel>
            </motion.a>

            <motion.a
              href={`${GITHUB.profileUrl}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              custom={2}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <GlassPanel
                variant="elevated"
                className="group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_32px_rgba(0,212,255,0.08)]"
              >
                <div className="p-5">
                  <h3 className="muted-text mb-4 text-sm font-semibold uppercase tracking-wider">
                    {t("github.topLanguages")}
                  </h3>
                  <div className="overflow-hidden rounded-xl">
                    <GitHubImage
                      urls={STATS_HOSTS.map(buildTopLangsUrl)}
                      alt="Top programming languages used in repositories"
                      className="h-[165px] w-full object-contain opacity-95 transition-opacity group-hover:opacity-100"
                      fallbackClassName="h-[165px]"
                      fallbackLabel={t("github.unavailable")}
                      retryLabel={t("github.retry")}
                    />
                  </div>
                </div>
              </GlassPanel>
            </motion.a>
          </div>

          {/* Second row: Full-width Contribution Graph */}
          <motion.a
            href={GITHUB.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            custom={3}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <GlassPanel
              variant="elevated"
              className="group overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(0,212,255,0.06)]"
            >
              <div className="p-5 sm:p-6">
                <h3 className="muted-text mb-4 text-sm font-semibold uppercase tracking-wider">
                  {t("github.contributionActivity")}
                </h3>
                <div className="overflow-hidden rounded-xl bg-surface/30">
                  <GitHubImage
                    urls={GRAPH_HOSTS.map(buildGraphUrl)}
                    alt="GitHub contribution activity graph"
                    className="h-[200px] w-full object-contain object-center sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[360px]"
                    fallbackClassName="h-[200px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[360px]"
                    fallbackLabel={t("github.unavailable")}
                    retryLabel={t("github.retry")}
                  />
                </div>
              </div>
            </GlassPanel>
          </motion.a>

          {/* Footer: GitHub profile CTA */}
          <motion.div
            variants={cardVariants}
            custom={4}
            className="flex justify-center pt-2"
          >
            <motion.a
              href={GITHUB.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/20 hover:shadow-[0_0_24px_rgba(0,212,255,0.15)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={20} strokeWidth={2} />
              {t("github.cta")}
              <ExternalLink size={16} strokeWidth={2} />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
