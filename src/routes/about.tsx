import { createFileRoute } from "@tanstack/react-router";
import { Landmark, HeartHandshake, Salad, Leaf } from "lucide-react";
import storyService from "@/assets/story-service.jpg";
import hotelRoyal from "@/assets/hotel-royal.jpg";
import hotelRegency from "@/assets/hotel-regency.jpg";
import hotelGrande from "@/assets/hotel-grande.jpg";
import hotelHotels from "@/assets/hotel-hotels.jpg";
import { Eyebrow, Diamond, EyebrowLeft } from "@/components/liza/Divider";
import { SiteHeader } from "@/components/liza/SiteHeader";
import { SiteFooter } from "@/components/liza/SiteFooter";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us — Liza Hospitality" }] }),
  component: AboutPage,
});

// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { number: "37+", label: "Years of Hospitality" },
  { number: "4", label: "Iconic Properties" },
  { number: "520+", label: "Rooms" },
  { number: "30,000+", label: "Annual Guests" },
];

const hotels = [
  {
    name: "Liza Royal",
    img: hotelRoyal,
    city: "New Delhi",
    description:
      "Our flagship property at Connaught Place — where heritage architecture meets contemporary luxury in the heart of India's capital.",
  },
  {
    name: "Liza Regency",
    img: hotelRegency,
    city: "Mumbai",
    description:
      "Overlooking Marine Drive, the Regency is where the sea breeze meets warm hospitality. A landmark stay in the City of Dreams.",
  },
  {
    name: "Liza Grande",
    img: hotelGrande,
    city: "Bengaluru",
    description:
      "Situated on M.G. Road, the Grande is a graceful retreat from the energy of India's Silicon Valley — thoughtful, spacious and serene.",
  },
  {
    name: "Liza Hotels",
    img: hotelHotels,
    city: "Chennai",
    description:
      "Our southern jewel on Anna Salai — a celebration of Tamil heritage, culinary tradition and the warmth that only the South can offer.",
  },
];

const values = [
  {
    Icon: Landmark,
    title: "Timeless Heritage",
    description:
      "Inspired by India's architecture, arts and traditions, every Liza property is a living ode to the culture it inhabits.",
  },
  {
    Icon: HeartHandshake,
    title: "Thoughtful Service",
    description:
      "We anticipate before we are asked. Our hospitality is intuitive, sincere and always deeply personal.",
  },
  {
    Icon: Salad,
    title: "Culinary Excellence",
    description:
      "From regional classics to international cuisine, our kitchens celebrate the full, magnificent spectrum of Indian flavour.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Choices",
    description:
      "Responsible hospitality is not an option — it is an obligation. We act for today and for tomorrow.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <SiteHeader />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <img
          src={storyService}
          alt="Liza Hospitality — story and service"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Left-to-transparent gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #FFF6E4 0%, #FFF6E4 35%, rgba(255,246,228,0.7) 55%, transparent 72%)",
          }}
        />
        <div className="relative z-10 flex max-w-2xl flex-col justify-center px-8 py-16 lg:px-20">
          <EyebrowLeft>Our Story</EyebrowLeft>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-forest sm:text-6xl lg:text-[76px]">
            Modern Heritage.
            <br />
            Timeless Stays.
          </h1>
          <p className="mt-4 font-sans font-light italic text-forest/70 text-lg sm:text-xl">
            Rooted in culture. Crafted for today.
          </p>
          <div className="mt-6">
            <Diamond />
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left — narrative */}
            <div>
              <EyebrowLeft>Heritage Since 1987</EyebrowLeft>
              <h2 className="mt-5 font-serif text-4xl leading-snug text-forest lg:text-5xl">
                A Legacy Built on Warmth
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Founded in 1987 by the Malhotra family, Liza Hospitality began with a single
                promise: that every guest should feel at home, no matter how far from home they
                were.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                What started as a 42-room property in Connaught Place, New Delhi, has grown into
                four iconic hotels spanning India's most vibrant cities — each one carrying the
                warmth, craft and cultural integrity that has defined Liza from its very first day.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Today, Liza Hospitality is more than a hotel group. It is a living expression of
                India's heritage — reimagined with contemporary elegance, and delivered through
                intuitive, sincere hospitality.
              </p>
              <div className="mt-10">
                <Diamond />
              </div>
            </div>

            {/* Right — pullquote */}
            <div className="flex flex-col items-center text-center">
              <Diamond />
              <blockquote className="mt-8 px-4">
                <p className="font-sans text-xl italic leading-relaxed text-forest font-light">
                  "Hospitality is not a service. It is the art of making someone feel they truly
                  belong."
                </p>
                <footer className="mt-6">
                  <span className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-gold">
                    Arjun Malhotra, Founder
                  </span>
                </footer>
              </blockquote>
              <div className="mt-8">
                <Diamond />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-forest py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col items-center text-center",
                  i < stats.length - 1 && "lg:border-r lg:border-cream/20",
                  i % 2 === 0 && i < stats.length - 1 && "border-r border-cream/20 lg:border-r-0",
                )}
              >
                <span className="font-sans text-5xl font-light tracking-tight text-gold">
                  {stat.number}
                </span>
                <span className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Properties ───────────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Eyebrow>Our Hotels</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-snug text-forest lg:text-5xl">
              Four Destinations. One Promise.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {hotels.map((hotel) => (
              <div
                key={hotel.name}
                className="group overflow-hidden border border-border/60 bg-card transition-all duration-300 hover:border-gold/50 hover:shadow-[0_20px_50px_-30px_rgba(31,56,46,0.4)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={hotel.img}
                    alt={`${hotel.name} — ${hotel.city}`}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────────────── */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Eyebrow>Our Promise</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-snug text-cream lg:text-5xl">
              What We Stand For
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, description }) => (
              <div key={title} className="flex flex-col">
                <Icon className="size-7 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-cream">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
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
              className="inline-block bg-forest px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-opacity hover:opacity-80"
            >
              Explore Rooms
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-forest px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
