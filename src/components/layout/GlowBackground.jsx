/**
 * Radial glow accent orbs for depth and atmosphere.
 * Primary (cyan) and secondary (violet) glows.
 */
export default function GlowBackground({ className = "" }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Cyan glow - top right */}
      <div
        className="absolute -top-1/2 -right-1/4 h-[80vw] w-[80vw] rounded-full opacity-20 blur-[128px] sm:opacity-25"
        style={{
          background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
      />
      {/* Violet glow - bottom left */}
      <div
        className="absolute -bottom-1/2 -left-1/4 h-[60vw] w-[60vw] rounded-full opacity-15 blur-[100px] sm:opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
        }}
      />
      {/* Center subtle glow */}
      <div
        className="absolute left-1/2 top-1/3 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full opacity-10 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
