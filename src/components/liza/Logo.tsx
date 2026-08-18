import * as React from "react";
import { cn } from "@/lib/utils";
import lizaLogoSvg from "@/assets/Liza_Hospitality_logo.svg";
import lizaMarkPng from "@/assets/Asset 4.png";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "stacked" | "mark" | "badge" | "horizontal" | "image";
  tone?: "default" | "light" | "gold" | "forest";
  size?: number | string;
  className?: string;
  showText?: boolean;
  clearSpace?: boolean;
}

/**
 * Official Brand Monogram Mark (Asset 4.png)
 * Strictly preserves aspect ratio with no distortion.
 */
export function LogoMark({
  size = 56,
  color = "currentColor",
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  size?: number | string;
  color?: string;
}) {
  const dimension = typeof size === "number" ? `${size}px` : size;
  return (
    <span
      role="img"
      aria-label="Liza Hospitality Monogram Mark"
      className={cn("inline-block shrink-0 aspect-square bg-current", className)}
      style={{
        width: dimension,
        height: dimension,
        minWidth: dimension,
        minHeight: dimension,
        maskImage: `url("${lizaMarkPng}")`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url("${lizaMarkPng}")`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        color: color !== "currentColor" ? color : undefined,
        ...style,
      }}
      {...props}
    />
  );
}

/**
 * Circular Crest Badge (01 LOGO SYSTEM & 06 BRAND DO'S)
 * Features Forest Green backdrop with Antique Gold dual ring and monogram.
 */
export function LogoBadge({
  size = 76,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <defs>
        <radialGradient id="badgeBgGrad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#254638" />
          <stop offset="100%" stopColor="#182E26" />
        </radialGradient>
      </defs>

      {/* Forest Green Background Crest */}
      <circle cx="100" cy="100" r="94" fill="url(#badgeBgGrad)" />

      {/* Outer & Inner Sand Beige / Gold Accent Rings (#DCCC86) */}
      <circle cx="100" cy="100" r="94" stroke="#DCCC86" strokeWidth="3" />
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="#DCCC86"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.75"
      />

      {/* Monogram in #DCCC86 inside the badge */}
      <g transform="translate(10, 8) scale(0.9)">
        {/* Outer Ring */}
        <path
          d="M68 116 C 54 98, 57 60, 84 42 C 114 22, 160 36, 168 76 C 176 116, 146 156, 102 156 C 88 156, 78 150, 72 142"
          stroke="#DCCC86"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left Stem */}
        <path
          d="M87 34 L91 30 V 104 C 91 108, 88 112, 85 116"
          stroke="#DCCC86"
          strokeWidth="4.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Right Stem & Swash */}
        <path
          d="M117 34 L121 30 V 62 C 121 68, 117 72, 113 78 C 111 82, 111 88, 114 94 C 117 100, 114 108, 107 116 C 98 126, 85 138, 80 148 C 76 156, 84 162, 96 160 C 112 158, 130 148, 142 136"
          stroke="#DCCC86"
          strokeWidth="4.2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        {/* Center Notch */}
        <path d="M98 84 L103 79" stroke="#DCCC86" strokeWidth="3.2" strokeLinecap="round" />
        {/* Diamonds */}
        <rect x="122" y="92" width="8" height="8" fill="#DCCC86" />
        <rect x="133" y="103" width="8" height="8" fill="#DCCC86" />
      </g>
    </svg>
  );
}

/**
 * Universal Brand Logo Component with Clear Space and Hierarchy
 */
export function Logo({
  variant = "horizontal",
  tone = "default",
  color,
  size,
  className,
  showText = true,
  clearSpace = false,
  ...props
}: LogoProps & { color?: string }) {
  const colorMap = {
    default: "text-forest",
    light: "text-cream",
    gold: "text-[#DCCC86]",
    forest: "text-forest",
    sand: "text-[#DCCC86]",
  };
  const textColorClass = color ? "" : colorMap[tone] || "text-forest";
  const clearSpaceClass = clearSpace ? "p-4" : "";

  // Standalone Monogram Mark
  if (variant === "mark") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center select-none",
          textColorClass,
          clearSpaceClass,
          className,
        )}
        {...props}
      >
        <LogoMark size={size ?? 48} />
      </div>
    );
  }

  // Circular Crest Badge
  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center select-none",
          clearSpaceClass,
          className,
        )}
        {...props}
      >
        <LogoBadge size={size ?? 72} />
      </div>
    );
  }

  // Primary Logo (01 LOGO SYSTEM: Monogram centered over single-line "LIZA HOSPITALITY")
  if (variant === "primary") {
    return (
      <div
        className={cn(
          "inline-flex flex-col items-center justify-center text-center select-none",
          textColorClass,
          clearSpaceClass,
          className,
        )}
        {...props}
      >
        <LogoMark size={size ?? 68} />
        {showText && (
          <span className="mt-3.5 font-serif text-sm sm:text-base tracking-[0.38em] uppercase leading-none font-medium">
            Liza Hospitality
          </span>
        )}
      </div>
    );
  }

  // Secondary Stacked Lockup (Monogram centered over two-line "LIZA" / "HOSPITALITY")
  if (variant === "stacked") {
    return (
      <div
        className={cn(
          "inline-flex flex-col items-center justify-center text-center select-none",
          textColorClass,
          clearSpaceClass,
          className,
        )}
        {...props}
      >
        <LogoMark size={size ?? 54} />
        {showText && (
          <div className="mt-2.5 leading-none">
            <div className="font-serif text-2xl tracking-[0.28em] uppercase font-medium">Liza</div>
            <div className="mt-1 text-[0.58rem] tracking-[0.45em] uppercase font-light opacity-85">
              Hospitality
            </div>
          </div>
        )}
      </div>
    );
  }

  // Direct Image SVG Lockup (renders Liza_Hospitality_logo.svg with clean masking or direct img)
  if (variant === "image") {
    if (tone === "light") {
      return (
        <div
          className={cn("inline-flex items-center select-none", clearSpaceClass, className)}
          {...props}
        >
          <img
            src={lizaLogoSvg}
            alt="Liza Hospitality"
            className="h-10 w-auto object-contain"
            style={{ maxHeight: size ? `${size}px` : undefined }}
          />
        </div>
      );
    }

    // For default/forest/gold tones on light backgrounds, use CSS mask to colorize accurately
    const bgClass = tone === "gold" ? "bg-gold" : "bg-forest";

    return (
      <div
        className={cn("inline-block select-none", bgClass, clearSpaceClass, className)}
        style={{
          maskImage: `url("${lizaLogoSvg}")`,
          WebkitMaskImage: `url("${lizaLogoSvg}")`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "left center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "left center",
          height: size ? `${size}px` : "48px",
          width: size ? `calc(${size}px * 3.89)` : "187px",
        }}
        aria-label="Liza Hospitality"
        role="img"
        {...props}
      />
    );
  }

  // Horizontal Header Lockup (Mark on left, two-line text on right)
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3.5 leading-none select-none",
        textColorClass,
        clearSpaceClass,
        className,
      )}
      {...props}
    >
      <LogoMark size={size ?? 46} />
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-xl tracking-[0.24em] uppercase font-medium">Liza</span>
          <span className="mt-0.5 text-[0.55rem] tracking-[0.40em] uppercase font-light opacity-80">
            Hospitality
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Direct PNG Image Logo Component
 */
export function LizaLogoImage({
  tone = "default",
  height = 40,
  className,
}: {
  tone?: "default" | "light" | "gold";
  height?: number | string;
  className?: string;
}) {
  return <Logo variant="image" tone={tone} size={height} {...(className ? { className } : {})} />;
}
