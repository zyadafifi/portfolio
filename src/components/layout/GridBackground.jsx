/**
 * Subtle animated grid background.
 * Creates a futuristic grid overlay with optional animation.
 */
export default function GridBackground({
  className = "",
  animated = true,
  opacity = 0.15,
}) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] sm:bg-[size:80px_80px] md:bg-[size:96px_96px]"
        style={{
          opacity,
          animation: animated ? "grid-shift 20s linear infinite" : "none",
        }}
      />
      {/* Gradient fade at edges */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
        }}
      />
    </div>
  );
}
