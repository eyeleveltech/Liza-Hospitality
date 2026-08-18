import * as React from "react";
import { useEffect, useState } from "react";

export interface AnimatedCounterProps {
  value: number;
  suffix?: string | undefined;
  prefix?: string | undefined;
  duration?: number | undefined;
  formatComma?: boolean | undefined;
  isActive?: boolean | undefined;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  formatComma = false,
  isActive = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const current = Math.floor(easedProgress * value);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isActive, value, duration]);

  const formattedNumber = formatComma ? count.toLocaleString("en-US") : count.toString();

  return (
    <span>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
