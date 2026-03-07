import { forwardRef } from "react";

/**
 * Max-width container with responsive horizontal padding.
 * Mobile-first: 1rem → 1.5rem → 2rem
 */
const Container = forwardRef(function Container(
  { children, className = "", as: Component = "div", ...props },
  ref
) {
  return (
    <Component
      ref={ref}
      className={`mx-auto w-full max-w-[var(--container-max,1280px)] px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Container;
