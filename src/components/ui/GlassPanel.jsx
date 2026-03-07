/**
 * Glass panel with backdrop blur for premium card/surface effects.
 */
export default function GlassPanel({
  children,
  className = "",
  variant = "default",
}) {
  const baseClass =
    "rounded-xl border border-border/50 backdrop-blur-xl backdrop-saturate-150";
  const variants = {
    default: "bg-surface/60",
    elevated: "bg-surface-elevated/70",
    subtle: "bg-bg/40",
  };

  return (
    <div
      className={`${baseClass} ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </div>
  );
}
