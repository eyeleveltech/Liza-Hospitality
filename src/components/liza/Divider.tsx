import React from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-10 bg-gold/70" />
      <span className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-gold">
        {children}
      </span>
      <span className="h-px w-10 bg-gold/70" />
    </div>
  );
}

export function EyebrowLeft({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-gold" />
      <span className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-terracotta">
        {children}
      </span>
    </div>
  );
}

export function Diamond({
  align = "center",
  fullWidth = false,
  halfWidth = false,
  className,
}: {
  align?: "center" | "left" | "right" | undefined;
  fullWidth?: boolean | undefined;
  halfWidth?: boolean | undefined;
  className?: string | undefined;
}) {
  const isFull = fullWidth || className?.includes("w-full");
  const isHalf = halfWidth || className?.includes("w-1/2") || className?.includes("max-w-xs");
  const alignClass =
    align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";

  const wingClass = isFull
    ? align === "left"
      ? "w-6 shrink-0"
      : "flex-1"
    : isHalf
      ? "w-16"
      : "w-8";

  const rightWingClass = isFull
    ? align === "right"
      ? "w-6 shrink-0"
      : "flex-1"
    : isHalf
      ? "w-16"
      : "w-8";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        isFull && "w-full",
        isHalf && "w-fit",
        alignClass,
        className,
      )}
    >
      <span className={cn("h-px bg-gold/50", wingClass)} />
      <span className="size-1.5 shrink-0 rotate-45 bg-gold" />
      <span className={cn("h-px bg-gold/50", rightWingClass)} />
    </div>
  );
}

export function DiamondLeft({
  fullWidth = false,
  halfWidth = false,
  className,
}: {
  fullWidth?: boolean | undefined;
  halfWidth?: boolean | undefined;
  className?: string | undefined;
}) {
  return <Diamond align="left" fullWidth={fullWidth} halfWidth={halfWidth} className={className} />;
}

export function DoubleLineDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 py-2", className)}>
      <div className="flex flex-col gap-1 w-12">
        <span className="h-px w-full bg-gold/40" />
        <span className="h-px w-full bg-gold/40" />
      </div>
      <span className="size-2 rotate-45 border border-gold/70 bg-transparent" />
      <div className="flex flex-col gap-1 w-12">
        <span className="h-px w-full bg-gold/40" />
        <span className="h-px w-full bg-gold/40" />
      </div>
    </div>
  );
}

/**
 * Architectural Arch Frame (04 GRAPHIC LANGUAGE: Arched forms & soft geometry)
 */
export function ArchFrame({
  children,
  className,
  archTop = true,
  withBorder = false,
}: {
  children: React.ReactNode;
  className?: string;
  archTop?: boolean;
  withBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-500",
        archTop ? "rounded-t-[72px] sm:rounded-t-[96px]" : "rounded-b-[72px] sm:rounded-b-[96px]",
        withBorder && "ring-1 ring-gold/40 p-1 bg-cream",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Luxury Card Frame with Diamond Corner Accents
 */
export function DecorativeFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative border border-gold/30 bg-card p-6 sm:p-8", className)}>
      {/* Corner Diamond Accents */}
      <span className="absolute -top-1 -left-1 size-2 rotate-45 bg-gold" />
      <span className="absolute -top-1 -right-1 size-2 rotate-45 bg-gold" />
      <span className="absolute -bottom-1 -left-1 size-2 rotate-45 bg-gold" />
      <span className="absolute -bottom-1 -right-1 size-2 rotate-45 bg-gold" />
      {children}
    </div>
  );
}
