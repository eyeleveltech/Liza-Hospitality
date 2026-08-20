import { createFileRoute } from "@tanstack/react-router";
import { Landmark, HeartHandshake, Salad, Leaf } from "lucide-react";
import storyService from "@/assets/story-service.webp";
import hotelRoyale from "@/assets/royalebyliza.webp";
import hotelRegency from "@/assets/hotel-regency.webp";
import hotelGrande from "@/assets/hotel-grande.webp";
import hotelAltura from "@/assets/hotel-altura.webp";
import { Eyebrow, Diamond, EyebrowLeft } from "@/components/liza/Divider";
import { SiteHeader } from "@/components/liza/SiteHeader";
import { SiteFooter } from "@/components/liza/SiteFooter";
import { AnimatedCounter } from "@/components/liza/AnimatedStat";
import { ScrollReveal } from "@/components/liza/ScrollReveal";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us — Liza Hospitality" }] }),
  component: AboutPage,
});

// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { value: 37, suffix: "+", label: "Years of Hospitality" },
  { value: 4, suffix: "", label: "Iconic Properties" },
  { value: 520, suffix: "+", label: "Rooms" },
  { value: 30000, suffix: "+", formatComma: true, label: "Annual Guests" },
];

const hotels = [
  {
    name: "Liza ROYALE",
    img: hotelRoyale,
    city: "Chennai",
    description:
      "Our flagship property in Periamet, Chennai — where heritage architecture meets contemporary luxury and timeless hospitality.",
  },
  {
    name: "Liza REGENCY",
    img: hotelRegency,
    city: "Chennai",
    description:
      "Situated in Periamet, Chennai — where classic comfort meets warm South Indian hospitality and thoughtful service.",
  },
  {
    name: "Liza GRANDE",
    img: hotelGrande,
    city: "Chennai",
    description:
      "A serene retreat in Nungambakkam, Chennai — thoughtful, spacious, and crafted for modern travellers seeking refined calm.",
  },
  {
    name: "Liza ALTURA",
    img: hotelAltura,
    city: "Chennai",
    description:
      "Our contemporary architectural jewel in Periamet, Chennai — a celebration of modern elegance, culinary craft and southern warmth.",
  },
];

const values = [
  {
    Icon: Landmark,
    title: "Cultural Authenticity",
    description:
      "Every Liza space reflects the architectural cadence, craftsmanship and soul of its locale — honoring Indian heritage with contemporary poise.",
  },
  {
    Icon: HeartHandshake,
    title: "Intuitive Service",
    description:
      "We believe the finest hospitality anticipates without intruding. Our team is trained to listen, remember and craft stays that feel deeply personal.",
  },
  {
    Icon: Salad,
    title: "Culinary Craft",
    description:
      "From regional South Indian breakfast spreads to artisanal evening dining, our kitchens celebrate provenance, seasonality and bold flavours.",
  },
  {
    Icon: Leaf,
    title: "Thoughtful Luxury",
    description:
      "Sustainability is woven into our craft — from chemical-free botanical amenities to locally sourced materials and energy-conscious operations.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

function AboutPage() {
  const { ref: statsRef, isInView: isStatsVisible } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-cream font-sans">
      <SiteHeader />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <img
          src={storyService}
          alt="Liza Hospitality — story and service"
          className="absolute inset-0 h-full w-full object-cover animate-hero-img"
        />
        {/* Left-to-transparent gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #FFF6E4 0%, #FFF6E4 35%, rgba(255,246,228,0.7) 55%, transparent 72%)",
          }}
        />
        <div className="relative z-10 flex max-w-2xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-20">
          <EyebrowLeft>Our Story</EyebrowLeft>
          <h1 className="mt-4 sm:mt-5 font-serif text-4xl leading-tight text-forest sm:text-6xl lg:text-[76px] animate-hero-title">
            Modern Heritage.
            <br />
            Timeless Stays.
          </h1>
          <p className="mt-4 font-sans font-light italic text-forest/70 text-base sm:text-xl animate-hero-sub">
            Rooted in culture. Crafted for today.
          </p>
          <div className="mt-6 animate-hero-divider">
            <div className="mt-4 flex max-w-68 items-center gap-4">
              <span className="h-px flex-1 bg-gold/70" />
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold/70" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20 pattern-cream-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2">
            {/* Left — narrative */}
            <ScrollReveal variant="fade-up">
              <EyebrowLeft>Heritage Since 1987</EyebrowLeft>
              <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl leading-snug text-forest lg:text-5xl">
                A Legacy Built on Warmth
              </h2>
              <p className="mt-5 sm:mt-6 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Founded in 1987 by the Malhotra family, Liza Hospitality began with a single
                promise: that every guest should feel at home, no matter how far from home they
                were.
              </p>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                What started as a 42-room property in Chennai has grown into four iconic hotels
                across the city's premier hubs — each one carrying the warmth, craft and cultural
                integrity that has defined Liza from its very first day.
              </p>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Today, Liza Hospitality is more than a hotel group. It is a living expression of
                India's heritage — reimagined with contemporary elegance, and delivered through
                intuitive, sincere hospitality.
              </p>
            </ScrollReveal>

            {/* Right — pullquote */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="flex flex-col items-center text-center">
                <Diamond />
                <blockquote className="mt-6 sm:mt-8 px-2 sm:px-4">
                  <p className="font-sans text-lg sm:text-xl italic leading-relaxed text-forest font-light">
                    "Hospitality is not a service. It is the art of making someone feel they truly
                    belong."
                  </p>
                  <footer className="mt-5 sm:mt-6">
                    <span className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-gold">
                      Arjun Malhotra, Founder
                    </span>
                  </footer>
                </blockquote>
                <div className="mt-6 sm:mt-8">
                  <Diamond />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="relative overflow-hidden bg-forest py-14 sm:py-16">
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundSize: "280px",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-y-10 sm:gap-y-12 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} variant="fade-up" delay={i * 100}>
                <div
                  className={cn(
                    "flex flex-col items-center text-center px-2",
                    i % 2 === 0
                      ? "border-r border-cream/20"
                      : i < stats.length - 1
                        ? "lg:border-r lg:border-cream/20"
                        : "",
                  )}
                >
                  <span className="font-sans text-4xl sm:text-5xl font-semibold tracking-tight text-gold">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      formatComma={stat.formatComma}
                      isActive={isStatsVisible}
                      duration={1800}
                    />
                  </span>
                  <span className="mt-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] text-cream/70">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Properties ───────────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-20 pattern-cream-section">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <Eyebrow>Our Hotels</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-snug text-forest lg:text-5xl">
                Four Destinations. One Promise.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {hotels.map((hotel, idx) => (
              <ScrollReveal key={hotel.name} variant="fade-up" delay={idx * 150}>
                <div className="group overflow-hidden border border-border/60 bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-[0_20px_50px_-30px_rgba(31,56,46,0.4)] hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={`${hotel.name} — ${hotel.city}`}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold">
                      {hotel.city}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-forest">{hotel.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {hotel.description}
                    </p>
                    <Link
                      to="/rooms"
                      className="mt-5 inline-block text-xs font-medium tracking-widest uppercase text-forest transition-colors hover:text-gold"
                    >
                      Explore Hotel →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest py-20 lg:py-24">
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundSize: "280px",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <Eyebrow>Our Promise</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-snug text-cream lg:text-5xl">
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, description }, i) => (
              <ScrollReveal key={title} variant="fade-up" delay={i * 100}>
                <div className="group flex flex-col">
                  <Icon
                    className="size-7 text-gold transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-4 font-serif text-xl text-cream">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 pattern-cream-section">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <Eyebrow>Experience Liza</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-snug text-forest lg:text-5xl">
              Every Stay Tells a Story.
            </h2>
            <div className="mt-6 flex justify-center">
              <Diamond />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/rooms"
                className="btn-shimmer inline-block bg-forest px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              >
                Explore Rooms
              </Link>
              <Link
                to="/contact"
                className="btn-shimmer inline-block border border-forest px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-forest transition-all duration-300 hover:bg-forest hover:text-cream hover:shadow-md cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
