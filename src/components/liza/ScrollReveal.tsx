import { useEffect, useRef, useState, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale-up";
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.15,
  once = true,
  className,
  style,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const variantStyles = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7",
    "fade-down": isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-7",
    "fade-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-7",
    "fade-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "scale-up": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all will-change-[transform,opacity]",
        variantStyles[variant],
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
