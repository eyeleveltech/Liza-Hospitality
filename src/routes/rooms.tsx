import { createFileRoute } from "@tanstack/react-router";
import { Check, Maximize, Eye, Bell, Lock } from "lucide-react";
import {
  IconFood,
  IconRooms,
  IconWifi,
  IconAirConditioning,
  IconComplimentaryToiletries,
  IconDailyHousekeeping,
  IconInRoomLocker,
} from "@/components/liza/BrandIcons";
import roomSuite from "@/assets/room-suite.webp";
import roomExecutive from "@/assets/room-executive.webp";
import roomPremium from "@/assets/room-premium.webp";
import { Eyebrow, Diamond, EyebrowLeft } from "@/components/liza/Divider";
import { SiteHeader } from "@/components/liza/SiteHeader";
import { SiteFooter } from "@/components/liza/SiteFooter";
import { ScrollReveal } from "@/components/liza/ScrollReveal";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/rooms")({
  head: () => ({ meta: [{ title: "Rooms & Suites — Liza Hospitality" }] }),
  component: RoomsPage,
});

// ─── Data ───────────────────────────────────────────────────────────────────

type RoomData = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  img: string;
  imgAlt: string;
  size: string;
  guests: string;
  view: string;
  description: string;
  amenities: string[];
};

const roomsData: RoomData[] = [
  {
    id: "executive",
    name: "Executive Room",
    tagline: "Intimate elegance for the solo traveller or couple.",
    price: "₹ 8,500",
    img: roomExecutive,
    imgAlt: "Liza Hospitality Executive Room — warm lighting, king bed",
    size: "38 sq.m / 410 sq.ft",
    guests: "Up to 2 guests",
    view: "City View",
    description:
      "A quiet sanctuary high above the city. The Executive Room features bespoke teak furnishings, a plush king bed with 400-thread-count linens and a marble bathroom with rain shower.",
    amenities: [
      "King-size bed with bespoke linens",
      "Marble bathroom with rain shower",
      "High-speed complimentary Wi-Fi",
      "4K Smart TV with casting",
      "Nespresso coffee machine & tea bar",
      "In-room safe & bespoke vanity",
    ],
  },
  {
    id: "premium",
    name: "Premium Room",
    tagline: "Spacious comfort designed for longer stays and families.",
    price: "₹ 12,000",
    img: roomPremium,
    imgAlt: "Liza Hospitality Premium Room — spacious living area, garden view",
    size: "52 sq.m / 560 sq.ft",
    guests: "Up to 3 guests",
    view: "Garden & Pool View",
    description:
      "Generously proportioned with a dedicated sitting lounge, workstation and a private balcony overlooking our landscaped gardens. Includes deep-soaking bathtub and curated bath rituals.",
    amenities: [
      "King bed + daybed sleeper",
      "Private garden-view balcony",
      "Deep-soaking bathtub & separate shower",
      "Dedicated executive workstation",
      "Daily gourmet breakfast included",
      "Evening turn-down service",
    ],
  },
  {
    id: "suite",
    name: "Liza Suite",
    tagline: "The pinnacle of Liza hospitality. Unmatched luxury and privacy.",
    price: "₹ 22,000",
    img: roomSuite,
    imgAlt: "Liza Hospitality Suite — panoramic city view, master bedroom and lounge",
    size: "95 sq.m / 1,020 sq.ft",
    guests: "Up to 4 guests",
    view: "Panoramic Skyline",
    description:
      "Our signature accommodation. An expansive master bedroom, separate dining and living salon, private butler service on request and panoramic vistas across the Chennai skyline.",
    amenities: [
      "Master bedroom with king bed & walk-in wardrobe",
      "Separate dining room for 6 guests",
      "24-hour dedicated butler service",
      "Complimentary airport transfers (both ways)",
      "Club Lounge access & private check-in",
      "Signature spa treatment for two",
    ],
  },
];

const includedAmenities = [
  { label: "High-Speed Wi-Fi", Icon: IconWifi },
  { label: "Daily Breakfast", Icon: IconFood },
  { label: "Climate Control", Icon: IconAirConditioning },
  { label: "Luxury Toiletries", Icon: IconComplimentaryToiletries },
  { label: "Housekeeping", Icon: IconDailyHousekeeping },
  { label: "In-Room Safe", Icon: IconInRoomLocker },
];

// ─── Page ────────────────────────────────────────────────────────────────────

function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <img
          src={roomSuite}
          alt="Liza Hospitality Suite — panoramic city view"
          width={1600}
          height={900}
          className="absolute inset-0 size-full object-cover object-center animate-hero-img"
        />
        {/* Forest gradient — heavy on the left for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(31,56,46,0.92) 28%, rgba(31,56,46,0.55) 58%, rgba(31,56,46,0.15) 100%)",
          }}
        />
        {/* Text block */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-16">
          <EyebrowLeft>Rooms &amp; Suites</EyebrowLeft>
          <h1 className="mt-5 font-serif text-5xl leading-[1.08] text-cream lg:text-[4rem] animate-hero-title">
            Rest. Relax.
            <br />
            Reconnect.
          </h1>
          <p className="mt-4 font-sans font-light italic text-cream/80 text-lg lg:text-xl animate-hero-sub">
            Three carefully curated stays, designed around you.
          </p>
          <div className="mt-6 animate-hero-divider">
            <div className="mt-4 flex max-w-100 items-center gap-4">
              <span className="h-px flex-1 bg-gold/70" />
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold/70" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Room Cards ─────────────────────────────────────────────────────── */}
      <section>
        {roomsData.map((room, index) => (
          <ScrollReveal key={room.id} variant="fade-up">
            <RoomCard key={room.id} room={room} imageLeft={index % 2 === 0} />
          </ScrollReveal>
        ))}
      </section>

      {/* ── All Rooms Include ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest px-6 py-20 lg:py-20">
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <ScrollReveal variant="fade-up">
            <Eyebrow>Every Room</Eyebrow>
            <h2 className="mt-5 text-center font-serif text-4xl text-cream lg:text-5xl">
              What's Always Included
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {includedAmenities.map(({ label, Icon }, i) => (
              <ScrollReveal key={label} variant="fade-up" delay={i * 80}>
                <div
                  className={[
                    "flex flex-col items-center gap-3 px-4 text-center group",
                    i !== includedAmenities.length - 1 ? "lg:border-r lg:border-cream/15" : "",
                  ].join(" ")}
                >
                  <Icon className="size-16 text-gold transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs leading-snug tracking-wide text-cream/80 group-hover:text-cream transition-colors">
                    {label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ────────────────────────────────────────────────────── */}
      <section className="bg-cream px-6 py-20 lg:py-20 pattern-cream-section">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal variant="fade-up">
            <Eyebrow>Reserve Your Stay</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl text-forest lg:text-5xl">
              Experience Liza.
              <br />
              Choose Your Room.
            </h2>
            <div className="my-7">
              <Diamond />
            </div>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
              Whether you're here for business or leisure, every Liza stay is crafted to feel
              personal. Select your room and let us take care of the rest.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="btn-shimmer inline-block bg-terracotta px-12 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-terracotta-foreground transition-all duration-300 hover:opacity-95 hover:shadow-xl"
              >
                Book Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// ─── RoomCard ────────────────────────────────────────────────────────────────
// Image and details are always direct grid children so both stretch to full
// row height without an extra wrapper. Order classes handle the alternation.

function RoomCard({ room, imageLeft }: { room: RoomData; imageLeft: boolean }) {
  return (
    <article className="grid lg:grid-cols-2" style={{ minHeight: "500px" }}>
      {/* Image half */}
      <div className={cn("relative min-h-80 lg:min-h-0", !imageLeft && "order-1 lg:order-2")}>
        <img
          src={room.img}
          alt={room.imgAlt}
          width={900}
          height={700}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      {/* Details half */}
      <div
        className={cn(
          "flex flex-col justify-center bg-cream px-8 py-14 lg:px-12 pattern-cream-section",
          !imageLeft && "order-2 lg:order-1",
        )}
      >
        <EyebrowLeft>{`From ${room.price} / night`}</EyebrowLeft>

        <h2 className="mt-4 font-serif text-4xl text-forest lg:text-[2.6rem]">{room.name}</h2>

        {/* Stat chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-forest/80">
            <Maximize className="size-3.5 text-gold" strokeWidth={1.5} />
            {room.size}
          </span>
          <span className="flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-forest/80">
            <IconRooms className="size-3.5 text-gold" strokeWidth={1.5} />
            {room.guests}
          </span>
          <span className="flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-forest/80">
            <Eye className="size-3.5 text-gold" strokeWidth={1.5} />
            {room.view}
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{room.description}</p>

        {/* Amenities */}
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {room.amenities.map((a) => (
            <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-terracotta" strokeWidth={2.5} />
              {a}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            to="/contact"
            className="btn-shimmer inline-block bg-forest px-8 py-3.5 text-[0.7rem] tracking-[0.22em] uppercase text-cream transition-all duration-300 hover:opacity-90 hover:shadow-lg cursor-pointer"
          >
            Book This Room
          </Link>
          <Link
            to="/contact"
            className="text-[0.7rem] tracking-[0.22em] uppercase text-forest underline underline-offset-4 transition-colors hover:text-terracotta"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}
