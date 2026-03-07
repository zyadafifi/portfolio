import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Container from "../layout/Container";
import { FOOTER } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-border/50 bg-surface/30 py-8 backdrop-blur-sm">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="body-text font-semibold text-foreground">
              {FOOTER.name}
            </p>
            <p className="muted-text">{t("footer.tagline")}</p>
          </div>
          <p className="muted-text text-sm">
            © {FOOTER.year} — {t("footer.builtWith")}
          </p>
          <motion.a
            href="#hero"
            className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
            aria-label="Back to top"
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={18} />
            {t("footer.backToTop")}
          </motion.a>
        </div>
      </Container>
    </footer>
  );
}
