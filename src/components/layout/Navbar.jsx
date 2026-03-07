import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Container from "./Container";
import { useLanguage } from "../../i18n";

const NAV_KEYS = [
  { href: "#hero", key: "home" },
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#github", key: "github" },
  { href: "#contact", key: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang, isRtl } = useLanguage();

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Glass navbar */}
      <nav
        className="border-border/50 bg-bg/80 backdrop-blur-xl backdrop-saturate-150"
        style={{ borderBottomWidth: 1 }}
      >
        <Container>
          <div className="flex h-14 items-center justify-between sm:h-16">
            <a
              href="#hero"
              className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Zyad Afifi
            </a>

            <div className="flex items-center gap-4">
              {/* Language switch */}
              <motion.button
                type="button"
                onClick={toggleLang}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
              >
                <Globe size={18} />
                <span>{lang === "en" ? "عربي" : "EN"}</span>
              </motion.button>

              {/* Desktop nav */}
              <ul
                className={`hidden gap-6 md:flex ${isRtl ? "md:gap-6" : ""}`}
              >
                {NAV_KEYS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile menu button */}
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-border/50 overflow-hidden border-t md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-4">
                {NAV_KEYS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-surface"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
