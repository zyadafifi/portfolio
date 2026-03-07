/**
 * Contact Section — EmailJS Integration
 *
 * Required environment variables (create .env in project root):
 *   VITE_EMAILJS_SERVICE_ID   — Your EmailJS service ID (from Email Services)
 *   VITE_EMAILJS_TEMPLATE_ID — Your EmailJS template ID (from Email Templates)
 *   VITE_EMAILJS_PUBLIC_KEY  — Your EmailJS public key (from Account > API Keys)
 *
 * Template variables sent (use any of these in your EmailJS template):
 *   {{from_name}} / {{user_name}} / {{name}}
 *   {{from_email}} / {{user_email}} / {{email}} / {{reply_to}}
 *   {{subject}} / {{title}}
 *   {{message}}
 *
 * Install: npm install @emailjs/browser
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeader from "../layout/SectionHeader";
import GlassPanel from "../ui/GlassPanel";
import { CONTACT } from "../../data/portfolio";
import { useLanguage } from "../../i18n";

const ICONS = { github: Github, linkedin: Linkedin };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};
  const trimmed = {
    name: (values.name || "").trim(),
    email: (values.email || "").trim(),
    subject: (values.subject || "").trim(),
    message: (values.message || "").trim(),
  };

  if (!trimmed.name) errors.name = true;
  if (!trimmed.email) errors.email = "required";
  else if (!EMAIL_REGEX.test(trimmed.email)) errors.email = "invalid";
  if (!trimmed.subject) errors.subject = true;
  if (!trimmed.message) errors.message = true;

  return { errors, trimmed };
}

export default function ContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  const isEmailJsConfigured = serviceId && templateId && publicKey;

  useEffect(() => {
    if (isEmailJsConfigured) emailjs.init(publicKey);
  }, [isEmailJsConfigured, publicKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors: newErrors, trimmed } = validateForm(formState);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (!isEmailJsConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const templateParams = {
        from_name: trimmed.name,
        user_name: trimmed.name,
        name: trimmed.name,
        from_email: trimmed.email,
        user_email: trimmed.email,
        email: trimmed.email,
        reply_to: trimmed.email,
        subject: trimmed.subject,
        title: trimmed.subject,
        message: trimmed.message,
      };
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setStatus("sent");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      if (import.meta.env.DEV) console.error("EmailJS error:", err?.text ?? err);
    }
  };

  const getFieldError = (field) => {
    if (!errors[field]) return null;
    if (field === "email" && errors.email === "invalid") return t("contact.form.validation.emailInvalid");
    return t(`contact.form.validation.${field}Required`);
  };

  const inputBaseClass =
    "w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-1 disabled:opacity-70";
  const inputValidClass = "border border-border bg-bg/50 focus:border-primary/50 focus:ring-primary/30";
  const inputErrorClass = "border border-red-500/60 bg-red-500/5 focus:border-red-500/50 focus:ring-red-500/20";

  return (
    <SectionWrapper id="contact">
      <Container>
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {!isEmailJsConfigured && (
            <motion.div
              className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="body-text text-amber-200/90">
                Contact form requires EmailJS configuration. Add VITE_EMAILJS_* env variables.
              </p>
            </motion.div>
          )}

          <motion.div
            className="mb-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="body-text text-foreground">{t("contact.cta")}</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassPanel variant="elevated" className="p-6">
                <h3 className="section-title mb-4 text-lg">{t("contact.info")}</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-muted-foreground hover:text-primary flex items-center gap-3 transition-colors"
                  >
                    <Mail size={20} strokeWidth={1.5} />
                    <span className="text-sm">{CONTACT.email}</span>
                  </a>
                  <p className="text-muted-foreground flex items-center gap-3 text-sm">
                    <MapPin size={20} strokeWidth={1.5} />
                    {CONTACT.location}
                  </p>
                  <div className="flex gap-3 pt-2">
                    {CONTACT.links.map((link) => {
                      const Icon = ICONS[link.icon];
                      return (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 transition-colors hover:border-primary/30"
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon size={20} strokeWidth={1.5} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassPanel variant="elevated" className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="muted-text mb-1.5 block text-sm font-medium">
                        {t("contact.form.name")}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        disabled={status === "sending"}
                        className={`${inputBaseClass} ${errors.name ? inputErrorClass : inputValidClass}`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-400">
                          {t("contact.form.validation.nameRequired")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="muted-text mb-1.5 block text-sm font-medium">
                        {t("contact.form.email")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        disabled={status === "sending"}
                        className={`${inputBaseClass} ${errors.email ? inputErrorClass : inputValidClass}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-400">
                          {getFieldError("email")}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="muted-text mb-1.5 block text-sm font-medium">
                      {t("contact.form.subject")}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formState.subject}
                      onChange={handleChange}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      disabled={status === "sending"}
                      className={`${inputBaseClass} ${errors.subject ? inputErrorClass : inputValidClass}`}
                      placeholder="Opportunity / Collaboration"
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                        {t("contact.form.validation.subjectRequired")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="muted-text mb-1.5 block text-sm font-medium">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      disabled={status === "sending"}
                      className={`${inputBaseClass} resize-none ${errors.message ? inputErrorClass : inputValidClass}`}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-400">
                        {t("contact.form.validation.messageRequired")}
                      </p>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {status === "sent" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3"
                      >
                        <CheckCircle2 className="text-primary shrink-0" size={22} strokeWidth={2} />
                        <p className="body-text text-foreground">{t("contact.form.success")}</p>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3"
                      >
                        <AlertCircle className="text-red-400 shrink-0" size={22} strokeWidth={2} />
                        <p className="body-text text-red-200">
                          {isEmailJsConfigured ? t("contact.form.error") : t("contact.form.configError")}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === "sending" || !isEmailJsConfigured}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-primary-dim hover:shadow-[0_0_24px_var(--color-primary-glow)] disabled:cursor-not-allowed disabled:opacity-70"
                    whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="animate-spin" size={18} strokeWidth={2} />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        <Send size={18} strokeWidth={2} />
                        {t("contact.form.send")}
                      </>
                    )}
                  </motion.button>
                </form>
              </GlassPanel>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
